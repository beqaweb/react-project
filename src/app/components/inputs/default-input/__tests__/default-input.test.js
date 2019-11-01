import React from 'react';
import {mount} from 'enzyme';
import DefaultInput from '../default-input';

describe('DefaultInput', () => {
    it('component should return textarea with props: multiple', () => {
        const wraper = mount(
            <DefaultInput multiple={true}/>
        );
        expect(wraper.find('textarea').length).toEqual(1);
    });
    it('component should return input without props: multiple', () => {
        const wraper = mount(
            <DefaultInput/>
        );
        expect(wraper.find('input').length).toEqual(1);
    });
});
