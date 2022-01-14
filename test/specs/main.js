/**
 * @acronym
 * 'S_' : 'Suite'
 * 
 * @param 
 * - name
 * - age
 * 
 * @return 
 * - object {
 * }
 * 
 * **/


const Page = require('../pages/page')
const Login = require('../specs/login');
const LoginPage = require('../pages/login.page')
const SetPin = require('../specs/setpin')
const SetPinPage = require('../pages/setpin.page')
const VerifyPin = require('./verifypin')
const VerifyPinPage = require('../pages/verifypin.page')
const LoginWithPinPage = require('../pages/verifypin.page');
const { loginScreen } = require('../constants/loginscreen');
const { setPinScreen } = require('../constants/setpinscreen');

const openPage = (page) => {
    // beforeEach(() => {
    before(() => {
        page.open();
    });
}

// ======= LOGIN =======

// const S_LoginUI = ()=>{
//     openPage(LoginPage);
//     Login.itVerifyTitle();
//     Login.itCtiLogoShouldBeDisplayedInLoginPage();
//     Login.itDisplayLoginTextInLoginPage();
//     Login.itLoginbtnDisabled();
// }
// describe('Title, CTI Logo & Login Text should be present and Login Button should be disabled in the Login Page', S_LoginUI);

// const suite4 = () => {
//     openPage(LoginPage);
//     Login.itUsernameFieldGetCleared();
// };
// describe('Entered username should get cleared - ',suite4);

// const suite5 = () => {
//     openPage(LoginPage);
//     Login.itPasswordGetVisible();
// };
// describe('Entered password should get visible - ',suite5);

// ======= ENTER PIN =======

// const S_SetPinUI = () => {
//     openPage(LoginPage);
//     Login.itEnterValidLoginCredentialsWhenPinIsNotCreatedEarlier();

//     SetPin.itVerifyTitleInSetPinPage();
//     SetPin.itCtiLogoShouldBeDisplayedInSetPinPage();
//     SetPin.itDisplaySetPinTextInSetPinPage();
//     SetPin.itDisplay2StepVerificationTextInSetPinPage();
//     SetPin.itDisplay2StepVerificationParagraphTextInSetPinPage();
//     SetPin.itEnterPinbtnDisabled();
// }
// describe('Fixed things(texts,logo,title etc) present in the Set Pin Page - ', S_SetPinUI);

// FIXME: type attribute is not getting change to password when eye is not clicked
// const S_ShowPinAndConfirmPin = () => {
//     openPage(LoginPage);
//     Login.itEnterValidLoginCredentialsWhenPinIsNotCreatedEarlier();
//     SetPin.itPinAndConfirmPinGetVisible();
// };
// describe('Pin and Confirm Pin should get visible(ENTER PIN) - ',S_ShowPinAndConfirmPin);

// ======= VERIFY PIN =======

// const S_LoginWithPinUI = ()=> {
//     openPage(LoginPage);
//     Login.itEnterValidLoginCredentialsWhenPinCreatedEarlier();
//     VerifyPin.itVerifyTitleInLoginWithPinPage();
//     VerifyPin.itCtiLogoShouldBeDisplayedInLoginWithPinPage();
//     VerifyPin.itDisplayLoginWithPinTextInLoginWithPinPage();
//     VerifyPin.itVerifybtnDisabled();
// }
// describe('Fixed things(texts,logo,title etc) present in the Login With Pin Page', S_LoginWithPinUI);

// FIXME: type attribute is not getting change to password when eye is not clicked
// const S_ShowPin = () => {
//     openPage(LoginPage);
//     Login.itEnterValidLoginCredentialsWhenPinCreatedEarlier();
//     VerifyPin.itPinGetVisibleInVerifyPinPage();
// };
// describe('Pin should get visible - ',S_ShowPin);

// const S_LoginViaVerifyPin = () => {
//     openPage(LoginPage);
//     Login.itEnterValidLoginCredentialsWhenPinCreatedEarlier();
//     VerifyPin.itEnterValidPinWhileVerifyPin();
// };
// describe('Navigate to Student Dashboard from Login Page through Verify Pin Page - ',S_LoginViaVerifyPin);

// const username = () => {
//     openPage(LoginPage);
//     Login.itEnterUsername(loginScreen.usernamePinCreatedEarlier);
// };
// describe('Entered username should get cleared - ',username);

// const S_LoginViaSetPin = () => {
//     openPage(LoginPage);
//     Login.itEnterUsername(loginScreen.usernamePinCreatedEarlier);// use this:- usernamePinNotCreatedEarlier
//     Login.itEnterPassword(loginScreen.password);
//     Login.itClickLoginBtn();
//     SetPin.itEnterPin(setPinScreen.pin);
//     SetPin.itEnterConfirmPin(setPinScreen.confirmPin);
//     SetPin.itClickEnterPinBtn();
// };
// describe('Navigate to Student Dashboard from Login Page through Set Pin Page - ',S_LoginViaSetPin);

// const S_LoginViaSkipSetPin = () => {
//     openPage(LoginPage);
//     Login.itEnterUsername(loginScreen.usernamePinCreatedEarlier);// use this:- usernamePinNotCreatedEarlier
//     Login.itEnterPassword(loginScreen.password);
//     Login.itClickLoginBtn();
//     SetPin.itSkipSettingPin();
// };
// describe('Navigate to Student Dashboard from Login Page by Skip Entering Pin - ',S_LoginViaSkipSetPin);

// const S_SignOut = () => {
//     openPage(LoginPage);
//     Login.itEnterValidLoginCredentialsWhenPinCreatedEarlier();
//     Login.itEnterValidPinWhileLoginWithPin();
//     Login.itStudentGetSignOut();
// };
// describe('Student get Sign Out - ',S_SignOut);

// const S_InvalidUsername = () => {
//     openPage(LoginPage);
//     Login.itEnterInvalidUsernameValidPassword();
// };
// describe('Throw error message for Username field - ',S_InvalidUsername);

// const S_InvalidPassword = () => {
//     openPage(LoginPage);
//     Login.itEnterValidUsernameInvalidPassword();
// };
// describe('Throw error message for Password field - ',S_InvalidPassword);

// const S_InvalidUsernamePassword = () => {
//     openPage(LoginPage);
//     Login.itInvalidUsernameInvalidPassword();
// };
// describe('Throw error message for Username and Password field - ',S_InvalidUsernamePassword);

// const S_DifferentPinAndConfirmPin = () => {
//     openPage(LoginPage);
//     Login.itEnterValidLoginCredentialsWhenPinIsNotCreatedEarlier();
//     Login.itEnterDifferentPinInPinAndConfirmPin();
// };
// describe('Throw error message when entered Pin and Confirm Pin does not matches - ',S_DifferentPinAndConfirmPin);

// const S_InvalidPin = () => {
//     openPage(LoginPage);
//     Login.itEnterValidLoginCredentialsWhenPinCreatedEarlier();
//     Login.itEnterInvalidPinWhileLoginWithPin();
// };
// describe('throw error message when entered wrong pin during login with pin - ',S_InvalidPin);