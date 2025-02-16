import React from "react";
import { NavLink } from "react-router-dom";
import "./link_list.scss"

export default class LinkList extends React.Component
{

    #CreateLinks()
    {
		let returnNodes = [];
        let key = 0;
        for (const link of this.props.links)
		{
            returnNodes.push(
                <li
                    key = { key }
                >
                    <NavLink
                        to = { link.to }
						target={ link.openToNew ? "_blank" : undefined }
						rel={ link.openToNew ? "noopener noreferrer" : undefined }
                    >
                        { link.title }
                    </NavLink>
                </li>
            );
            key++;
        };

        return returnNodes;
    };
    render() {
        return (
            <nav>
                <ul className="link-list">
                    { this.#CreateLinks() }
                </ul>
            </nav>
        );
    };
};