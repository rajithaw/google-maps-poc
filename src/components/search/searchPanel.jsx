import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import AdderssSearchBox from './addressSearchBox';
import VotingCenterSearchResults from './votingCenterSearchResults';

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 400,
    },
});

class SearchPanel extends React.Component {
    state = {
        value: 0,
        votingCenterSearchResults: [
            {key: 1, name: 'Center 1'},
            {key: 2, name: 'Center 2'},
            {key: 3, name: 'Center 3'}
        ]
    };

    handleTabChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleTabChange}
                        indicatorColor="primary"
                        textColor="primary"
                        fullWidth
                    >
                        <Tab label="Find a voting center" />
                        <Tab label="Browse electorates" />
                    </Tabs>
                </AppBar>
                <div>
                    {this.state.value === 0 && <div>
                        Find a voting center
                        <AdderssSearchBox addressChangeHandler={this.onVotingCenterSearchAddressChange} />
                        <VotingCenterSearchResults 
                            searchResults={this.state.votingCenterSearchResults}
                            resultClickHandler={this.onVotingCenterSearchResultClick.bind(this)} />
                    </div>}
                    {this.state.value === 1 && <div>
                        Browse electorates
                        <AdderssSearchBox addressChangeHandler={this.onElectoratesSearchAddressChange}/>
                    </div>}
                </div>
            </div>
        );
    }

    onVotingCenterSearchResultClick(votingCenterDetails) {
        console.log(votingCenterDetails);
        this.props.searchResultClickHandler(votingCenterDetails);
    }

    onVotingCenterSearchAddressChange(address) {
        console.log(address);
    }

    onElectoratesSearchAddressChange(address) {
        console.log(address);
    }
}

SearchPanel.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    searchResultClickHandler: PropTypes.func
};

export default withStyles(styles, { withTheme: true })(SearchPanel);
