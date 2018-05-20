import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    searchResult: {
        width: '100%',
        height: '126px'
    }
};

function VotingCenterSearchResult(props) {
    const { classes, votingCenterDetails, clickHandler } = props;

    return (
        <div className={classes.searchResult} onClick={() => clickHandler(votingCenterDetails)}>
            {votingCenterDetails.name}
        </div>
    );
}

VotingCenterSearchResult.propTypes = {
    classes: PropTypes.object.isRequired,
    votingCenterDetails: PropTypes.object.isRequired,
    clickHandler: PropTypes.func.isRequired
};

export default withStyles(styles)(VotingCenterSearchResult);