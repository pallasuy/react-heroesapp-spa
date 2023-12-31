import { render, screen } from '@testing-library/react'
import { AuthContext } from '../../src/auth'
import { PublicRoute } from '../../src/router/'
import { MemoryRouter, Route,Routes } from 'react-router-dom'


describe('Pruebas sobre <PublicRouter/>', () => {
    test('Debe mostrar el children si no esta autenticado', () => {
        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={contextValue} >
                <PublicRoute>
                    <h1>Ruta Pública</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta Pública')).toBeTruthy();

    });

    test('Debe de navegar si esta autenticado', () => { 
        const contextValue = {
            logged: true,
            user:{
                name:'Juan',
                id:'1234'
            }
        }

        render(
            <AuthContext.Provider value={contextValue} >
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                    <Route path='login' 
                    element={
                        <PublicRoute>
                        <h1>Ruta Pública</h1>
                    </PublicRoute>
                    } />

                    <Route path='marvel' element={
                        <h1>Página Marvel</h1>
                    }/>

                    

                    </Routes>
               
                </MemoryRouter>
                
            </AuthContext.Provider>
        );

        //screen.debug();
        expect(screen.getByText('Página Marvel')).toBeTruthy();
 
     })


})