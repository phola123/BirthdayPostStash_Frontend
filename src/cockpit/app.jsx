import React, {Component} from 'react';

//redux
import {connect} from 'react-redux';

//css imports
import '../style.css';
//Container Imports
import Landing from '../containers/landing__page';
import Navbar from '../components/navbar';
import Loader from '../components/loader';

class App extends Component {
    constructor(props) {

        super(props);

        this.state = {
            placeholder: null
        }

    }

    navSpacerSetter = () => {
        let navHeight = document.querySelector('nav').clientHeight;
        document.querySelector('.nav__spacer').style.height = navHeight + "px";
    }

    componentDidMount() {
        setTimeout(() => {
            this.navSpacerSetter();
        }, 200);
    }

    componentWillMount() {
        this.props.hideLoader();
    }


    render() {
        console.log(this.props);
        return (
            <div className="site__wrapper">
                {this.props.loaded ? <Loader/> : null}
                <Navbar/>
                <Landing/>

            </div>
        )
    }

}

const mapStateToProps = state => {

    return {
        loaded: state.loader
    }

};

const mapDisptachToProps = dispatch => {

    return {

        hideLoader: () => {

            dispatch({
                type: 'HIDE__LOADER'
            })

        }

    }

}

export default connect( mapStateToProps , mapDisptachToProps )(App);