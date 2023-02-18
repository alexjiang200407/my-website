import React from "react"
import { Tooltip } from "@mui/material"
import { Button } from "@mui/material"



export default class MyButton extends React.Component
{
    render()
    {
        return (
            <Tooltip
                title = { this.props.tooltip }
                placement = { this.props.tooltipPos }
            >
                <Button
                    color="primary"
                    size = { this.props.size }
                    variant="contained"
                    aria-label = { this.props.ariaLabel }
                    onClick = { this.props.onClick.bind(this) }
                >
                    { this.props.children }
                </Button>
            </Tooltip>
    
        );
    };
};

// Default Values
MyButton.defaultProps = {
    tooltip: "Tooltip",
    tooltipPos: "bottom",
    ariaLabel: "button",
    size: "small",
    onClick: () => {}
};