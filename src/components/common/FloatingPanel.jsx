import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import SearchPanel from '../search/searchPanel';

const styles = theme => ({
    floatingPanel: {
        position: 'absolute',
        top: theme.mixins.toolbar.minHeight + 24,
        left: '24px',
        width: '400px',
        zIndex: '1',
        backgroundColor: 'white'
    }
});

function FloatingPanel(props) {
    const { classes, searchResultClickHandler } = props;

    return (
        <div className={classes.floatingPanel}>
            <SearchPanel searchResultClickHandler={searchResultClickHandler} />
        </div>
    );
}

FloatingPanel.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FloatingPanel);