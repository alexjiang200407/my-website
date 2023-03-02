import React, { createRef } from "react";
import "./webpage.scss";

export default class WebPage extends React.Component
{
    _imageRefs;
    constructor(props, images = 0)
    {
        super(props);
        this.state = {
            finishedLoading: false
        };

        this._imageRefs = Array(images).fill().map(createRef);
    };

    // After DOM has loaded runs the the PostLoad function
    componentDidMount()
    {
        try     
        {
            this.#LoadAllFonts()
            .then(this.Load.bind(this))
            .then(this._LoadingComplete())
        }
        catch(e)
        {
            console.error(e);
        }
        // this.Load();
    };

    // Loads all images
    async _LoadAllImages(start = 0)
    {
        const index = await new Promise((resolve, reject) => {
            this._imageRefs[start].current.addEventListener("load", function handler(e) { 
                e.target.removeEventListener("load", handler);;
                resolve(start + 1); 

            });
        });
        if (index < this._imageRefs.length) {
            this._LoadAllImages(index);
        };
    }

    // After this function ends, removes loading screen
    // must return a promise 
    Load()
    {
        console.log("Webpage Load")
    };

    // Sets the state
    _LoadingComplete()
    {
        setTimeout(
            () => this.setState({ finishedLoading: true }),
            200
        )
        
    }

    #LoadAllFonts()
    {
        return document.fonts.ready;
    }

    #loadingScreen()
    {

        return (
            <main id="loading-screen">
                <div id="loader"></div>
            </main>
        );
    };

    page()
    {};

    // Renders a loading screen 
    render()
    {
        return (
            <main 
                className="webpage"
            >
                { this.state.finishedLoading? undefined : this.#loadingScreen() }
                <div style={{display: this.state.finishedLoading? "" : "none"}}>
                    { this.page() }   
                </div>
            </main>
        )
    };
};

export class PageLoadException extends Error
{
    constructor(message)
    {
        super(message)
        this.name = "Page Loading Exception"
    }
}