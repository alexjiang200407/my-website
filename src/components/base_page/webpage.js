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
            <main id="loading-screen">
                <div id="loader"></div>
            </main>
        );
    };

    page()
    {
    };

    render()
    {
        if (this.state.finishedLoading)
        {
            return (
                <main className="webpage">
                    { this.page() }   
                </main>
            );
        }
        else
        {
            return this.loadingScreen();
        };
    };
};