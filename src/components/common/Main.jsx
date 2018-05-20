import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

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

class Main extends Component {
    state = {
        leftDrawerOpen: false,
        rightDrawerOpen: false
    };

    render() {
        const { classes } = this.props;
        
        return (
            <div className={classes.appFrame}>
                <Header menuClickHandler={this.onHeaderMenuClick} />
                <FloatingPanel searchResultClickHandler={this.onSearchResultClick} />
                <LeftDrawer open={this.state.leftDrawerOpen} closeClickHandler={this.onLeftDrawerCloseClick} />
                <Content open={this.state.rightDrawerOpen} />
                <RightDrawer open={this.state.rightDrawerOpen} closeClickHandler={this.onRightDrawerCloseClick} />
            </div>
        );
    }

    onHeaderMenuClick = () => {
        this.setState({
            leftDrawerOpen: true
        });
    };

    onSearchResultClick = () => {
        this.setState({
            rightDrawerOpen: true
        });
    };

    onLeftDrawerCloseClick = () => {
        this.setState({
            leftDrawerOpen: false
        });
    };

    onRightDrawerCloseClick = () => {
        this.setState({
            rightDrawerOpen: false
        });
    };
}

export default withStyles(styles)(Main);
