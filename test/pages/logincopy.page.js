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
    itLoginbtnDisabled : function(){
        it('Enter Pin button should be disabled', () => {
            LoginPage.loginBtn.waitForClickable({ reverse: true });
        });
    },
    itUsernameFieldGetCleared : function()  {
        it('Entered Email Id/ Phone Number in the input field should get cleared', () => {
            LoginPage.emailOrPhoneInput.addValue(loginScreen.username);
            LoginPage.crossIcon.click();
        });
    },
    itPasswordGetVisible : function(){
        it('Entered Password should get visible', () => {
            expect(LoginPage.passwordInput).toHaveAttribute('type', 'password');
            LoginPage.passwordInput.addValue(loginScreen.password);
            LoginPage.eyeIcon.click();
            expect(LoginPage.passwordInput).toHaveAttribute('type', 'text');
        });
    },
    itEnterInvalidUsernameValidPassword : function(){
        it('Should throw error message for Email Id/Phone Number field', () => {
            LoginPage.emailOrPhoneInput.addValue(loginScreen.wrongUsername);
            LoginPage.passwordInput.addValue(loginScreen.password);
            LoginPage.loginBtn.click();
            expect(LoginPage.errorMsgEmailIdOrPhoneNumber).toHaveText(loginScreen.errorTextUsername);
        });
    },
    itEnterValidUsernameInvalidPassword : function(){
        it('Should throw error message for Password field', () => {
            LoginPage.emailOrPhoneInput.addValue(loginScreen.username);
            LoginPage.passwordInput.addValue(loginScreen.wrongPassword);
            LoginPage.loginBtn.click();
            expect(LoginPage.errorMsgPassword).toHaveText(loginScreen.errorTextPassword);
        });
    },
    itInvalidUsernameInvalidPassword : function(){
        it('Should throw error message for both Email Id/Phone Number and Password field', () => {
            LoginPage.emailOrPhoneInput.addValue(loginScreen.wrongUsername);
            LoginPage.passwordInput.addValue(loginScreen.wrongPassword);
            LoginPage.loginBtn.click();
            expect(LoginPage.errorMsgEmailIdOrPhoneNumber).toHaveText(loginScreen.errorTextUsername);
            expect(LoginPage.errorMsgPassword).toHaveText(loginScreen.errorTextPassword);
        });
    },
    itEnterValidLoginCredentialsWhenPinCreatedEarlier : function(){
        it('Student should get Login and Login With Pin Page should get displayed', () => {
            LoginPage.emailOrPhoneInput.addValue(loginScreen.usernamePinCreatedEarlier);
            LoginPage.passwordInput.addValue(loginScreen.password);
            LoginPage.loginBtn.click();
            expect(browser).toHaveUrl(loginWithPinScreen.loginWithPinUrl);
        });
    },
    itEnterValidLoginCredentialsWhenPinIsNotCreatedEarlier : function(){
        it('Student should get Login and Set Pin Page should get displayed', () => {
            LoginPage.emailOrPhoneInput.addValue(loginScreen.usernamePinNotCreatedEarlier);
            LoginPage.passwordInput.addValue(loginScreen.password);
            LoginPage.loginBtn.click();
            expect(browser).toHaveUrl(setPinScreen.setPinUrl);
        });
    },
    itEnterSamePinInPinAndConfirmPin : function(){
        it('Creating Pin', () => {
            SetPinPage.pinInput.addValue(setPinScreen.pin);
            SetPinPage.confirmPinInput.addValue(setPinScreen.confirmPin);
            SetPinPage.enterPinBtn.click();
            expect(browser).toHaveUrl(loginWithPinScreen.loginWithPinUrl);
        });
    },
    itEnterDifferentPinInPinAndConfirmPin : function(){
        it('Should throw error message when entered pin in Pin and Confirm Pin does not matches', () => {
            SetPinPage.pinInput.addValue(setPinScreen.pin);
            SetPinPage.confirmPinInput.addValue(setPinScreen.mismatchedConfirmPin);
            SetPinPage.enterPinBtn.click();
            expect(SetPinPage.errorMessageDifferentPin).toHaveText(setPinScreen.errorTextDifferentPin);
        });
    },
    itSkipSettingPin : function(){
        it('While Login Skip setting Pin', () => {
            SetPinPage.skip.click();
            expect(browser).toHaveUrl(studentDashboardScreen.studentDashboardUrl);
        });
    },
    itEnterValidPinWhileLoginWithPinWhenPinIsNotCreatedEarlier : function(){
        it('Should get Login With Pin Login>Set Pin>Login With Pin and should display Student Dashboard', () => {
            LoginWithPinPage.pinInput.addValue(loginWithPinScreen.pin);
            LoginWithPinPage.verifyPinBtn.click();
            expect(browser).toHaveUrl(studentDashboardScreen.studentDashboardUrl);
        });
    },
    itEnterInvalidPinWhileLoginWithPinWhenPinIsNotCreatedEarlier : function(){
        it('Should throw error message when entered pin in Pin field does not matches to the setted pin', () => {
            LoginWithPinPage.pinInput.addValue(loginWithPinScreen.wrongPin);
            LoginWithPinPage.verifyPinBtn.click();
            expect(LoginWithPinPage.errorMessageLoginWithPin).toHaveText(loginWithPinScreen.errorTextPin);
        });
    },
    itEnterValidPinWhileLoginWithPinWhenPinCreatedEarlier : function(){// TODO:This one might gonna removed because of upper test case
        it('Student Dashboard should get displayed while entering valid pin and clicking on VERIFY PIN button', () => {
            LoginWithPinPage.pinInput.addValue(loginWithPinScreen.pin);
            LoginWithPinPage.verifyPinBtn.click();
            expect(browser).toHaveUrl(studentDashboardScreen.studentDashboardUrl);
        });
    },
    itEnterInvalidPinWhileLoginWithPinWhenPinCreatedEarlier : function(){// TODO:This one might gonna removed because of upper test case
        it('Should throw error message while entering invalid pin and clicking on VERIFY PIN button(Pin setted earlier)', () => {
            LoginWithPinPage.pinInput.addValue(loginWithPinScreen.wrongPin);
            LoginWithPinPage.verifyPinBtn.click();
            expect(LoginWithPinPage.errorMessageLoginWithPin).toHaveText(loginWithPinScreen.errorTextPin);
        });
    },
    itStudentGetSignOutWhenPinWhenPinIsNotCreatedEarlier : function(){
        it('Student Should get Sign Out Login>Set Pin>Login With Pin>Student Dashboard and Login page should get displayed', () => {
            StudentDashboardPage.signOutBtn.click();
            expect(browser).toHaveUrl(loginScreen.loginUrl);
        });
    },
    itStudentGetSignOutWhenPinWhenPinCreatedEarlier : function(){
        it('Student Should get Sign Out Login>Login With Pin>Student Dashboard and Login page should get displayed', () => {
            StudentDashboardPage.signOutBtn.click();
            expect(browser).toHaveUrl(loginScreen.loginUrl);
            // expect(browser).toHaveUrl(general.BASE_URL);// TODO : NEEDS TO BE DELETED
        });
    },
    itStudentGetSignOutWhenSkipCreatingPin : function(){
        it('Student Should get Sign Out Login>Set Pin(SKIP)>Student Dashboard and Login page should get displayed', () => {
            StudentDashboardPage.signOutBtn.click();
            expect(browser).toHaveUrl(general.AFTERSIGNOUTNAVIGATEDURL);
        });
    },
    // TODO : Feature isn't working yet
    itClickOnForgotPassword : function(){
        it('forgot password should get clicked', () => {
            LoginPage.forgotPassword.click();
            expect(browser).toHaveUrl(loginScreen.resettingPasswordUrl);
        });
    },
    // ============ SET PIN=============
    itVerifyTitleInSetPinPage : function(){
        it('Should verify the title', () => {
            // LoginPage.emailOrPhoneInput.addValue(loginScreen.usernamePinNotCreatedEarlier);
            // LoginPage.passwordInput.addValue(loginScreen.password);
            // LoginPage.loginBtn.click();
            // expect(browser).toHaveUrl(setPinScreen.setPinUrl); 
            expect(browser).toHaveTitle(setPinScreen.title);
        });
    },
    itCtiLogoShouldBeDisplayedInSetPinPage : function(){
        it('Logo should be displayed', () => {
            // LoginPage.emailOrPhoneInput.addValue(loginScreen.usernamePinNotCreatedEarlier);
            // LoginPage.passwordInput.addValue(loginScreen.password);
            // LoginPage.loginBtn.click();
            // expect(browser).toHaveUrl(setPinScreen.setPinUrl); 
            expect(SetPinPage.ctiLogo).toBeVisible()
        });
    },
    itDisplaySetPinTextInSetPinPage : function(){
        it('Should display Set Pin text on the screen', () => {
            // LoginPage.emailOrPhoneInput.addValue(loginScreen.usernamePinNotCreatedEarlier);
            // LoginPage.passwordInput.addValue(loginScreen.password);
            // LoginPage.loginBtn.click();
            // expect(browser).toHaveUrl(setPinScreen.setPinUrl); 
            expect(SetPinPage.setpinText).toBeDisplayed()
        });
    },
    itDisplay2StepVerificationTextInSetPinPage : () =>{
        it('Should display Set Pin text on the screen', () => {
            // LoginPage.emailOrPhoneInput.addValue(loginScreen.usernamePinNotCreatedEarlier);
            // LoginPage.passwordInput.addValue(loginScreen.password);
            // LoginPage.loginBtn.click();
            // expect(browser).toHaveUrl(setPinScreen.setPinUrl); 
            expect(SetPinPage.twoStepVerificationText).toBeDisplayed()
        });
    },
    itDisplay2StepVerificationParagraphTextInSetPinPage : function(){
        it('Should display Set Pin text on the screen', () => {
            // LoginPage.emailOrPhoneInput.addValue(loginScreen.usernamePinNotCreatedEarlier);
            // LoginPage.passwordInput.addValue(loginScreen.password);
            // LoginPage.loginBtn.click();
            // expect(browser).toHaveUrl(setPinScreen.setPinUrl); 
            expect(SetPinPage.paragraphText).toBeDisplayed();
        });
    },
    itPinAndConfirmPinGetVisible : function(){
        it('Entered Pin should get visible', () => {
            // LoginPage.emailOrPhoneInput.addValue(loginScreen.username);
            // LoginPage.passwordInput.addValue(loginScreen.password);
            // LoginPage.loginBtn.click();
            expect(browser).toHaveUrl(setPinScreen.setPinUrl); 
            expect(SetPinPage.pinInput).toHaveAttribute('type', 'password');
            SetPinPage.pinInput.addValue(loginScreen.password);
            SetPinPage.pinEyeIcon.click();
            expect(SetPinPage.pinInput).toHaveAttribute('type', 'text');
            expect(SetPinPage.confirmPinInput).toHaveAttribute('type', 'password');
            SetPinPage.confirmPinInput.addValue(loginScreen.password);
            SetPinPage.confirmPinEyeIcon.click();
            expect(SetPinPage.confirmPinInput).toHaveAttribute('type', 'text');
        });
    },
    itEnterPinbtnDisabled : function(){
        it('Enter Pin button should be disabled', () => {
            // LoginPage.emailOrPhoneInput.addValue(loginScreen.username);
            // LoginPage.passwordInput.addValue(loginScreen.password);
            // LoginPage.loginBtn.click();
            // expect(browser).toHaveUrl(setPinScreen.setPinUrl); 
            SetPinPage.enterPinBtn.waitForClickable({ reverse: true });
        });
    },
    // ============ LOGIN WITH PIN =============
    itVerifyTitleInLoginWithPinPage : function(){
        it('Should verify the title', () => {
            // LoginPage.emailOrPhoneInput.addValue(loginScreen.username);
            // LoginPage.passwordInput.addValue(loginScreen.password);
            // LoginPage.loginBtn.click();
            // expect(browser).toHaveUrl(loginWithPinScreen.loginWithPinUrl); 
            expect(browser).toHaveTitle('CTI');
        });
    },
    itCtiLogoShouldBeDisplayedInLoginWithPinPage : function(){
        it('Logo should be displayed', () => {
            // LoginPage.emailOrPhoneInput.addValue(loginScreen.username);
            // LoginPage.passwordInput.addValue(loginScreen.password);
            // LoginPage.loginBtn.click();
            // expect(browser).toHaveUrl(loginWithPinScreen.loginWithPinUrl); 
            expect(LoginWithPinPage.ctiLogo).toBeVisible();
        });
    },
    itDisplayLoginWithPinTextInLoginWithPinPage : function(){
        it('Should display Set Pin text on the screen', () => {
            // LoginPage.emailOrPhoneInput.addValue(loginScreen.username);
            // LoginPage.passwordInput.addValue(loginScreen.password);
            // LoginPage.loginBtn.click();
            // expect(browser).toHaveUrl(loginWithPinScreen.loginWithPinUrl); 
            expect(LoginWithPinPage.loginWithPinText).toBeDisplayed();
        });
    },
    itPinGetVisibleInLoginWithPinPage : function(){
        it('Entered Pin should get visible', () => {
            // LoginPage.emailOrPhoneInput.addValue(loginScreen.username);
            // LoginPage.passwordInput.addValue(loginScreen.password);
            // LoginPage.loginBtn.click();
            // expect(browser).toHaveUrl(loginWithPinScreen.loginWithPinUrl); 
            expect(LoginWithPinPage.pinInput).toHaveAttribute('type', 'password');
            LoginWithPinPage.pinInput.addValue(loginScreen.password);
            LoginWithPinPage.eyeIcon.click();
            expect(LoginWithPinPage.pinInput).toHaveAttribute('type', 'text');
        });
    },
    itVerifybtnDisabled : function(){
        it('Verify Pin button should be disabled', () => {
            // LoginPage.emailOrPhoneInput.addValue(loginScreen.username);
            // LoginPage.passwordInput.addValue(loginScreen.password);
            // LoginPage.loginBtn.click();
            // expect(browser).toHaveUrl(loginWithPinScreen.loginWithPinUrl); 
            LoginWithPinPage.verifyPinBtn.waitForClickable({ reverse: true });
        });
    },

}

module.exports = LoginCopyPage;


// export const itUsernameFieldGetCleared = () => {
//     it('Entered Email Id/ Phone Number in the input field should get cleared', () => {
//         LoginPage.emailOrPhoneInput.addValue(loginCredentials.emailOrMobile);
//         LoginPage.crossIcon.click();
//     });
// }