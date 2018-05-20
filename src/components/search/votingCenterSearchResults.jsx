import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import VotingCenterSearchResult from './votingCenterSearchResult';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 240,
        backgroundColor: theme.palette.background.paper,
    },
});

function VotingCenterSearchResults(props) {
    const { classes, searchResults, resultClickHandler } = props;
    return (
        <div className={classes.root}>
            <List component="nav">
                {searchResults.length > 0 && searchResults.map(
                    result => (
                        <ListItem key={result.key}>
                            <VotingCenterSearchResult 
                                votingCenterDetails={result}
                                clickHandler={resultClickHandler} />
                        </ListItem>
                    )
                )}
            </List>
        </div>
    );
}

VotingCenterSearchResults.propTypes = {
    classes: PropTypes.object.isRequired,
    searchResults: PropTypes.array,
    resultClickHandler: PropTypes.func,
};

export default withStyles(styles)(VotingCenterSearchResults);