import { render,screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { PrivateRoute } from "../../src/router";
import { MemoryRouter } from "react-router-dom";


describe('Pruebas en el PrivateRoute', () => { 

    test('Debe mostrar el children si esta autenticado', () => {


        Storage.prototype.setItem = jest.fn();
        //Esto es lo mismo que en prod hacer localStorage.setItem

        const contextValue = {
            logged: true,
            user:{
                    name:'Juan',
                    id: "1234"
            }
        }

        const lastPath = '/search?q=batman'

        render(
            <AuthContext.Provider value={contextValue} >
                <MemoryRouter initialEntries={
                    [lastPath]
                }>

                <PrivateRoute>
                    <h1>Ruta Privada</h1>
                </PrivateRoute>

                </MemoryRouter>
              
            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta Privada')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith('lastpath',lastPath);

    });


 });