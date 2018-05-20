import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

const drawerWidth = 240;

const styles = theme => ({
    rightDrawer: {
        marginTop: theme.mixins.toolbar.minHeight,
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    }
});

function RightDrawer(props) {
    const { classes, open, closeClickHandler } = props;

    return (
        <Drawer
            variant="persistent"
            anchor="right"
            open={open}
            className={classes.rightDrawer}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            Right Drawer
            <Button onClick={closeClickHandler}>Close</Button>
        </Drawer>
    );
}

RightDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    closeClickHandler: PropTypes.func.isRequired
};

export default withStyles(styles)(RightDrawer);