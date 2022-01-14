/**
 * NOTE:
 * 
*/

// const {
//     loginScreen,
//     setPinScreen,
//     verifyPinScreen,
//     studentDashboardScreen
// } = require('../configuration')

const {loginScreen} = require('../constants/loginscreen');
const {setPinScreen} = require('../constants/setpinscreen');
const {verifyPinScreen} = require('../constants/verifypinscreen');
const {studentDashboardScreen} = require('../constants/studentdashboardscreen');

const LoginPage = require('../pages/login.page');
const SetPinPage = require('../pages/setpin.page');
const LoginWithPinPage = require('../pages/verifypin.page');
const StudentDashboardPage = require('../pages/studentdashboard.page');
const general = require('../constants/general');
 
const Login = {

    itVerifyTitle : () => {
        it('Should verify the title of the page', () => {
            expect(browser).toHaveTitle(loginScreen.title);
        });
    },
    itCtiLogoShouldBeDisplayedInLoginPage : () => {
        it('CTI Logo should be displayed in Login page', () => {
            expect(LoginPage.ctiLogo).toBeVisible()
        });
    },
    itDisplayLoginTextInLoginPage :  () => {
        it('Login text should be displayed', () => {
            expect(LoginPage.loginText).toBeVisible();
            expect(LoginPage.loginText).toHaveText('Login');
        });
    },
    itUsernameFieldGetCleared :  () =>   {
        it('Entered Email Id/ Phone Number in the input field should get cleared', () => {
            LoginPage.emailOrPhoneInput.addValue(loginScreen.username);
            LoginPage.crossIcon.waitForClickable({ timeout: 1000 });
            LoginPage.crossIcon.click();
        });
    },
    itPasswordGetVisible :  () => {
        it('Entered Password should get visible', () => {
            expect(LoginPage.passwordInput).toHaveAttribute('type', 'password');
            LoginPage.passwordInput.addValue(loginScreen.password);
            LoginPage.eyeIcon.click();
            expect(LoginPage.passwordInput).toHaveAttribute('type', 'text');
        });
    },
    itEnterUsername :  (username) => {
        it('Should enter username passed as an arguement', () => {
            LoginPage.emailOrPhoneInput.addValue(username);
            browser.pause(2000);
        });
    },
    itEnterPassword :  (password) => {
        it('Should enter password passed as an arguement', () => {
            LoginPage.passwordInput.addValue(password);
            browser.pause(2000);
        });
    },
    itClickLoginBtn :  () => {
        it('Should click on Login button', () => {
            LoginPage.loginBtn.click();
            expect(browser).toHaveUrl(setPinScreen.setPinUrl);
        });
    },
    itLoginbtnDisabled :  () => {
        it('Login button should be disabled', () => {
            LoginPage.loginBtn.waitForClickable({ reverse: true });
        });
    },
    itLoginbtnEnabled :  () => {
        it('Login button should be disabled', () => {
            LoginPage.loginBtn.waitForClickable({ reverse: false });
        });
    },
    // TODO : Feature isn't working yet
    itClickOnForgotPassword :  () => {
        it('forgot password should get clicked', () => {
            LoginPage.forgotPassword.click();
            expect(browser).toHaveUrl(loginScreen.resettingPasswordUrl);
        });
    },

    // TODO: 4 methods present below might need to be deleted if not used
    itEnterInvalidUsernameValidPassword :  () => {
        it('Should throw error message for Email Id/Phone Number field', () => {
            LoginPage.emailOrPhoneInput.addValue(loginScreen.wrongUsername);
            LoginPage.passwordInput.addValue(loginScreen.password);
            LoginPage.loginBtn.click();
            expect(LoginPage.errorMsgEmailIdOrPhoneNumber).toHaveText(loginScreen.errorTextUsername);
        });
    },
    itEnterValidUsernameInvalidPassword :  () => {
        it('Should throw error message for Password field', () => {
            LoginPage.emailOrPhoneInput.addValue(loginScreen.username);
            LoginPage.passwordInput.addValue(loginScreen.wrongPassword);
            LoginPage.loginBtn.click();
            expect(LoginPage.errorMsgPassword).toHaveText(loginScreen.errorTextPassword);
        });
    },
    itInvalidUsernameInvalidPassword :  () => {
        it('Should throw error message for both Email Id/Phone Number and Password field', () => {
            LoginPage.emailOrPhoneInput.addValue(loginScreen.wrongUsername);
            LoginPage.passwordInput.addValue(loginScreen.wrongPassword);
            LoginPage.loginBtn.click();
            expect(LoginPage.errorMsgEmailIdOrPhoneNumber).toHaveText(loginScreen.errorTextUsername);
            expect(LoginPage.errorMsgPassword).toHaveText(loginScreen.errorTextPassword);
        });
    },
    itEnterValidLoginCredentialsWhenPinCreatedEarlier :  () => {
        it('Student should get Login and Login With Pin Page should get displayed', () => {
            LoginPage.emailOrPhoneInput.addValue(loginScreen.usernamePinCreatedEarlier);
            LoginPage.passwordInput.addValue(loginScreen.password);
            LoginPage.loginBtn.click();
            expect(browser).toHaveUrl(verifyPinScreen.verifyPinUrl);
        });
    },
}

module.exports = Login;