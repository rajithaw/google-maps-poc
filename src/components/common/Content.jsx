import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import MainMap from '../map/MainMap';

const drawerWidth = 240;

const styles = theme => ({
    content: {
        flexGrow: 1,
        marginTop: theme.mixins.toolbar.minHeight,
        backgroundColor: theme.palette.background.default,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    'content-right': {
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    'contentShift-right': {
        marginRight: 0,
    },
});

function Content(props) {
    const { classes, open } = props;

    return (
        <main className={classNames(classes.content, classes['content-right'], {
            [classes.contentShift]: open,
            [classes['contentShift-right']]: open
          })}
        >
            <MainMap isMarkerShown />
        </main>
    );
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired
};

export default withStyles(styles)(Content);