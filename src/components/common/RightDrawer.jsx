import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

const drawerWidth = 240;

const styles = theme => ({
    rightDrawer: {
        width: drawerWidth,
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        }
    },
    drawerPaper: {
        position: 'relative',
        marginTop: '64px',
        [theme.breakpoints.down('xs')]: {
            marginTop: '56px',
        }
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