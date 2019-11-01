import React from 'react';
import {mount} from 'enzyme';
import ExpansionPanel from '../expansion-panel';
import {Provider} from 'react-redux';
import store from '../../../../store';

describe('ExpansionPanel', () => {
    it('component should add class opened on click on expansion-panel__header  ', () => {
        const mail = {
            from: 'kirilodan14@gmail.com',
            isRead: false,
            message: 'test',
            subject: 'test',
            to: 'test@test.test',
            types: {
                inbox: true,
                spam: false,
                trash: false
            }
        };
        const wrapper = mount(
            <Provider store={store}>
                <ExpansionPanel mail={mail}/>
            </Provider>
        );
        wrapper.find('.expansion-panel__header').simulate('click');
        expect(wrapper.find('.opened').length).toEqual(1);
    });
});

