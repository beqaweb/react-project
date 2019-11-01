import React from 'react';
import {mount} from 'enzyme';
import NavListItem from '../nav-list-item';
import {BrowserRouter as Router} from 'react-router-dom';

describe('NavListItem', () => {
    it('component should have icon with props: icon"', () => {
        const wraper = mount(
            <Router>
                <NavListItem icon="edit"/>
            </Router>
        );
        expect(wraper.find('.material-icons').length).toEqual(1);
    });
});
