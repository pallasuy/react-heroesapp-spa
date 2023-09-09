import { render, screen } from '@testing-library/react'
import { AuthContext } from '../../src/auth'
import { PublicRoute } from '../../src/router/'

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

    })


})