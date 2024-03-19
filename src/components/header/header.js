import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import "./header.scss"
import LinkList from "../link_list/link_list";

export default class Header extends React.Component
{
    render()
    {
        return (
            <AppBar
                position="static"
                color="whitespace"
                sx={{
                    zIndex: 1,
                    boxShadow: "0",
                    padding: "0.3rem"
                }}
            >          
                <Toolbar>            
                    <LinkList 
                        links = {[
                            {
                                title: "Home",
                                to: "/"
                            },
                            {
                                title: "Resume",
                                to: "/resume"
                            },
                            {
                                title: "Daily Quote",
                                to: "/quote"
                            }
                        ]}
                    />
                </Toolbar>
            </AppBar>


        );
    };
};