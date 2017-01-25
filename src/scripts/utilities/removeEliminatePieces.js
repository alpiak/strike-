/**
 * Created by qhyang on 2017/1/25.
 */
import Matter from "matter-js";

export default function (game) {
    let boardBounds = game.board.bounds;
    for (let i = 0, j = game.playerQueue.length; i != j; ++i) {
        let player = game.playerQueue.get(i),
            pieceSet = player.pieceSet;
        for (let i = 0, j = pieceSet.length; i != j; ++i) {
            let body = pieceSet.get(i).body;
            if (body.position.x < boardBounds.min.x
                || body.position.x > boardBounds.max.x
                || body.position.y < boardBounds.min.y
                || body.position.y > boardBounds.max.y) {
                pieceSet.remove(pieceSet.get(i--));
                j--;
                Matter.Composite.remove(game.engine.world, body);
            }
        }
    }
};