import React from "react"
import lineDivider from "../../images/line_divider_2.svg"
import WebPage from "../base_page/webpage";

import "./resume.scss"
import ResumeCard from "./resume_card";
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
        let index = 0;
        return (
            <div id="resume">
                <div className="title-card center-horizontal">
                    <ResumeCard 
                        imageRefs = {[this._imageRefs[index++], this._imageRefs[index++]]}
                        title="Education"
                        description="Alex attended Sydney Boys High School from 2017 to 2022 and graduated with an ATAR of 99.60. He is currently enrolled in the University of NSW studying Computer Science."
                    />
                    
                    <ResumeCard 
                        imageRefs = {[this._imageRefs[index++], this._imageRefs[index++]]}
                        title="Career History"
                        description="Alex is currently a fast-food employee. He is a food service team member at KFC Hurstville."
                    />

                    <ResumeCard 
                        imageRefs = {[this._imageRefs[index++], this._imageRefs[index++]]}
                        title="Skills"
                        description="Alex has spent two years working with the front-end web technologies: JavaScript, HTML and CSS, and has experience working with the NodeJS and React Framework.
                        Alex is currently experimenting / learning database technologies such as SQL server as well as low level languages, C and C++ and Hardware accelerated graphics."
                    />

                    <ResumeCard 
                        imageRefs = {[this._imageRefs[index++], this._imageRefs[index++]]}
                        title="Interests"
                        description="Besides programming, Alex spends most of his spare time playing and modding Bethesda video games. He also enjoys watching old films and boxing tapes."
                    />
                </div>
                <p id="copyright">MMXXIII © Metro-Goldwin Mayer</p>

            </div>
        );
    };

}