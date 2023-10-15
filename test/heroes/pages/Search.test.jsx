

import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import { Search } from '../../../src/heroes';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));


describe('Pruebas en <Search />', () => {


    beforeEach( ()=> jest.clearAllMocks());

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
    });


    test('Debe de mostrar un error si no se encuentra el hero (batman123)', () => { 
        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <Search />
            </MemoryRouter>
        );
            const alertDanger = screen.getByLabelText('alert-danger');
            expect(alertDanger.style.display).not.toBe('none');
        //screen.debug();
     });

     test('Debe llamar el navigate a la pantalla nueva', ()=>{

        const inputValue = 'superman';

        render(
            <MemoryRouter initialEntries={['/search']}>
                <Search />
            </MemoryRouter>
        );

        const inputTextbox = screen.getByRole('textbox');
        fireEvent.change(inputTextbox,{target: {name:'searchText',value:inputValue}});
        //console.log(inputTextbox.value);

        const formSearch = screen.getByLabelText('form');
        fireEvent.submit( formSearch );

        expect( mockedUseNavigate ).toHaveBeenCalledWith(`?q=${inputValue}`); 
     });


})