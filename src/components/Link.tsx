import React from 'react';

interface ILinkProps {
    active: boolean;
    children: Array<HTMLElement>|string;
    onClick: ()=>void;
};

const Link = ({active, children, onClick}:ILinkProps) => (
    <button onClick={onClick} disabled={active} style={{marginLeft: '4px'}}>
        {children}
    </button>
);

export default Link;