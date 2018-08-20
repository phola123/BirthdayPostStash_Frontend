import React, {Component} from 'react';

//redux
import { connect } from 'react-redux';
import actions from '../store/actions';

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

const mapDispatchToProps = dispatch => {

    return {

        hideLoader: () => {

            dispatch(actions.hideLoader);

        }

    }

}

export default connect( mapStateToProps , mapDispatchToProps )(App);