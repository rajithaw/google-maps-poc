import 'jsdom-global/register';
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AppTheme from './AppTheme';
import { Button } from '@material-ui/core';

configure({ adapter: new Adapter() });

it('should apply the app theme', () => {
    const themeOverride = {
        palette: {
            primary: {
                light: '#b93f52',
                main: '#84002a',
                dark: '#510000',
                contrastText: '#fff'
            },
            secondary: {
                light: '#ff9e40',
                main: '#f36d01',
                dark: '#b93d00',
                contrastText: '#000'
            },
        },
    };

    const wrapper = mount(
        <AppTheme>
            <Button>button</Button>
        </AppTheme>
    );

    const theme = wrapper.childAt(0).prop("theme");

    expect(theme).toMatchObject(themeOverride);
});
