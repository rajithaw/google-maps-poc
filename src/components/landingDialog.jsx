import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react'
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';

@inject('rootStore')
@observer
class LandingDialog extends React.Component {
    render() {
        const { open } = this.props;

        return (
            <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                maxWidth="xs"
                onEntering={this.handleEntering}
                aria-labelledby="confirmation-dialog-title"
                open={open}
            >
                <DialogTitle id="confirmation-dialog-title">Victorian State Election</DialogTitle>
                <DialogContent>
                    Landing Dialog
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleCancel} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.handleOk} color="primary">
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }

    handleEntering = () => {
    };

    handleCancel = () => {
        this.props.rootStore.setLandingDialogOpen(false);
    };

    handleOk = () => {
        this.props.rootStore.setLandingDialogOpen(false);
    };

    handleChange = (event, value) => {
    };
}

LandingDialog.propTypes = {
    open: PropTypes.bool,
};

export default LandingDialog;