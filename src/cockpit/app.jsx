import React, {Component} from 'react';

//redux
import {connect} from 'react-redux';
import actions from '../store/actions';

//popup Imports
import SignInPopUp from "../components/signIn";
import RegisterPopup from '../components/register'

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

        return (
            <div className="site__wrapper">

                {/*Loader*/}
                {this.props.loaded ? <Loader/> : null}

                {/*navbar*/}
                <Navbar/>

                {/*Landing Page*/}
                <Landing/>

                {/*signIn popup*/}
                <SignInPopUp
                    open={this.props.signOpen}
                    closeHandler={this.props.handleSignClose}
                />

                {/*registration Popup*/}
                <RegisterPopup
                    open={this.props.registerOpen}
                    closeHandler={this.props.handleRegisterClose}
                />

            </div>
        )
    }

}

const mapStateToProps = state => {

    return {
        loaded: state.preLoader.loaderShow,
        signOpen: state.popup.logInState,
        registerOpen: state.popup.registerState
    }

};

const mapDispatchToProps = dispatch => {

    return {

        hideLoader: () => {

            dispatch(actions.hideLoader);

        },

        handleSignClose: () => {
            dispatch(actions.signInClose);
        },

        handleRegisterClose: () => {

            dispatch(actions.registerClose);

        }

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);