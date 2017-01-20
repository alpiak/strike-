/**
 * Created by qhyang on 2017/1/17.
 */
import Matter from "matter-js";

export default class {
    constructor (options) {
        this.playerQueue = options.playerQueue;
        this.pieceSet = [];
        this.setup = options.setup;
        this.setup.game = this;
        this.contest = options.contest;
        this.contest.game = this;
        this.board = options.board;
        this.engine = options.engine;
        if (options.render.engine === "Matter.js") {
            this.render = Matter.Render.create({
                element: document.body,
                engine: this.engine,
                options: {
                    height: options.render.options.height,
                    width: options.render.options.width
                }
            });
        }
        this.mouseConstraint = Matter.MouseConstraint.create(this.engine, {
            mouse: Matter.Mouse.create(this.render.canvas)
        });
    }

    start() {

        // module aliases
        const Engine = Matter.Engine,
            Render = Matter.Render,
            World = Matter.World;

        // add all of the bodies to the world
        World.add(this.engine.world, [this.mouseConstraint, this.board]);

        // run the engine
        Engine.run(this.engine);

        // run the renderer
        Render.run(this.render);

        this.startSetup();
    }
    startSetup() {
        this.setup.start(this);
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
 * @property playerQueue
 * @type playerQueue
 * @required
 */

/**
 *
 *
 * @property pieceSet
 * @type pieceSet
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