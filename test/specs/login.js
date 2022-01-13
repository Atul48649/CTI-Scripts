/**
 * NOTE:
 * 
*/

// const {
//     loginScreen,
//     setPinScreen,
//     loginWithPinScreen,
//     studentDashboardScreen
// } = require('../configuration')

const {loginScreen} = require('../constants/loginscreen');
const {setPinScreen} = require('../constants/setpinscreen');
const {loginWithPinScreen} = require('../constants/loginwithpinscreen');
const {studentDashboardScreen} = require('../constants/studentdashboardscreen');

const LoginPage = require('../pages/login.page');
const SetPinPage = require('../pages/setpin.page');
const LoginWithPinPage = require('../pages/loginwithpin.page');
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
    itLoginbtnDisabled :  () => {
        it('Enter Pin button should be disabled', () => {
            LoginPage.loginBtn.waitForClickable({ reverse: true });
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
            expect(browser).toHaveUrl(loginWithPinScreen.loginWithPinUrl);
        });
    },
    itEnterValidLoginCredentialsWhenPinIsNotCreatedEarlier :  () => {
        it('Student should get Login and Set Pin Page should get displayed', () => {
            LoginPage.emailOrPhoneInput.addValue(loginScreen.usernamePinNotCreatedEarlier);
            LoginPage.passwordInput.addValue(loginScreen.password);
            LoginPage.loginBtn.click();
            expect(browser).toHaveUrl(setPinScreen.setPinUrl);
        });
    },
    itEnterSamePinInPinAndConfirmPin :  () => {
        it('Creating Pin', () => {
            SetPinPage.pinInput.addValue(setPinScreen.pin);
            SetPinPage.confirmPinInput.addValue(setPinScreen.confirmPin);
            SetPinPage.enterPinBtn.click();
            expect(browser).toHaveUrl(loginWithPinScreen.loginWithPinUrl);
        });
    },
    itEnterDifferentPinInPinAndConfirmPin :  () => {
        it('Should throw error message when entered pin in Pin and Confirm Pin does not matches', () => {
            SetPinPage.pinInput.addValue(setPinScreen.pin);
            SetPinPage.confirmPinInput.addValue(setPinScreen.mismatchedConfirmPin);
            SetPinPage.enterPinBtn.click();
            expect(SetPinPage.errorMessageDifferentPin).toHaveText(setPinScreen.errorTextDifferentPin);
        });
    },
    itSkipSettingPin :  () => {
        it('While Login Skip setting Pin', () => {
            SetPinPage.skip.click();
            expect(browser).toHaveUrl(studentDashboardScreen.studentDashboardUrl);
        });
    },
    itEnterValidPinWhileLoginWithPin :  () => {
        it('Student Dashboard should get displayed while entering valid Pin and clicking on VERIFY PIN button', () => {
            expect(browser).toHaveUrl(loginWithPinScreen.loginWithPinUrl);
            LoginWithPinPage.pinInput.addValue(loginWithPinScreen.pin);
            LoginWithPinPage.verifyPinBtn.click();
            expect(browser).toHaveUrl(studentDashboardScreen.studentDashboardUrl);
        });
    },
    itEnterInvalidPinWhileLoginWithPin :  () => {
        it('Should throw error message while entering invalid Pin and clicking on VERIFY PIN button', () => {
            LoginWithPinPage.pinInput.addValue(loginWithPinScreen.wrongPin);
            LoginWithPinPage.verifyPinBtn.click();
            expect(LoginWithPinPage.errorMessageLoginWithPin).toHaveText(loginWithPinScreen.errorTextPin);
        });
    },
    itStudentGetSignOut :  () => {
        it('Student Should get Signed Out', () => {
            StudentDashboardPage.signOutBtn.click();
            expect(browser).toHaveUrl(general.AFTERSIGNOUTNAVIGATEDURL);
        });
    },
    // TODO : Feature isn't working yet
    itClickOnForgotPassword :  () => {
        it('forgot password should get clicked', () => {
            LoginPage.forgotPassword.click();
            expect(browser).toHaveUrl(loginScreen.resettingPasswordUrl);
        });
    },
}

module.exports = Login;