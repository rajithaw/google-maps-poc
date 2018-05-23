import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { observer, inject } from 'mobx-react'

import AdderssSearchBox from './addressSearchBox';
import VotingCenterSearchResults from './votingCenterSearchResults';

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 400,
    },
});

@inject('searchStore')
@observer
class SearchPanel extends React.Component {
    constructor(props){
        super(props);

        this.handleTabChange = this.handleTabChange.bind(this);
        this.onVotingCenterSearchResultClick = this.onVotingCenterSearchResultClick.bind(this);
    }
    render() {
        const { classes, searchStore } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={searchStore.selectedTabIndex}
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
                    {searchStore.selectedTabIndex === 0 && <div>
                        Find a voting center
                        <AdderssSearchBox addressChangeHandler={this.onVotingCenterSearchAddressChange} />
                        <VotingCenterSearchResults 
                            searchResults={searchStore.votingCenterSearchResults}
                            resultClickHandler={this.onVotingCenterSearchResultClick} />
                    </div>}
                    {searchStore.selectedTabIndex === 1 && <div>
                        Browse electorates
                        <AdderssSearchBox addressChangeHandler={this.onElectoratesSearchAddressChange}/>
                    </div>}
                </div>
            </div>
        );
    }

    handleTabChange = (event, value) => {
        this.props.searchStore.setSelectedTabIndex(value);
    };

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
