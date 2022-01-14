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
const {loginWithPinScreen} = require('../constants/verifypinscreen');
const {studentDashboardScreen} = require('../constants/studentdashboardscreen');

const LoginPage = require('../pages/login.page');
const SetPinPage = require('../pages/setpin.page');
const LoginWithPinPage = require('./verifypin.page');
const StudentDashboardPage = require('../pages/studentdashboard.page');
const general = require('../constants/general');
 
const LoginCopyPage = {

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
        it('Logo should be displayed', () => {
            expect(LoginPage.ctiLogo).toBeVisible()
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
    // ============ SET PIN=============
    itVerifyTitleInSetPinPage :  () => {
        it('Should verify the title', () => {
            expect(browser).toHaveTitle(setPinScreen.title);
        });
    },
    itCtiLogoShouldBeDisplayedInSetPinPage :  () => {
        it('Logo should be displayed', () => {
            expect(SetPinPage.ctiLogo).toBeVisible()
        });
    },
    itDisplaySetPinTextInSetPinPage :  () => {
        it('Should display Set Pin text on the screen', () => {
            expect(SetPinPage.setpinText).toBeDisplayed()
        });
    },
    itDisplay2StepVerificationTextInSetPinPage : () =>{
        it('Should display Set Pin text on the screen', () => {
            expect(SetPinPage.twoStepVerificationText).toBeDisplayed()
        });
    },
    itDisplay2StepVerificationParagraphTextInSetPinPage :  () => {
        it('Should display Set Pin text on the screen', () => {
            expect(SetPinPage.paragraphText).toBeDisplayed();
        });
    },
    itEnterPinbtnDisabled :  () => {
        it('Enter Pin button should be disabled', () => {
            SetPinPage.enterPinBtn.waitForClickable({ reverse: true });
        });
    },
    itPinAndConfirmPinGetVisible :  () => {
        it('Entered Pin should get visible', () => {
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
    // ============ LOGIN WITH PIN =============
    itVerifyTitleInLoginWithPinPage :  () => {
        it('Should verify the title', () => {
            expect(browser).toHaveTitle('CTI');
        });
    },
    itCtiLogoShouldBeDisplayedInLoginWithPinPage :  () => {
        it('Logo should be displayed', () => {
            expect(LoginWithPinPage.ctiLogo).toBeVisible();
        });
    },
    itDisplayLoginWithPinTextInLoginWithPinPage :  () => {
        it('Should display Set Pin text on the screen', () => {
            expect(LoginWithPinPage.loginWithPinText).toBeDisplayed();
        });
    },
    itVerifybtnDisabled : () => {
        it('Verify Pin button should be disabled', () => {
            LoginWithPinPage.verifyPinBtn.waitForClickable({ reverse: true });
        });
    },
    itPinGetVisibleInLoginWithPinPage :  () => {
        it('Entered Pin should get visible', () => {
            expect(LoginWithPinPage.pinInput).toHaveAttribute('type', 'password');
            LoginWithPinPage.pinInput.addValue(loginScreen.password);
            LoginWithPinPage.pinEyeIcon.click();
            expect(LoginWithPinPage.pinInput).toHaveAttribute('type', 'text');
        });
    },
}

module.exports = LoginCopyPage;