import { fireEvent, render, screen } from "@testing-library/react";
import { AuthContext } from "../../../src/auth";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { Navbar } from "../../../src/ui";


const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));



describe('Pruebas en <Nabvar />', () => {

    const contextValue = {
        logged: true,
        user: {
            name: 'Gabriel'
        },
        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks());

    test('Debe mostrar el nombre del usuario logueado', () => {

        render(

            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar></Navbar>
                </MemoryRouter>

            </AuthContext.Provider>

        );

        screen.debug();

        expect(screen.getByText('Gabriel')).toBeTruthy();


    });

    test('Debe mostrar el logout  y navigate cuando se hace click en el boton', () => {


        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar></Navbar>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const logoutBtn = screen.getByRole('button');
        fireEvent.click(logoutBtn);

        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith('/login',{'replace':true});

    });

})