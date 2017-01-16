/**
 * Created by qhyang on 2017/1/16.
 */
import Matter from "matter-js";
import engine from "../physics/engine";

export default Matter.Render.create({
    element: document.body,
    engine: engine
});