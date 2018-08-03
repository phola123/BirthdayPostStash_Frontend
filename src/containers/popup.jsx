import React, {Component} from 'react';

// material ui

import Dialog from '@material-ui/core/Dialog';
import Zoom from '@material-ui/core/Zoom';
import Paper from '@material-ui/core/Paper';


class Popup extends Component {

    render() {

        console.log('props from Popup', this.props);

        return (

            // common wrapper for Popups

            <Dialog
                open={this.props.open}
                onClose={this.props.closeHandler}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className="popup__class"
            >
                <Zoom in={this.props.open}>
                    <Paper elevation={4}>
                        {this.props.children}
                    </Paper>
                </Zoom>
            </Dialog>

        )

    }
};

export default Popup;