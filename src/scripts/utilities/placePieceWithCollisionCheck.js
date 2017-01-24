/**
 * Created by qhyang on 2017/1/24.
 */
import Rx from "rxjs/Rx";
import Matter from "matter-js";

/**
 * Check a body if it collide with any other bodies. If not, add it into the world.
 *
 * @param body {Matter.Body} The body you want to add
 * @param engine {Matter.Engine} The physics engine
 * @param excluded {Matter.Body[]} The bodies exluded from the collision check
 * @param noCollisionCallback {function} The callback function called when no collision detected
 * @param collisionCallback {function} The callback function called when collision detected
 */
export default function (body, engine, excluded, noCollisionCallback, collisionCallback) {
    let hasCollision = false,
        subscription = Rx.Observable.create(subscriber => {
            Matter.Events.on(engine, "collisionStart", event => {
                subscriber.next(event);
            });
        })
            .filter(event => {
                let pairs = event.pairs;

                for (let i = 0, j = pairs.length; i != j; ++i) {
                    let pair = pairs[i],
                    hasCollision = (function () {
                        if (pair.bodyA === body) {
                            for (let i = 0, j = excluded.length; i != j; ++i) {
                                if (pair.bodyB === excluded[i]) {
                                    return false;
                                }
                            }
                            return true;
                        } else if (pair.bodyB === body) {
                            for (let i = 0, j = excluded.length; i != j; ++i) {
                                if (pair.bodyA === excluded[i]) {
                                    return false;
                                }
                            }
                            return true;
                        }
                    }());
                    if (hasCollision) {
                        return true;
                    }
                }
                return false;
            })
            .subscribe(() => {
                subscription.unsubscribe();
                hasCollision = true;
            });
    Matter.Body.set(body, {
        isSensor: true
    });
    Matter.World.add(engine.world, body);
    let count = 0,
        runOnNextFrame = function () {
            if (Matter.Composite.get(engine.world, body.id, body.type)) {
                if (hasCollision === true) {
                    Matter.Composite.remove(engine.world, body);
                    subscription.unsubscribe();
                    collisionCallback();
                } else if (count >= 5) {
                    Matter.Body.set(body, {
                        isSensor: false
                    });
                    subscription.unsubscribe();
                    noCollisionCallback();
                } else {
                    count++;
                    requestAnimationFrame(runOnNextFrame);
                }
            }
        };
    requestAnimationFrame(runOnNextFrame);
}