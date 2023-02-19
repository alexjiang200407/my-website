import React from "react"
import { Fab } from "@mui/material"
import { Tooltip } from "@mui/material"
import MyButton from "./filledbutton";



export default class MyFab extends MyButton
{
    // Overrides render function
    render()
    {
        return (
            <Tooltip
                title = { this.props.tooltip }
                placement = { this.props.tooltipPos }
            >
                <Fab
                    role = "button"
                    color = { this.props.color } 
                    size = { this.props.size }
                    aria-label = { this.props.ariaLabel }
                    onClick = { this.props.onClick.bind(this) }
                >
                    { this.props.children }
                </Fab>
            </Tooltip>
        );
    };

};

// Inherits default props from MyButton