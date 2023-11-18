import React from 'react';
import Navigation from "./Navigation";

const Header = () => {
    return (
        <header>
            <Navigation />
            <h1 className="text-center py-1">Luke Skywalker</h1>
        </header>
    );
};

export default Header;