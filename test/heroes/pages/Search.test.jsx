

import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router';
import { Search } from '../../../src/heroes';

describe('Pruebas en <Search />', () => {

    test('Debe de mostrar correctamente con valores por defecto', () => {
        const { container} = render(
            <MemoryRouter>
                <Search />
            </MemoryRouter>
        );

        //screen.debug();
        expect(container).toMatchSnapshot();

    })

})