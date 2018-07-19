import React from 'react'

import Time from '../../components/Time';

import { shallow, configure } from "enzyme"
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('div elements', () => {
    const dados = {
        nome: 'Botafogo',
        gols: 0,
        BotaoGol: {}
    }

    const component = shallow(<Time  {...dados} />);

    test('should render a h1', () => {
        expect(component.find('h1').text()).toEqual(dados.nome)
    });

    test('should render a h2', () => {
        console.log(component.debug())
        expect(component.find('h2').text()).toEqual(dados.gols.toString())
    });
  
    test('should simulate click', () => {
        const marcarGol = component.find('BotaoGol')
        marcarGol.simulate('click')
        expect(component.find('BotaoGol').length).toBe(1)
    });
})
