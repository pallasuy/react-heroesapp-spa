

import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import { Search } from '../../../src/heroes';

describe('Pruebas en <Search />', () => {

    test('Debe de mostrar correctamente con valores por defecto', () => {
        const { container } = render(
            <MemoryRouter>
                <Search />
            </MemoryRouter>
        );

        //screen.debug();
        expect(container).toMatchSnapshot();

    })

    test('Debe de mostrar a batman y el input con el valor del queryString ', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Search />
            </MemoryRouter>
        );
        const input = screen.getByRole('textbox');
        expect(input.value).toBe('batman');

        const img = screen.getByRole('img');
        expect(img.src).toContain('/heroes/dc-batman.webp');
        //screen.debug();
        const alertDanger = screen.getByLabelText('alert-danger');
        expect(alertDanger.style.display).toBe('none');
       

    })

})