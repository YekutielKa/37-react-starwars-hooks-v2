import React from 'react';
import {navNames} from "../utils/constants";
import NavItem from "./NavItem";

const Navigation = () => {
    return (
        <nav className="fixed-top mt-2 ms-4">
            <ul className="nav">
                {navNames.map((item) => <NavItem key={item.route} item={item}/>)}
            </ul>
        </nav>
    );
};

export default Navigation;