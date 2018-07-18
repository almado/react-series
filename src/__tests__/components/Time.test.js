import React from 'react'

import Time from '../../components/Time'

import { shallow } from "enzyme"
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('div elements', () => {
    const dados = {
        nome: 'Botafogo',
        gols: 0,
    }
    test('should render a div', () => {

        const component = shallow(<Time {...dados}/>);
        console.log(<Time {...dados}/>);
        expect(component.state('nome')).toBe('Botafogo');
    });
})
