import React from "react"
import MyFab from "../buttons/fab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClipboard } from "@fortawesome/free-regular-svg-icons"
import { faTwitter, faWikipediaW } from "@fortawesome/fontawesome-free-brands"
import "./quote.scss";
import lineDivider from "../../images/line_divider.svg"
import ButtonContainer from "../buttons/buttonContainer";
import WebPage from "../base_page/webpage";


export default class Quote extends WebPage
{

    constructor(props)
    {
        super(props, 2);
    }

    #GetQuote()
    {

    }

    #OpenWiki()
    {

    }

    #Tweet()
    {

    }


    Load()
    {
        this._imageRefs[0].current.src = lineDivider;
        this._imageRefs[1].current.src = lineDivider;
        super._LoadAllImages();
    }


    page()
    {
        return (
                <div id="quote">
                    <div className="title-card center-horizontal">
                        <img className="line-divider" alt="" ref={ this._imageRefs[0] } />
                        <blockquote>
                            <q><p>A man’s true wealth is the good he does in the world.</p></q>       
                        </blockquote>
                        <div id="author"><h2>Kahlil Gibran</h2></div>
                        <ButtonContainer
                            align="center"
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
                        <p id="copyright">MMXXIII © Metro-Goldwin Mayer</p>
                        <img className="line-divider flipped-y" alt="" ref={ this._imageRefs[1] }/>
                    </div>

                </div>
        );
    };
};
