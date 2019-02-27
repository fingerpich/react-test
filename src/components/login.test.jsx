import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {LoginForm} from './login.jsx';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
    const props = {
        addTodo: jest.fn(),
        classes: {flexCenter: 'flexCenter'}
    };

    const enzymeWrapper = shallow(<LoginForm {...props} />);

    return {
        props,
        enzymeWrapper
    }
}
describe('login', () => {
    it('should render', () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.find('div.flexCenter').hasClass('flexCenter')).toBe(true)
    })
});
