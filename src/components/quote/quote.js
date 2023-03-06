import React from "react"
import MyFab from "../buttons/fab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClipboard } from "@fortawesome/free-regular-svg-icons"
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faWikipediaW } from "@fortawesome/fontawesome-free-brands"
import "./quote.scss";
import lineDivider from "../../images/line_divider.svg"
import ButtonContainer from "../buttons/buttonContainer";
import WebPage from "../base_page/webpage";
import getRandomInt from "../../scripts/rng/rng";
import BetterSnackBar from "../snackbar/snackbar";


export default class Quote extends WebPage
{
    #file;
    constructor(props)
    {
        super(props, 2);
        this.#file = require("./quotes_lists.json");
        this.state = {
            quote: {
                quote_author: undefined,
                the_quote: undefined
            }
        };
    }

    #GetQuote()
    {
        let randomNum = getRandomInt(0, this.#file.length - 1);
        this.setState({ quote: this.#file[randomNum] });
        console.log(this.state)
        
        // console.log(randomNum);
        // return randomNum;
    }

    #OpenWiki()
    {

    }

    #CopyToClipBoard()
    {

        navigator.clipboard.writeText(`${ this.state.quote.the_quote } - ${ this.state.quote.quote_author }`)
        .then(() => {
            // new BetterSnackBar;
        });
        
    }

    #Tweet()
    {
        const url = `https://twitter.com/intent/tweet?text="${this.state.quote.the_quote.replace(/ /g, '%20')}"%0a%0a%23${this.state.quote.quote_author.replace(/ /g, '').replaceAll('.',"")}%20%23quotes`;
        window.open(url, '_blank').focus();
    }


    Load()
    {
        this._imageRefs[0].current.src = lineDivider;
        this._imageRefs[1].current.src = lineDivider;
        super._LoadAllImages()
        .then(this.#GetQuote.bind(this));
    }


    page()
    {
        return (
                <div id="quote">
                    <div className="title-card center-horizontal">
                        <img className="line-divider" alt="" ref={ this._imageRefs[0] } />
                        <blockquote>
                            <q><p>{ this.state.quote.the_quote }</p></q>       
                        </blockquote>
                        <div id="author"><h2>{ this.state.quote.quote_author }</h2></div>
                        <ButtonContainer
                            align="center"
                        >
                            <MyFab
                                tooltip="Open Wiki Page"
                            >
                                <FontAwesomeIcon icon={ faWikipediaW } />
                            </MyFab>
                            <MyFab
                                tooltip="Refresh Quote"
                                onClick={ this.#GetQuote.bind(this) }
                            >
                                <FontAwesomeIcon icon={ faRotateRight } />
                            </MyFab>
                            <MyFab
                                tooltip="Tweet it"
                                onClick={ this.#Tweet.bind(this) }
                            >
                                <FontAwesomeIcon icon={ faTwitter } />
                            </MyFab>
                            <MyFab
                                tooltip="Copy to Clipboard"
                                onClick={ this.#CopyToClipBoard.bind(this) }
                            >
                                <FontAwesomeIcon icon={ faClipboard } />
                            </MyFab>
                        </ButtonContainer>
                        <p id="copyright">MMXXIII © Metro-Goldwin Mayer</p>
                        <img className="line-divider flipped-y" alt="" ref={ this._imageRefs[1] }/>
                    </div>

                </div>
        );
    };
};
