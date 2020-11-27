const LoginCopyPage = require('../pages/logincopy.page');
const LoginPage = require('../pages/login.page')

const suite1 = ()=>{
    beforeEach(() => {
        LoginPage.open();
    });
    LoginCopyPage.itVerifyTitle()
}

describe('Login Page', suite1);