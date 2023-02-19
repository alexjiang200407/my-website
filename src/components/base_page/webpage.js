import React from "react";
import "./webpage.scss";


export default class WebPage extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            finishedLoading: false
        };
    };


    loadingScreen()
    {
        return (
            <div id="loading-screen">
                <h1>Loading
                    <div class="dots"><span class="dot z"></span><span class="dot f"></span><span class="dot s"></span><span class="dot t"><span class="dot l"></span></span></div>
                </h1>
            </div>

        );
    };

    page()
    {
    };

    render()
    {
        if (this.state.finishedLoading)
        {
            console.log("shit")
            return this.page();
        }
        else
        {
            return this.loadingScreen();
        };
    };

};