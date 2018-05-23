import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { observer, inject } from 'mobx-react'

import Header from './Header';
import FloatingPanel from './FloatingPanel';
import LeftDrawer from './LeftDrawer';
import RightDrawer from './RightDrawer';
import Content from './Content';

const styles = theme => ({
    appFrame: {
        overflow: 'hidden',
        position: 'absolute',
        display: 'flex',
        zIndex: 1,
        width: '100%',
        height: 'auto',
        marginBottom: -theme.mixins.toolbar.minHeight
    }
});

@inject('rootStore')
@observer
class Main extends Component {
    render() {
        const { classes, rootStore, location } = this.props;
        
        return (
            <div className={classes.appFrame}>
                <Header menuClickHandler={this.onHeaderMenuClick} />
                <FloatingPanel searchResultClickHandler={this.onSearchResultClick} />
                <LeftDrawer open={rootStore.leftDrawerOpen} closeClickHandler={this.onLeftDrawerCloseClick} />
                <Content open={rootStore.rightDrawerOpen} />
                <RightDrawer open={rootStore.rightDrawerOpen} closeClickHandler={this.onRightDrawerCloseClick} />
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
}

export default withStyles(styles)(Main);
