import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import myTheme from "./components/theme";
import { ThemeProvider } from "@emotion/react";
import Header from "./components/header/header";
import Home from "./components/home/home";
import VintageBackground from "./components/background/vintage_background";

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

                        <VintageBackground />

                        <Routes>
                            <Route 
                                element = {<Home />}
                                path = "/"
                            />
                        </Routes>
                    </BrowserRouter>
                </ThemeProvider> 

            </div>
        );
    };
};
