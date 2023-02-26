import React from "react"
import MyFab from "../buttons/fab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClipboard } from "@fortawesome/free-regular-svg-icons"
import { faTwitter, faWikipediaW } from "@fortawesome/fontawesome-free-brands"
import "./quote.scss";
import lineDivider from "../../images/line_divider.svg"
import ButtonContainer from "../buttons/buttonContainer";


export default class Quote extends React.Component
{


    render()
    {
        return (
                <div id="quote">

                    <div id="quote-content" className="center-horizontal">
                        <h3>Quote</h3>
                        <img className="divider" alt="line divider" src = { lineDivider }></img>
                        <blockquote>
                            A man’s true wealth is the good he does in the world.       
                        </blockquote>
                        <div id="author">Kahlil Gibran</div>
                    </div>
                    <ButtonContainer
                            align="right"
                        >
                            <MyFab
                                tooltip="Open Wiki Page"
                            >
                                <FontAwesomeIcon icon={faWikipediaW} />
                            </MyFab>
                            <MyFab
                                tooltip="Tweet it"
                            >
                                <FontAwesomeIcon icon={faTwitter} />
                            </MyFab>
                            <MyFab
                                tooltip="Copy to Clipboard"
                            >
                                <FontAwesomeIcon icon={faClipboard} />
                            </MyFab>
                        </ButtonContainer>
                </div>
        );
    };
};
