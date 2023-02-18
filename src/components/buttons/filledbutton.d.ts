import * as React from "react";



/**
 * Wrapper class for a mui button
 */
export default class FilledButton extends React.Component<ButtonProps>
{
    render() : React.ReactNode;
}

// Properties for buttons
export interface ButtonProps
{
    tooltip?: string
    size?: "small" | "medium" | "large"
    tooltipPos?: "top" | "left" | "bottom" | "right"
    ariaLabel?: string
    onClick?: Function
}