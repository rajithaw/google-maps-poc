import React, { Component } from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#b93f52',
      main: '#84002a',
      dark: '#510000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff9e40',
      main: '#f36d01',
      dark: '#b93d00',
      contrastText: '#000',
    },
  },
});

class AppTheme extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                {this.props.children}
            </MuiThemeProvider>
        );
    }
}

export default AppTheme;
