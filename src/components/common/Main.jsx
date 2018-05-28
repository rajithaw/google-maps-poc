import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { observer, inject } from 'mobx-react'

import Header from './Header';
import FloatingPanel from './FloatingPanel';
import LeftDrawer from './LeftDrawer';
import RightDrawer from './RightDrawer';
import Content from './Content';
import LandingDialog from '../landingDialog';
import { Hidden } from '@material-ui/core';

const styles = theme => ({
    appFrame: {
        overflow: 'hidden',
        position: 'absolute',
        display: 'flex',
        zIndex: 1,
        width: '100%',
        height: '100%',
        marginBottom: '-64px',
        [theme.breakpoints.down('xs')]: {
            marginBottom: '-56px',
        }
    }
});

@inject('rootStore')
@observer
class Main extends Component {
    constructor(props) {
        super(props);

        this.openLandingDialog(props.location);
    }
    render() {
        const { classes, rootStore } = this.props;
        
        return (
            <div className={classes.appFrame}>
                <Header menuClickHandler={this.onHeaderMenuClick} />
                <Hidden smDown>
                    <FloatingPanel searchResultClickHandler={this.onSearchResultClick} />
                </Hidden>
                <LeftDrawer open={rootStore.leftDrawerOpen} closeClickHandler={this.onLeftDrawerCloseClick} />
                <Content open={rootStore.rightDrawerOpen} />
                <RightDrawer open={rootStore.rightDrawerOpen} closeClickHandler={this.onRightDrawerCloseClick} />
                <LandingDialog open={rootStore.landingDialogOpen}/>
            </div>
        );
    }

    onHeaderMenuClick = () => {
        this.props.rootStore.setLeftDrawerOpen(true);
    };

    onSearchResultClick = () => {
        this.props.rootStore.setRightDrawerOpen(true);
    };

    onLeftDrawerCloseClick = () => {
        this.props.rootStore.setLeftDrawerOpen(false);
    };

    onRightDrawerCloseClick = () => {
        this.props.rootStore.setRightDrawerOpen(false);
    };

    openLandingDialog = (location) => {
        if(location && location.pathname === '/start') {
            this.props.rootStore.setLandingDialogOpen(true);
        }
    }
}

export default withStyles(styles)(Main);
