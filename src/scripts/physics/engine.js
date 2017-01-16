/**
 * Created by qhyang on 2017/1/16.
 */
import Matter from "matter-js";
import world from "./world";

export default Matter.Engine.create({
    world: world
});