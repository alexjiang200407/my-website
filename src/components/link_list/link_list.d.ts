import * as React from "react";

export interface LinkProps
{
    to: string,
    title: string
    openToNew?: boolean
}

export interface LinkListProps
{
    links: Array<LinkProps>
}

export default class LinkList extends React.Component<LinkListProps>
{
    #CreateLinks() : React.ReactNode;
    
    render() : React.ReactNode;
}