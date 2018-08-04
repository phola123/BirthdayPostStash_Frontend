import React, {Component} from 'react';

//Component Imports
import Popup from '../containers/popup';

//material Ui
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
            isPassValidated: false

        };

        this.formData = {
            email: '',
            password: ''
        }

        this.emailValid = null;
        this.passValid = null;

    }


    emailValidator = value => {
        console.log(value);

        if (/^(?:[A-Z\d][A-Z\d_-]{5,10}|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4})$/i.test(value)) {
            this.setState({isEmailValidated: true});
            this.emailValid = null;
        }

        else {

            this.setState({isEmailValidated: false});

            if (value.length === 0) {
                this.emailValid = 'Please Enter Email';
            }

            else {
                this.emailValid = 'Incorrect Email';
            }

        }


    }

    passwordValidator = value => {

        if (value.length >= 8) {
            this.setState({isPassValidated: true});
            this.passValid = null;
        }
        else {

            this.setState({isPassValidated: false});

            if (value.length > 0 && value.length < 8) {

                this.passValid = 'Please enter more than 8 character';
            }
            else {
                this.passValid = 'Please Enter Password';
            }
        }

    }

    submitForm = () => {
        const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        this.emailValidator(this.formData.email);
        this.passwordValidator(this.formData.password);
        console.log(token);
        if (this.state.isEmailValidated && this.state.isPassValidated) {

            axios({
                method: 'post',
                mode: 'CORS',
                headers: {
                    'Access-Control-Allow-Origin' : '*' ,
                    'Access-Control-Allow-Headers': 'Content-Type',
                    'Access-Control-Allow-Credentials': '*'
                },
                url: 'https://demo-bpstash.herokuapp.com/users/login/',
                data: {
                    password: this.formData.password,
                    username: this.formData.email
                }
            }).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });

        }
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
                            <MuiThemeProvider theme={theme}>
                                <TextField
                                    onBlur={(e) => this.emailValidator(e.target.value)}
                                    onChange={e => this.formData.email = e.target.value}
                                    id="email-input"
                                    label="Email"
                                    type="email"
                                    fullWidth
                                    className="access__input"
                                />
                                <div className="has-error">{this.emailValid}</div>

                            </MuiThemeProvider>


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


export default SignInPopUp;