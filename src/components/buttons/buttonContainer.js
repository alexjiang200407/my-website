import React from "react";
import "./buttons.scss"

export default function ButtonContainer(props)
{
    // Button container with align interface
    return (
        <div className = {`button-container align-${props.align}`}>
            { props.children }
        </div>
    );
};



