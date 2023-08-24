import { types } from "../../../src/auth"

describe('Pruebas sobre Types.js', () => {
    test('Debe de regresar estos types', () => {
        const typesAux = {
            login: '[Auth] login',
            logout: '[Auth] logout',
        }
        expect(types).toEqual(typesAux);


    })

})