/**
 * Created by qhyang on 2017/1/24.
 */
let decideMoveCount = (function() {
        let getRestPieceCount = function (player) {
                return player.pieceTotal - player.pieceSet.length;
            };

        return function (player, playerQueue) {
            let minPieceTotalPlayer = (function () {
                    let minPieceTotal = playerQueue.get(0).pieceTotal,
                        index = 0;
                    for (let i = 1, len = playerQueue.length; i < len; i++) {
                        if (playerQueue.get(i).pieceTotal < minPieceTotal) {
                            minPieceTotal = playerQueue.get(i).pieceTotal;
                            index = i;
                        }
                    }
                    return playerQueue.get(index);
                }()),
                stepLength = player.pieceTotal / minPieceTotalPlayer.pieceTotal,
                stepsPlayed = Math.round(player.pieceSet.length / stepLength),
                playerRestPieceCount = getRestPieceCount(player),
                adjustedPlayerRestPieceCount,
                minRestPieceCount = getRestPieceCount(minPieceTotalPlayer);
            if (stepsPlayed < minPieceTotalPlayer.pieceSet.length) {
                adjustedPlayerRestPieceCount = Math.round(playerRestPieceCount - stepLength);
            } else if (stepsPlayed > minPieceTotalPlayer.pieceSet.length) {
                adjustedPlayerRestPieceCount = Math.round(playerRestPieceCount + stepLength);
            } else {
                adjustedPlayerRestPieceCount = playerRestPieceCount;
            }
            let count = Math.round(adjustedPlayerRestPieceCount / minRestPieceCount);
            if (count === 0) {
                return playerRestPieceCount;
            }
            if (count <= playerRestPieceCount) {
                return count;
            } else {
                return playerRestPieceCount;
            }
        }
    }());

export default decideMoveCount;