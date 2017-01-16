/**
 * Created by qhyang on 2017/1/13.
 */
import Matter from "matter-js";
import engine from "./scripts/physics/engine";
import render from "./scripts/render/render";
import board from "./scripts/physics/board";

// module aliases
const Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World;

// add all of the bodies to the world
World.add(engine.world, [board]);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);