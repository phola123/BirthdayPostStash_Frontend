import React, {Component} from 'react';

// material ui

import Dialog from '@material-ui/core/Dialog';

// images import

import signInImage from '../assets/images/sign-in-1.png';

class SignInPopUp extends Component {

    render() {

        return (

            // common wrapper for sign in and register
            <Dialog
                open={this.props.open}
                onClose={this.props.closeHandler}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                    <div className="access__wrapper">

                        <div className="access__lhs">
                            <img src={signInImage} alt="signInImage"/>
                        </div>

                        <div className="access__rhs">


                        </div>
                    </div>
            </Dialog>

        )

    }
};

export default SignInPopUp;