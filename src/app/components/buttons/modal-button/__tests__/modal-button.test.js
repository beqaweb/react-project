import React from 'react';
import {mount} from 'enzyme';
import ModalButton from '../modal-button';

describe('ModalButton', () => {
    it('component should return button that should have class: ' +
        'modal-btn__primary with props: theme="primary"', () => {
        const wraper = mount(
            <ModalButton theme="primary" text="text"/>
        );
        expect(wraper.find('.modal-btn__primary').length).toEqual(1);
    });
});

