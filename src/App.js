import './App.css';
import React, {useState} from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {navNames} from "./utils/constants";

const App = () => {

    return (
        <div className="container-fluid">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
