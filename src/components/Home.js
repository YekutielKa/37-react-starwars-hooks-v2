import React, {Component} from 'react';
import Hero from "./Hero";
import DreamTeam from "./DreamTeam";
import FarGalaxy from "./FarGalaxy";

class Home extends Component{
    componentWillUnmount() {
        console.log('Home unmounted');
    }
    componentDidMount() {
        console.log('Home mounted');
    }
    render() {
        return (
            <main className="clearfix">
                <Hero/>
                <DreamTeam/>
                <FarGalaxy/>
            </main>
        );
    }
}

export default Home;