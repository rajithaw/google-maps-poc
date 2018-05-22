import RootStore from './rootStore';
import SearchStore from './searchStore';

export default class SessionStore {
    constructor() {
        this.rootStore = new RootStore();
        this.searchStore = new SearchStore();
    }
}
