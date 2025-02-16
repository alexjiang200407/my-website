import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import myTheme from "./theme";
import { ThemeProvider } from "@emotion/react";
import Header from "./components/header/header";
import Home from "./components/home/home";
import VintageBackground from "./components/background/vintage_background";
import About from "./components/about/about";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";

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
                            <Route 
                                element = {<About />}
                                path = "/about"
                            />
                            <Route 
                                element = {<Skills />}
                                path = "/skills"
                            />
							<Route 
                                element = {<Projects />}
                                path = "/projects"
                            />
                        </Routes>
                    </BrowserRouter>
                </ThemeProvider> 

            </div>
        );
    };
};
