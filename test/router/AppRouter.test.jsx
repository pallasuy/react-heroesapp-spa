import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../src/auth"
import { MemoryRouter } from "react-router-dom"
import { AppRouter } from "../../src/router";
describe('Pruebas en el <AppRouter/>', () => { 

test('Debe mostrar el login si no estoy autenticado', () => { 

    const contextValue = {
        logged:false,
    }
render(
    <MemoryRouter initialEntries={['/marvel']}>
<AuthContext.Provider value={contextValue}>
        <AppRouter/>
</AuthContext.Provider>
    </MemoryRouter>    
    );
    expect( screen.getAllByText('Login').length).toBe(2);
 }
 );

 test('Debe de mostrar el componente de Marvel si esta autenticado', ()=>{
    const contextValue = {
        logged:true,
        user:{
            name:'gpallas',
            id: '1234'
        }
    }

    render(
        <MemoryRouter initialEntries={['/marvel']}>
    <AuthContext.Provider value={contextValue}>
            <AppRouter/>
    </AuthContext.Provider>
        </MemoryRouter>    
        );        
        expect( screen.getAllByText('Marvel').length ).toBeGreaterThanOrEqual(1);
 })

 })