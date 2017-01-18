/**
 * Created by qhyang on 2017/1/18.
 */
import Matter from "matter-js";
import render from "../render/render";
import engine from "./engine";

let mouse = Matter.Mouse.create(render.canvas);
export default Matter.MouseConstraint.create(engine, {
    mouse: mouse
});