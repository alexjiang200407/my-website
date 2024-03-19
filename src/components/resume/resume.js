import React from "react"
import lineDivider from "../../images/line_divider_2.svg"
import WebPage from "../base_page/webpage";

import "./resume.scss"
export default class Resume extends WebPage
{
    constructor(props)
    {
        super(props, 8);
    }
    Load()
    {
        for (let i = 0; i < 8; i++)
        {
            this._imageRefs[i].current.src = lineDivider;
        };
        super._LoadAllImages();
    }
    page()
    {
        return (
            <div id="resume">
                <div className="title-card center-horizontal">
                    <p>
                        Hi, I am Alex, a software developer from Sydney, Australia. I am a second year student enrolled in UNSW studying Computer Science. I have informal experience with full-stack web development as well as experience with object-oriented languages such as C++. I am interested in computer graphics.
                        I have a genuine passion for film, and I follow boxing and basketball.
                    </p>
                </div>
                <p id="copyright">MMXXIII © Metro-Goldwin Mayer</p>

            </div>
        );
    };

}