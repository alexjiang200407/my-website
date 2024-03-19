import React from "react";
import WebPage from "../base_page/webpage";
import lineDivider from "../../images/line_divider.svg"
import "./home.scss"

export default class Home extends WebPage
{
    constructor(props)
    {
        super(props, 2);
    };
    
    // Loads all images
    Load()
    {
        this._imageRefs[0].current.src = lineDivider;
        this._imageRefs[1].current.src = lineDivider;
        super._LoadAllImages();
    }

    page()
    {
        return (
            <div id="about">
                <div className="title-card center-horizontal">
                    <img className="line-divider" alt="" ref={ this._imageRefs[0] } />
                    <h3>Alex Jiang</h3>
                    <h2>Presents</h2>
                    <h1><q>Resume</q></h1>
                    <p id="about-description">The tale of a young software developer from Sydney, Australia.</p>
                    <p id="copyright">MMXXIII © Metro-Goldwin Mayer</p>
                    <img className="line-divider flipped-y" alt="" ref={ this._imageRefs[1] }/>
                </div>
            </div>
        );
    };
};

