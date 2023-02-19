import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Quote from "./components/quote/quote";
import myTheme from "./components/theme";
import { ThemeProvider } from "@emotion/react";
import Header from "./components/header/header";

export default class App extends React.Component
{
    render() {
        return (
            <div
                id="app"        
            >
                <ThemeProvider theme={ myTheme }>
                    <BrowserRouter>
                        <Header />
                        <Routes>
                            <Route 
                                element = {<Quote />}
                                path = "/"
                            />
                        </Routes>
                    </BrowserRouter>
                </ThemeProvider> 

            </div>
        );
    };
};
