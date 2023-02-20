import React from "react"
import MyFab from "../buttons/fab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import WebPage from "../base_page/webpage";
import "./quote.scss";
import lineDivider from "../../images/line_divider.svg"


export default class Quote extends WebPage
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
            <div id="quote" className="center-horizontal">
                <h3>Quote</h3>
                <img className="divider" src={lineDivider}></img>
                <div id="quote-content" className="center-horizontal">
                    <blockquote>
                        A man’s true wealth is the good he does in the world.       
                    </blockquote>
                    <div id="author">Kahlil Gibran</div>
                </div>

            </div>
        );
    };
};
