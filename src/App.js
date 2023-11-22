import './App.css';
import React, {useState} from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {defaultHero, navNames, StarWarsContext} from "./utils/constants";

const App = () => {

    const [hero, setHero] = useState(defaultHero)

    return (
        <StarWarsContext.Provider value={{
            hero, changeHero: setHero
        }}>
            <div className="container-fluid">
                <Header/>
                <Main/>
                <Footer/>
            </div>
        </StarWarsContext.Provider>
    );
}

export default App;
