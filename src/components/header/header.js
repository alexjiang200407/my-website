import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
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
                    <IconButton
                            id="menu"
                            size="medium"
                            color="text"
                            edge="start"
                            aria-label="open-drawer"
                            sx={{ mr: 2 }}
                        >
                        <MenuIcon />
                    </IconButton>
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