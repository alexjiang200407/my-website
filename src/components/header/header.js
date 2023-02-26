import React from "react";
import { AppBar, Toolbar, Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import "./header.scss"
import LinkList from "../link_list/link_list";
import { NavLink } from "react-router-dom";

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
                    <Tooltip
                        title="Go Home"
                        enterDelay={750}
                        placement="right"
                        aria-label="logo"
                    >
                        <NavLink
                            to={"/"}  
                            id="logo"  
                        >
                            <span id="signature">
                                    Alex Jiang
                            </span>
                            <span>
                                .com
                            </span>
                        </NavLink>
                    </Tooltip>
                    <LinkList 
                        links = {[
                            {
                                title: "Resume",
                                to: "/resume"
                            }
                        ]}
                    />
                </Toolbar>
            </AppBar>


        );
    };
};