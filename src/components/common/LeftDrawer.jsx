import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

const drawerWidth = 240;

const styles = theme => ({
    drawerPaper: {
        width: drawerWidth
    }
});

function LeftDrawer(props) {
    const { classes, open, closeClickHandler } = props;

    return (
        <div>
            <Drawer 
                open={open}
                variant="temporary"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                Left Drawer
                <Button onClick={closeClickHandler}>Close</Button>
            </Drawer>
        </div>
    );
}

LeftDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    closeClickHandler: PropTypes.func.isRequired
};

export default withStyles(styles)(LeftDrawer);