/**
 * Created by qhyang on 2017/1/17.
 */
import Matter from "matter-js";

export default class {
    constructor (options) {
        this.setup = options.setup;
        this.contest = options.contest;
        this.board = options.board;
        this.mouse = options.mouse;
        this.engine = options.engine;
        this.render = options.render;
    }

    start() {

        // module aliases
        const Engine = Matter.Engine,
            Render = Matter.Render,
            World = Matter.World;

        // add all of the bodies to the world
        World.add(this.engine.world, [this.board]);

        // run the engine
        Engine.run(this.engine);

        // run the renderer
        Render.run(this.render);

        this.startSetup();
    }
    startSetup() {
        this.setup.start();
    }

}

/*
 *
 * Properties Documentation
 *
 */

/**
 *
 *
 * @property setup
 * @type setup
 * @required
 */

/**
 *
 *
 * @property contest
 * @type contest
 * @required
 */

/**
 *
 *
 * @property playerQueue
 * @type playerQueue
 * @required
 */

/**
 *
 *
 * @property board
 * @type board
 * @required
 */

/**
 *
 *
 * @property world
 * @type world
 * @required
 */

/**
 *
 *
 * @property mouse
 * @type mouse
 * @required
 */

/**
 *
 *
 * @property engine
 * @type engine
 * @required
 */

/**
 *
 *
 * @property render
 * @type render
 * @required
 */