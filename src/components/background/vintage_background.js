import React, { createRef } from "react"
import "./vintage_background.scss";
import dust from "../../images/dust_2.png";
import lines from "../../images/lines.webp"
import Bencher from "../../scripts/bencher/bencher";

export default class VintageBackground extends React.Component
{
    // Static Shit
    static scratchesAmount = 6;
    static rows = 32;
    static columns = 18;

    // Private Variables
    #canvasRef;
    #ctx;
    #canvas;
    #rowWidth = 0;
    #columnHeight = 0;
    #dustOverlay;
    #dustPattern;
    #lineOverlay;
    #linePattern;
    #bencher = new Bencher(100, "DrawScratches()");
    

    // Public Interface
    screenWidth = 0;
    screenHeight = 0;
    enabled = true;
    frameTime = 100;


    constructor(props)
    {
        super(props)
        this.#canvasRef = createRef(null);
        this.#dustOverlay = createRef(null);
        this.#lineOverlay = createRef(null);
    }

    // Clears the fucking background
    Clear()
    {
        this.#ctx.clearRect(0, 0, this.screenWidth, this.screenHeight);
    }

    // Private Interface

    // Outputs a random integer between 0 and the max parameter  
    #RandomNum(min = 0, max = 0)
    {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    // Draws a single scratch to the screen requires colum or row
    #DrawScratch(row = 0, col = 0)
    {

        this.#ctx.beginPath();
        this.#ctx.ellipse(row * this.#rowWidth, col * this.#columnHeight, this.#rowWidth / 2, this.#columnHeight / 2, 0, 0, 2 * Math.PI);
        this.#ctx.fill();

        // this.#ctx.fillRect(row * this.#rowWidth, col * this.#columnHeight, this.#rowWidth, this.#columnHeight); 
    }

    // Draws a set amount of scratches to the screen every frame
    #DrawScratches()
    {
        // Initialises array that holds remaining rows
        let index = 0;
        let remainingRows = Array(VintageBackground.rows).fill().map(() => index++)
        

        this.#ctx.fillStyle = this.#dustPattern;
        // Initialises array that holds the columns of each row
        let tiles = Array(VintageBackground.rows).fill().map(
            () => {
                let index = 0;
                return Array(VintageBackground.columns).fill().map(
                    () => {
                        return index++;
                    }
                );
            }
        );


        
        // Generates a random column and row 
        for (let i = 0; i < 8; i++)
        {
            let randomRow = this.#RandomNum(0, tiles.length - 1);
            let randomCol = this.#RandomNum(0, tiles[randomRow].length - 1);

            this.#DrawScratch(remainingRows[randomRow], tiles[randomRow][randomCol]);

            tiles[randomRow].splice(randomCol, 1);
            if (tiles[randomRow][0] === undefined)
            {
                tiles.splice(randomRow, 1);
                remainingRows.splice(randomRow, 1);
            };
        };


    }

    #DrawLines()
    {
        let xPos = this.#RandomNum(0, this.screenWidth);
        this.#ctx.fillStyle = this.#linePattern;
        if ((xPos % 4) == 1)
        {
            console.log("Draw");
            this.#ctx.fillRect(xPos, 0, this.#rowWidth, this.#columnHeight);
        };
    }

    // Does this shit every frame
    #DoFrame()
    {
        this.#bencher.Start();
        this.Clear();
        this.#DrawScratches();
        // this.#DrawLines();
        this.#bencher.End();
    };


    #LoadImages()
    {
        // Load image 1
        return new Promise((resolve, reject) => {
            this.#dustOverlay.current.addEventListener("load", () => {
                this.#dustPattern = this.#ctx.createPattern(this.#dustOverlay.current, "repeat");
                resolve();
            })
        })
        // Load image 2
        .then(
            new Promise((resolve, reject) => {
                this.#lineOverlay.current.addEventListener("load", () => {
                    this.#dustPattern = this.#ctx.createPattern(this.#lineOverlay.current, "repeat");
                    resolve();
                })
            })  
        );

    }

    componentDidMount()
    {
        this.#canvas = this.#canvasRef.current;
        this.#ctx = this.#canvas.getContext('2d');


        this.screenWidth = this.#canvas.clientWidth;
        this.screenHeight = this.#canvas.clientHeight;

        this.#rowWidth = Math.floor(this.screenWidth / VintageBackground.rows);
        this.#columnHeight = Math.floor(this.screenHeight / VintageBackground.columns);

        // Load images then start painting the screen
        this.#LoadImages()
        .then(
            () => {
                setInterval(
                    this.#DoFrame.bind(this),
                    this.frameTime
                );
            }
        );
    };



    render()
    {
        return (
            <div>
                <canvas 
                    id = "vintage-background"
                    ref = { this.#canvasRef }
                    width = { window.screen.width }
                    height = { window.screen.height }
                    { ...this.props }
                />
                <div className="vignette"></div>
                <div className="grain"></div>
                <div className="outer-scratch"></div>
                <div className="inner-scratch"></div>
                <div style={{ display: "none" }}>
                    <img src = { lines } ref={ this.#lineOverlay }></img>
                    <img src = { dust } ref={ this.#dustOverlay }></img>
                </div>
            </div>

        );
    };
};

