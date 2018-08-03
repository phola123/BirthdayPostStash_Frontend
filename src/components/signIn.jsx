import React, {Component} from 'react';

//Component Imports
import Popup from '../containers/popup';

//material Ui
import {withStyles, MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// images import

import signInImage from '../assets/images/sign-in-1.png';


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

        this.emailValid = null;
        this.passValid = null;

    }


    emailValidator = value => {
        console.log(value);

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
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

        if (this.state.isEmailValidated && this.state.isPassValidated) {
            alert("submitted");
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