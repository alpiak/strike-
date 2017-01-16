/**
 * Created by qhyang on 2017/1/16.
 */
import Matter from "matter-js";

const Bodies = Matter.Bodies;

export default Bodies.rectangle(400, 400, 600, 600, {
    isSensor: true,
    isStatic: true
});