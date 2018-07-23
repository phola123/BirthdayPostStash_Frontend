import React, {Component} from 'react';
//css imports
import '../style.css';
//Container Imports
import Landing from '../containers/landing__page';
import Navbar from '../components/navbar';

class App extends Component {


    navSpacerSetter = () => {
        let navHeight = document.querySelector('nav').clientHeight;
        document.querySelector('.nav__spacer').style.height = navHeight + "px";
    }

    componentDidMount() {
        setTimeout(() => {
            this.navSpacerSetter();
        }, 200);
    }


    render() {
        return (
            <div className="site__wrapper">

                <Navbar/>
                <Landing/>

            </div>
        )
    }

}

export default App;