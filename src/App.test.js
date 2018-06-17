import 'jsdom-global/register';
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    const wrapper = shallow(
        <App />
    );

    expect(wrapper.length).toBe(1);
});
