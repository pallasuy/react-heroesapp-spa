import { authReducer, types } from "../../../src/auth";

describe('Pruebas en mi authReducer', () => {
    //debe de retornar el estado por defecto
    test('Debe retornar el estado por defecto', () => {
        const initialState = {
            logged: false
        }
        const state = authReducer(initialState, {});
        expect(state).toEqual(initialState);

    });

    test('Debe la accion login llamar al login autenticar y establecer el user', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Gabriel',
                id: '651'
            }
        }
        const state = authReducer({ logged: false }, action);
        expect(state).toEqual({
            logged: true, user: action.payload
        });

    });
    test('Debe la accion logout, borrar el nombre del u suario y logged en false', () => {
        const action = {
            type: types.logout
        }
        const state = {
            logged: true, user: {
                name: 'Gabriel', id: '651'
            }
        };
        const newState = authReducer(state, action);
        expect(newState).toEqual({
            logged: false
        })
    });


})