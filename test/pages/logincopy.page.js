const {
    loginScreen,
    setPinScreen,
    loginWithPinScreen,
    studentDashboardScreen
} = require('../configuration')

const LoginPage = require('../pages/login.page');
const SetPinPage = require('../pages/setpin.page');
const LoginWithPinPage = require('../pages/loginwithpin.page');
const StudentDashboardPage = require('../pages/studentdashboard.page');
 
const LoginCopyPage = {

    itVerifyTitle : function(){
        it('Should verify the title of the page', () => {
            expect(browser).toHaveTitle(loginScreen.title);
        });
    },
    itCtiLogoShouldBeDisplayedInLoginPage : function(){
        it('CTI Logo should be displayed in Login page', () => {
            expect(LoginPage.ctiLogo).toBeVisible()
        });
    },
    itDisplayLoginTextInLoginPage : function(){
        it('Logo should be displayed', () => {
            expect(LoginPage.ctiLogo).toBeVisible()
        });
    },
    itUsernameFieldGetCleared : function()  {
        it('Entered Email Id/ Phone Number in the input field should get cleared', () => {
            LoginPage.emailOrPhoneInput.addValue(loginScreen.username);
            browser.pause(2000);// Using this so that i can see the exection a bit slower, This can be removed
            LoginPage.crossIcon.click();
            browser.pause(2000);// Using this so that i can see the exection a bit slower, This can be removed
        });
    },
    // FIXME
    itPasswordGetVisible : function(){
        it('Entered Password should get visible', () => {
            browser.pause(2000);
            LoginPage.passwordInput.addValue(loginScreen.password);
            LoginPage.eyeIcon.click();
            expect(LoginPage.passwordInput).toBeDisplayed();
            browser.pause(2000);
        });
    },
    itEnterInvalidUsernameValidPassword : function(){
        it('Should throw error message for Email Id/Phone Number field', () => {
            LoginPage.emailOrPhoneInput.addValue(loginScreen.username);
            LoginPage.passwordInput.addValue(loginScreen.password);
            LoginPage.loginBtn.click();
            browser.pause(2000);
            expect(LoginPage.errorMsgEmailIdOrPhoneNumber).toHaveText(loginScreen.errorTextUsername);
            browser.pause(2000);
        });
    },
    itEnterValidUsernameInvalidPassword : function(){
        it('Should throw error message for Password field', () => {
            LoginPage.emailOrPhoneInput.addValue(loginScreen.username);
            LoginPage.passwordInput.addValue(loginScreen.password);
            LoginPage.loginBtn.click();
            browser.pause(2000);
            expect(LoginPage.errorMsgPassword).toHaveText(loginScreen.errorTextPassword);
            browser.pause(2000);
        });
    },
    itInvalidUsernameInvalidPassword : function(){
        it('Should throw error message for both Email Id/Phone Number and Password field', () => {
            LoginPage.emailOrPhoneInput.addValue(loginScreen.username);
            LoginPage.passwordInput.addValue(loginScreen.password);
            LoginPage.loginBtn.click();
            expect(LoginPage.errorMsgEmailIdOrPhoneNumber).toHaveText(loginScreen.errorTextUsername);
            expect(LoginPage.errorMsgPassword).toHaveText(loginScreen.errorTextPassword);
            browser.pause(2000);
        });
    },
    itEnterValidLoginCredentialsWhenPinCreatedEarlier : function(){
        it('Student should get Login and Login With Pin Page should get displayed', () => {
            LoginPage.emailOrPhoneInput.addValue(loginScreen.username);
            LoginPage.passwordInput.addValue(loginScreen.password);
            LoginPage.loginBtn.click();
            expect(browser).toHaveUrl(loginWithPinScreen.loginWithPinUrl);
        });
    },
    itEnterValidLoginCredentialsWhenPinIsNotCreatedEarlier : function(){
        it('Student should get Login and Set Pin Page should get displayed', () => {
            LoginPage.emailOrPhoneInput.addValue(loginScreen.username);
            LoginPage.passwordInput.addValue(loginScreen.password);
            LoginPage.loginBtn.click();
            expect(browser).toHaveUrl(setPinScreen.setPinUrl);
        });
    },
    itEnterSamePinInPinAndConfirmPin : function(){
        it('Login and setting Pin', () => {
            LoginPage.emailOrPhoneInput.addValue(loginScreen.username);
            LoginPage.passwordInput.addValue(loginScreen.password);
            LoginPage.loginBtn.click();
            expect(browser).toHaveUrl(setPinScreen.setPinUrl);
            SetPinPage.pinInput.addValue(setPinScreen.pin);
            SetPinPage.confirmPinInput.addValue(setPinScreen.confirmPin);
            SetPinPage.enterPinBtn.click();
            expect(browser).toHaveUrl(loginWithPinScreen.loginWithPinUrl);
        });
    },
    itEnterDifferentPinInPinAndConfirmPin : function(){
        it('Should throw error message when entered pin in Pin and Confirm Pin does not matches', () => {
            LoginPage.emailOrPhoneInput.addValue(loginScreen.username);
            LoginPage.passwordInput.addValue(loginScreen.password);
            LoginPage.loginBtn.click();
            expect(browser).toHaveUrl(setPinScreen.setPinUrl);
            SetPinPage.pinInput.addValue(setPinScreen.pin);
            SetPinPage.confirmPinInput.addValue(setPinScreen.mismatchedConfirmPin);
            SetPinPage.enterPinBtn.click();
            expect(SetPinPage.errorMessageDifferentPin).toHaveText(setPinScreen.errorTextDifferentPin);
        });
    },
    itSkipSettingPin : function(){
        it('While Login Skip setting Pin', () => {
            LoginPage.emailOrPhoneInput.addValue(loginScreen.username);
            LoginPage.passwordInput.addValue(loginScreen.password);
            LoginPage.loginBtn.click();
            expect(browser).toHaveUrl(setPinScreen.setPinUrl);
            SetPinPage.skip.click();
            expect(browser).toHaveUrl(studentDashboardScreen.studentDashboardUrl);
        });
    },
    itEnterValidPinWhileLoginWithPinWhenPinIsNotCreatedEarlier : function(){
        it('Should get Login With Pin Login>Set Pin>Login With Pin and should display Student Dashboard', () => {
            LoginPage.emailOrPhoneInput.addValue(loginScreen.username);
            LoginPage.passwordInput.addValue(loginScreen.password);
            LoginPage.loginBtn.click();
            expect(browser).toHaveUrl(setPinScreen.setPinUrl);
            SetPinPage.pinInput.addValue(setPinScreen.pin);
            SetPinPage.confirmPinInput.addValue(setPinScreen.confirmPin);
            SetPinPage.enterPinBtn.click();
            expect(browser).toHaveUrl(loginWithPinScreen.loginWithPinUrl);
            // browser.pause(2000);
            //LoginWithPinPage.pinInput.waitForDisplayed({ timeout: 3000 });
            //LoginWithPinPage.pinInput.waitForExist({ timeout: 5000 });
            //LoginWithPinPage.pinInput.waitForEnabled({ timeout: 3000 });
            //LoginWithPinPage.pinInput.waitForClickable({ timeout: 3000 });
            LoginWithPinPage.pinInput.addValue(loginWithPinScreen.pin);
            //LoginWithPinPage.verifyPinBtn.waitForClickable({ timeout: 3000 });
            LoginWithPinPage.verifyPinBtn.click();
            expect(browser).toHaveUrl(studentDashboardScreen.studentDashboardUrl);
        });
    },
    itEnterInvalidPinWhileLoginWithPinWhenPinIsNotCreatedEarlier : function(){
        it('Should throw error message when entered pin in Pin field does not matches to the setted pin', () => {
            LoginPage.emailOrPhoneInput.addValue(loginScreen.username);
            LoginPage.passwordInput.addValue(loginScreen.password);
            LoginPage.loginBtn.click();
            expect(browser).toHaveUrl(setPinScreen.setPinUrl);
            SetPinPage.pinInput.addValue(setPinScreen.pin);
            SetPinPage.confirmPinInput.addValue(setPinScreen.confirmPin);
            SetPinPage.enterPinBtn.click();
            expect(browser).toHaveUrl(loginWithPinScreen.loginWithPinUrl);
            LoginWithPinPage.pinInput.addValue(loginWithPinScreen.wrongPin);
            LoginWithPinPage.verifyPinBtn.click();
            expect(LoginWithPinPage.errorMessageLoginWithPin).toHaveText(loginWithPinScreen.errorTextPin);
        });
    },
    itEnterValidPinWhileLoginWithPinWhenPinCreatedEarlier : function(){
        it('Student Dashboard should get displayed while entering valid pin and clicking on VERIFY PIN button', () => {
            LoginPage.emailOrPhoneInput.addValue(loginScreen.username);
            LoginPage.passwordInput.addValue(loginScreen.password);
            LoginPage.loginBtn.click();
            expect(browser).toHaveUrl(loginWithPinScreen.loginWithPinUrl);
            LoginWithPinPage.pinInput.addValue(loginWithPinScreen.pin);
            LoginWithPinPage.verifyPinBtn.click();
            expect(browser).toHaveUrl(studentDashboardScreen.studentDashboardUrl);
        });
    },
    itEnterInvalidPinWhileLoginWithPinWhenPinCreatedEarlier : function(){
        it('Should throw error message while entering invalid pin and clicking on VERIFY PIN button(Pin setted earlier)', () => {
            LoginPage.emailOrPhoneInput.addValue(loginScreen.username);
            LoginPage.passwordInput.addValue(loginScreen.password);
            LoginPage.loginBtn.click();
            expect(browser).toHaveUrl(loginWithPinScreen.loginWithPinUrl);
            LoginWithPinPage.pinInput.addValue(loginWithPinScreen.wrongPin);
            LoginWithPinPage.verifyPinBtn.click();
            expect(LoginWithPinPage.errorMessageLoginWithPin).toHaveText(loginWithPinScreen.errorTextPin);
        });
    },
    itStudentGetSignOutWhenPinWhenPinIsNotCreatedEarlier : function(){
        it('Student Should get Sign Out Login>Set Pin>Login With Pin>Student Dashboard and Login page should get displayed', () => {
            LoginPage.emailOrPhoneInput.addValue(loginScreen.username);
            LoginPage.passwordInput.addValue(loginScreen.password);
            LoginPage.loginBtn.click();
            expect(browser).toHaveUrl(setPinScreen.setPinUrl);
            SetPinPage.pinInput.addValue(setPinScreen.pin);
            SetPinPage.confirmPinInput.addValue(setPinScreen.confirmPin);
            SetPinPage.enterPinBtn.click();
            expect(browser).toHaveUrl(loginWithPinScreen.loginWithPinUrl);
            //LoginWithPinPage.pinInput.waitForClickable({ timeout: 3000 });
            LoginWithPinPage.pinInput.addValue(loginWithPinScreen.pin);
            LoginWithPinPage.verifyPinBtn.click();
            expect(browser).toHaveUrl(studentDashboardScreen.studentDashboardUrl);
            StudentDashboardPage.signOutBtn.click();
            expect(browser).toHaveUrl(loginScreen.loginUrl);
        });
    },
    itStudentGetSignOutWhenPinWhenPinCreatedEarlier : function(){
        it('Student Should get Sign Out Login>Login With Pin>Student Dashboard and Login page should get displayed', () => {
            LoginPage.emailOrPhoneInput.addValue(loginScreen.username);
            LoginPage.passwordInput.addValue(loginScreen.password);
            LoginPage.loginBtn.click();
            expect(browser).toHaveUrl(loginWithPinScreen.loginWithPinUrl);
            LoginWithPinPage.pinInput.addValue(loginWithPinScreen.pin);
            LoginWithPinPage.verifyPinBtn.click();
            expect(browser).toHaveUrl(studentDashboardScreen.studentDashboardUrl);
            StudentDashboardPage.signOutBtn.click();
            expect(browser).toHaveUrl(loginScreen.loginUrl);
        });
    },
    itClickOnForgotPassword : function(){
        it('forgot password should get clicked', () => {
            LoginPage.forgotPassword.click();
            expect(browser).toHaveUrl(loginScreen.resettingPasswordUrl);
            browser.pause(2000);
        });
    }

}

module.exports = new LoginCopyPage();


// export const itUsernameFieldGetCleared = () => {
//     it('Entered Email Id/ Phone Number in the input field should get cleared', () => {
//         LoginPage.emailOrPhoneInput.addValue(loginCredentials.emailOrMobile);
//         browser.pause(2000);// Using this so that i can see the exection a bit slower, This can be removed
//         LoginPage.crossIcon.click();
//         browser.pause(2000);// Using this so that i can see the exection a bit slower, This can be removed
//     });
// }