import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import MainMap from '../map/MainMap';

const drawerWidth = 240;

const styles = theme => ({
    content: {
        flexGrow: 1,
        marginRight: -drawerWidth,
        marginTop: '64px',
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        [theme.breakpoints.down('sm')]: {
            marginRight: '-100%',
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '56px',
        }
    },
    contentShift: {
        marginRight: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        })
    }
});

function Content(props) {
    const { classes, open } = props;

    return (
        <div className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
            <MainMap isMarkerShown />
        </div>
    );
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired
};

export default withStyles(styles)(Content);