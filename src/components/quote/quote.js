import React from "react"
import MyFab from "../buttons/fab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAddressBook } from "@fortawesome/free-regular-svg-icons"
import MyButton from "../buttons/filledbutton";


export default class Quote extends React.Component
{
    render()
    {
        return (
            <div id="quote">
                <MyFab 
                    tooltip="Cunt"
                    tooltipPos="right"
                    size="small"
                    onClick={(e) => {console.log(e.currentTarget);}}
                    ariaLabel="hello"
                >
                    <FontAwesomeIcon icon = { faAddressBook } />
                </MyFab>
                <MyButton
                    tooltip="Fuck"
                    tooltipPos="left"
                >
                    Fuck Me
                </MyButton>
            </div>
        );
    };
};
