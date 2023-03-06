import React from "react";
import { Snackbar } from "@mui/material";

export default class BetterSnackBar extends React.Component
{
    static open = false;
    static message = "";
    static duration = 3000;

    constructor(props) {
        super(props);
        this.state = {
            changed: true
        }
        console.log(BetterSnackBar.open, BetterSnackBar.message, BetterSnackBar.duration)

        this.constructor.showSnackbar("Fuck", 3000).bind(this);
    
    }


    #handleSnackbarClose()
    {
        this.setState({ changed: false });
        BetterSnackBar.open = false;
    }


    static showSnackbar(message = "", duration = 3000)
    {

        BetterSnackBar.open = true;
        BetterSnackBar.message = message;
        BetterSnackBar.duration = duration;
        this.forceUpdate();
    }


    render()
    {
        return (
            <Snackbar 
                open={ BetterSnackBar.open }
                autoHideDuration = { BetterSnackBar.duration }
                message={ BetterSnackBar.message }
                onClose={ this.#handleSnackbarClose.bind(this) }
            />
        );
    }
}