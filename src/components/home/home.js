import React from "react";
import Quote from "../quote/quote";
import WebPage from "../base_page/webpage";
import About from "../about/about";


export default class Home extends WebPage
{

    componentDidMount()
    {
        setTimeout(
            () => {
                this.setState({finishedLoading: true});
            },
            500
        );
    };

    page()
    {
        return (
            <div>

                <About />
                <Quote />
            </div>

        );
    };
};