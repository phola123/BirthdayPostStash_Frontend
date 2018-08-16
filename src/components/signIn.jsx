import React, {Component} from 'react';

//Component Imports
import Popup from '../containers/popup';

//material Ui
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

//redux
import {connect} from 'react-redux';

// images import

import signInImage from '../assets/images/sign-in-1.png';

//axios import

import axios from 'axios';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#a6cb47'
        }
    },
});

class SignInPopUp extends Component {

    constructor(props) {

        super(props);

        this.state = {

            isSubmitted: false,
            isEmailValidated: false,
            isPassValidated: false,
            errorData: null,
            authToken: null

        };

        this.formData = {
            email: '',
            password: ''
        }

        this.emailValid = null;
        this.passValid = null;

    }

    //email validator
    emailValidator = value => {
        console.log(value);

        // if (/^(?:[A-Z\d][A-Z\d_-]{5,10}|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4})$/i.test(value)) {
        if (value) {
            this.setState({isEmailValidated: true});
            this.emailValid = null;
        }

        else {

            this.setState({isEmailValidated: false});

            if (value.length === 0) {
                this.emailValid = 'Please enter your username.';
            }

        }


    }

    //password validator
    passwordValidator = value => {

        if (value.length >= 6) {
            this.setState({isPassValidated: true});
            this.passValid = null;
        }
        else {

            this.setState({isPassValidated: false});

            if (value.length > 0 && value.length < 6) {

                this.passValid = 'Please enter more than 6 character';
            }
            else {
                this.passValid = 'Please Enter Password';
            }
        }

    }

    //form submission
    submitForm = () => {
        this.emailValidator(this.formData.email);
        this.passwordValidator(this.formData.password);
        if (this.state.isEmailValidated && this.state.isPassValidated) {
            this.props.showLoader();
            axios({
                method: 'post',
                url: 'https://demo-bpstash.herokuapp.com/users/login/',
                data: {
                    password: this.formData.password,
                    username: this.formData.email
                }
            }).then(response => {

                console.log(response.data.auth_token);
                this.setState({isSubmitted: true});
                this.props.onSubmitSuccess(response.data.auth_token)
                this.setState({authToken: this.props.token});
                this.props.hideLoader();

            }).catch(error => {

                this.setState({
                    errorData: error.response.data,
                    isSubmitted: false
                });

                console.log(this.state.errorData);
                this.props.hideLoader();
            });

        }

    }

    // close popup
    closePopUp = () => {

        let el = document.querySelector('.popup__class > div:first-of-type');
        el.click();
    }


    render() {

        return (
            <Popup open={this.props.open}
                   closeHandler={this.props.closeHandler}>
                <div className="access__wrapper">

                    <div className="access__lhs">
                        <img src={signInImage} alt="signInImage"/>
                    </div>

                    <div className="access__rhs">

                        <div className="access__header">
                            Sign In
                        </div>

                        <div className="access__form">

                            {/*Email*/}
                            <div className="access__textFields">
                                <MuiThemeProvider theme={theme}>
                                    <TextField
                                        onBlur={(e) => this.emailValidator(e.target.value)}
                                        onChange={e => this.formData.email = e.target.value}
                                        id="email-input"
                                        label="Email Or Username"
                                        type="email"
                                        fullWidth
                                        className="access__input"
                                    />
                                    {/*validations*/}
                                    <div className="has-error">{this.emailValid}</div>

                                </MuiThemeProvider>
                            </div>

                            {/*Password*/}
                            <div className="access__textFields">
                                <MuiThemeProvider theme={theme}>
                                    <TextField
                                        id="password-input"
                                        onBlur={(e) => this.passwordValidator(e.target.value)}
                                        onChange={e => this.formData.password = e.target.value}
                                        label="Password"
                                        type="password"
                                        fullWidth
                                        className="access__input"
                                    />
                                    <div className="has-error">{this.passValid}</div>

                                </MuiThemeProvider>
                            </div>
                            <div className="has-error">{
                                this.state.errorData && this.state.errorData.non_field_errors[0]
                            }</div>
                        </div>
                        <MuiThemeProvider theme={theme}>
                            <Button onClick={this.submitForm} variant="contained" color="primary"
                                    className="access__cta">
                                Sign In
                            </Button>
                        </MuiThemeProvider>
                    </div>
                </div>
            </Popup>

        );
    }


}

const mapStateToProps = state => {

    return {

        token: state.authToken

    }

};

const mapDisptachToProps = dispatch => {

    return {

        onSubmitSuccess: authToken => {

            dispatch({
                type: 'LOGGED__IN',
                payload: {
                    token: authToken
                }
            });

        },

        showLoader: () => {

            dispatch({
                type: 'SHOW__LOADER'
            })

        },

        hideLoader: () => {

            dispatch({
                type: 'HIDE__LOADER'
            })

        }

    };

};


export default connect(mapStateToProps, mapDisptachToProps)(SignInPopUp);