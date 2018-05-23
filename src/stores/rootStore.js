import { observable, action } from 'mobx';

export default class RootStore {
    @observable isBusy = false;
    @observable leftDrawerOpen = false;
    @observable rightDrawerOpen = false;
    @observable landingDialogOpen = false;

    @action
    setBusy(busy){
        this.isBusy = busy;
    }

    @action
    setLeftDrawerOpen(leftDrawerOpen){
        this.leftDrawerOpen = leftDrawerOpen;
    }

    @action
    setRightDrawerOpen(rightDrawerOpen){
        this.rightDrawerOpen = rightDrawerOpen;
    }

    @action
    setLandingDialogOpen(landingDialogOpen){
        this.landingDialogOpen = landingDialogOpen;
    }
}