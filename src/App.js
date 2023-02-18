import React from "react";
import Quote from "./components/quote/quote";
import myTheme from "./components/theme";
import { ThemeProvider } from "@emotion/react";

export default function App()
{
    return (

        <div
            id="app"        
        >
            <ThemeProvider theme={ myTheme }>
                <Quote />
            </ThemeProvider>            
        </div>
    )
}