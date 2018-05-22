import { observable, action } from 'mobx';

class SearchStore {
    @observable selectedTabIndex = 0;
    @observable votingCenterSearchResults = [
        {key: 1, name: 'Center 1'},
        {key: 2, name: 'Center 2'},
        {key: 3, name: 'Center 3'}
    ];

    @action
    setSelectedTabIndex(selectedTabIndex){
        this.selectedTabIndex = selectedTabIndex;
    }

    @action
    setVotingCenterSearchResults(votingCenterSearchResults){
        this.votingCenterSearchResults = votingCenterSearchResults;
    }
}

export default SearchStore;