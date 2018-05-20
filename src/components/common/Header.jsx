import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
    appBar: {
        position: 'absolute',
        zIndex: 1201,
        width: '100%'
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

function Header(props) {
    const { classes, menuClickHandler } = props;

    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                <IconButton
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="Menu"
                    onClick={menuClickHandler}>
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    menuClickHandler: PropTypes.func.isRequired
};

export default withStyles(styles)(Header);