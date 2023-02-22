import '@testing-library/jest-dom'
import { login } from './http/userApi';


describe("loginReturnUser", () =>{
    test('returnData', async () => {
        expect(await login("admin", "qwert")).not.toBeNull();
    })
    test('roleEqualentAdmin', async () => {
        expect(await login("admin", "qwert").then(item=>item.role)).toEqual("ADMIN");
    })
})
