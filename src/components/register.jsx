import React, {Component} from 'react';

//Component Imports
import Popup from '../containers/popup';

//material Ui
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// images import
import signInImage from '../assets/images/sign-up.png';

//axios import
import axios from 'axios';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#a6cb47'
        }
    },
});

class RegisterPopup extends Component {

    constructor(props) {

        super(props);

        this.state = {

            isSubmitted: false,
            isEmailValidated: false,
            isPassValidated: false,
            isFirstValidated: false,
            isUserValidated: false,
            isRepearValidated: false,
            errorData: null

        };

        this.formData = {
            last_name: '',
            first_name: '',
            username: '',
            email: '',
            password: ''
        }

        this.emailValid = null;
        this.passValid = null;
        this.firstValid = null;
        this.userValid = null;
        this.repeatValid = null;

    }

    //email Validator
    emailValidator = value => {
        console.log(value);
        this.state.errorData && this.setState({errorData: null});

        if (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)) {
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

    //password validator
    passwordValidator = value => {
        this.state.errorData && this.setState({errorData: null});
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

    //FirstName validator

    firstNameValidator = value => {

        if (value.length !== 0) {
            this.setState({isFirstValidated: true});
            this.firstValid = null;
        }
        else {
            this.setState({isFirstValidated: false});
            this.firstValid = 'Please enter your name.';
        }

    }

    //usertName validator

    userNameValidator = value => {
        this.state.errorData && this.setState({errorData: null});
        if (value.length !== 0) {
            this.setState({isUserValidated: true});
            this.userValid = null;
        }
        else {
            this.setState({isUserValidated: false});
            this.userValid = 'Please enter a user name.';
        }

    }

    //Repeat Password validator

    repeatPassvalidator = value => {

        if (value === this.formData.password) {
            this.setState({isRepearValidated: true});
            this.repeatValid = null;
        }
        else {
            this.setState({isRepearValidated: false});
            this.repeatValid = 'Password do not match.';
        }

    }


    submitForm = () => {
        this.emailValidator(this.formData.email);
        this.passwordValidator(this.formData.password);
        this.firstNameValidator(this.formData.first_name);
        this.userNameValidator(this.formData.username);

        if (this.state.isEmailValidated && this.state.isPassValidated && this.state.isFirstValidated && this.state.isUserValidated) {

            axios({
                method: 'post',
                url: 'https://demo-bpstash.herokuapp.com/users/register/',
                data: {
                    last_name: this.formData.last_name,
                    first_name: this.formData.first_name,
                    username: this.formData.username,
                    password: this.formData.password,
                    email: this.formData.email
                }
            }).then(response => {

                console.log(response);
                this.setState({isSubmitted: true})
                this.closePopUp();
            })
                .catch(error => {
                    this.setState({
                        errorData: error.response.data,
                        isSubmitted: false
                    })
                })


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
                            Register
                        </div>

                        <div className="access__form">


                            {/*User Name*/}
                            <div className="access__textFields">
                                <MuiThemeProvider theme={theme}>
                                    <TextField
                                        onBlur={(e) => this.userNameValidator(e.target.value)}
                                        onChange={e => this.formData.username = e.target.value}
                                        id="user-input"
                                        label="User Name"
                                        type="text"
                                        fullWidth
                                        className="access__input"
                                    />
                                    <div className="has-error">
                                        {!this.state.errorData ? this.userValid : (!this.state.errorData.username ? null : this.state.errorData.username[0])}
                                    </div>

                                </MuiThemeProvider>
                            </div>

                            {/*Email*/}
                            <div className="access__textFields">
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
                                    <div className="has-error">
                                        {(!this.state.errorData) ? this.emailValid : (!this.state.errorData.email ? null : this.state.errorData.email[0])}
                                    </div>
                                </MuiThemeProvider>
                            </div>


                            {/*FirstName*/}
                            <div className="access__textFields">
                                <MuiThemeProvider theme={theme}>
                                    <TextField
                                        onBlur={(e) => this.firstNameValidator(e.target.value)}
                                        onChange={e => this.formData.first_name = e.target.value}
                                        id="first-input"
                                        label="First Name"
                                        type="text"
                                        fullWidth
                                        className="access__input"
                                    />
                                    <div className="has-error">{this.firstValid}</div>

                                </MuiThemeProvider>
                            </div>

                            {/*LastName*/}
                            <div className="access__textFields">
                                <MuiThemeProvider theme={theme}>
                                    <TextField
                                        onChange={e => this.formData.last_name = e.target.value}
                                        id="last-input"
                                        label="Last Name"
                                        type="text"
                                        fullWidth
                                        className="access__input"
                                    />

                                </MuiThemeProvider>
                            </div>

                            {/*password*/}
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
                                    <div className="has-error">{
                                        !this.state.errorData ? this.passValid : (!this.state.errorData.password ? null : this.state.errorData.password[0])
                                    }
                                    </div>

                                </MuiThemeProvider>
                            </div>

                            {/* repeat password*/}

                            <div className="access__textFields">
                                <MuiThemeProvider theme={theme}>
                                    <TextField
                                        id="repeatPassword-input"
                                        onChange={(e) => this.repeatPassvalidator(e.target.value)}
                                        label="Repeat Password"
                                        type="password"
                                        fullWidth
                                        className="access__input"
                                    />
                                    <div className="has-error">{this.repeatValid}</div>

                                </MuiThemeProvider>
                            </div>


                        </div>
                        <MuiThemeProvider theme={theme}>
                            <Button onClick={this.submitForm} variant="contained" color="primary"
                                    className="access__cta">
                                Register
                            </Button>
                        </MuiThemeProvider>
                    </div>
                </div>
            </Popup>

        );
    }


}


export default RegisterPopup;