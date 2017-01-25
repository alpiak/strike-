/**
 * Created by qhyang on 2017/1/25.
 */
import Matter from "matter-js";

export default function (world, callback) {
    let count = 0,
        previousAllBodies = [],
        runByFrame = function () {
            let precision = 0.01,
                allBodies = Matter.Composite.allBodies(world),
                isStop = true;
            for (let i = 0, j = allBodies.length; i != j; ++i) {
                let body = allBodies[i],
                    previousBody = previousAllBodies[i];
                if (typeof previousBody === "undefined") {
                    previousAllBodies[i] = previousBody = {
                        position: {}

                    };
                } else if (Math.abs(body.position.x - previousBody.position.x) > precision
                    || Math.abs(body.position.x - previousBody.position.x) > precision) {
                    isStop = false;
                }
                previousBody.position.x = body.position.x;
                previousBody.position.y = body.position.y;
            }
            if (isStop) {
                count++;
            } else {
                count = 0;
            }
            if (count > 10) {
                callback();
            } else {
                requestAnimationFrame(runByFrame);
            }
        };
    runByFrame();
};