import React from "react"
import lineDivider2 from "../../images/line_divider_2.svg"

export default function ResumeCard(props)
{
    return (
        <div className="resume-card">

            <img className="line-divider variant-2" ref={ props.imageRefs[0] } alt=""></img>
            <h2>{ props.title }</h2>
            <p>
                { props.description }
            </p>
            <img className="line-divider variant-2 flipped-y" ref={ props.imageRefs[1] } alt=""></img>
        </div>
    )
}