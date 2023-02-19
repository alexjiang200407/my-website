import React from "react"
import MyFab from "../buttons/fab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAddressBook } from "@fortawesome/free-regular-svg-icons"
import MyButton from "../buttons/filledbutton";
import WebPage from "../base_page/webpage";


export default class Quote extends WebPage
{
    constructor(props)
    {
        super(props);
    };

    componentDidMount()
    {
    };

    page()
    {
        return (
            <div id="quote">
                <MyFab 
                    tooltip = "Cunt"
                    tooltipPos = "right"
                    onClick = {(e) => {console.log(e.currentTarget);}}
                    ariaLabel = "hello"
                >
                    <FontAwesomeIcon icon = { faAddressBook } />
                </MyFab>
                <MyButton
                    tooltipPos="left"
                >
                    Fuck Me
                </MyButton>
            </div>
        );
    };
};
