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
const LoginCopyPage = require('../pages/logincopy.page');
const LoginPage = require('../pages/login.page')
const LoginWithPinPage = require('../pages/loginwithpin.page')

const openPage= (page) => {
    beforeEach(() => {
        page.open();
    });
    // afterEach(() => {
    //     browser.reloadSession();
    // });
}

// const S_LoginUI = ()=>{
//     openPage(LoginPage);
//     LoginCopyPage.itVerifyTitle();
//     LoginCopyPage.itCtiLogoShouldBeDisplayedInLoginPage();
//     LoginCopyPage.itDisplayLoginTextInLoginPage();
//     LoginCopyPage.itLoginbtnDisabled();
// }
// describe('Fixed things(texts,logo,title etc) present in the Login Page', S_LoginUI);

// const S_SetPinUI = ()=> {
//     openPage(LoginPage);
//     LoginCopyPage.itEnterValidLoginCredentialsWhenPinIsNotCreatedEarlier();
//     LoginCopyPage.itVerifyTitleInSetPinPage();
//     LoginCopyPage.itCtiLogoShouldBeDisplayedInSetPinPage(); 
//     LoginCopyPage.itDisplaySetPinTextInSetPinPage();
//     LoginCopyPage.itDisplay2StepVerificationTextInSetPinPage();
//     LoginCopyPage.itDisplay2StepVerificationParagraphTextInSetPinPage();
//     LoginCopyPage.itEnterPinbtnDisabled();
// }
// describe('Fixed things(texts,logo,title etc) present in the Set Pin Page - ', S_SetPinUI);

// const S_LoginWithPinUI = ()=> {
//     openPage(LoginPage);
//     LoginCopyPage.itEnterValidLoginCredentialsWhenPinCreatedEarlier();
//     LoginCopyPage.itVerifyTitleInLoginWithPinPage();
//     LoginCopyPage.itCtiLogoShouldBeDisplayedInLoginWithPinPage();
//     LoginCopyPage.itDisplayLoginWithPinTextInLoginWithPinPage();
//     LoginCopyPage.itVerifybtnDisabled();
// }
// describe('Fixed things(texts,logo,title etc) present in the Login With Pin Page', S_LoginWithPinUI);

const suite4 = () => { //  FIXME
    openPage(LoginPage);
    LoginCopyPage.itUsernameFieldGetCleared();
    //LoginCopyPage.itPasswordGetVisible();
};
describe('Entered username should get cleared and password should get visible - ',suite4);

// const S_ShowPinAndConfirmPin = () => { 
//     openPage(LoginPage);
//     LoginCopyPage.itEnterValidLoginCredentialsWhenPinIsNotCreatedEarlier();
//     LoginCopyPage.itPinAndConfirmPinGetVisible();
// };
// describe('Pin and Confirm Pin should get visible - ',S_ShowPinAndConfirmPin);

// const S_ShowPin = () => { 
//     openPage(LoginPage);
//     LoginCopyPage.itEnterValidLoginCredentialsWhenPinCreatedEarlier();
//     LoginCopyPage.itPinGetVisibleInLoginWithPinPage();
// };
// describe('Pin should get visible - ',S_ShowPin);



// const S_LoginViaLoginWithPin = () => {
//     openPage(LoginPage);
//     LoginCopyPage.itEnterValidLoginCredentialsWhenPinCreatedEarlier();
//     LoginCopyPage.itEnterValidPinWhileLoginWithPin();
// };
// describe('Login with valid login credentials when Pin is already generated earlier - ',S_LoginViaLoginWithPin);

// const S_LoginViaSetPin = () => {
//     openPage(LoginPage);
//     LoginCopyPage.itEnterValidLoginCredentialsWhenPinIsNotCreatedEarlier()
//     LoginCopyPage.itEnterSamePinInPinAndConfirmPin();
//     LoginCopyPage.itEnterValidPinWhileLoginWithPin(); // FIXME : write script that enters pin and confirm pin
// };
// describe('Login with valid login credentials and then sign out when Pin is not generated earlier - ',S_LoginViaSetPin);

// const S_LoginViaSkipSetPin = () => {
//     openPage(LoginPage);
//     LoginCopyPage.itEnterValidLoginCredentialsWhenPinIsNotCreatedEarlier();
//     LoginCopyPage.itSkipSettingPin();
// };
// describe('Login by Skip creating pin and then sign out - ',S_LoginViaSkipSetPin);

// const S_SignOut = () => {
//     openPage(LoginPage);
//     LoginCopyPage.itEnterValidLoginCredentialsWhenPinCreatedEarlier();
//     LoginCopyPage.itEnterValidPinWhileLoginWithPin();
//     LoginCopyPage.itStudentGetSignOut();
// };
// describe('Student get Sign Out - ',S_SignOut);

// const S_InvalidUsername = () => {
//     openPage(LoginPage);
//     LoginCopyPage.itEnterInvalidUsernameValidPassword();
// };
// describe('Throw error message for Username field - ',S_InvalidUsername);

// const S_InvalidPassword = () => {
//     openPage(LoginPage);
//     LoginCopyPage.itEnterValidUsernameInvalidPassword();
// };
// describe('Throw error message for Password field - ',S_InvalidPassword);

// const S_InvalidUsernamePassword = () => {
//     openPage(LoginPage);
//     LoginCopyPage.itInvalidUsernameInvalidPassword();
// };
// describe('Throw error message for Username and Password field - ',S_InvalidUsernamePassword);

// const S_DifferentPinAndConfirmPin = () => {
//     openPage(LoginPage);
//     LoginCopyPage.itEnterValidLoginCredentialsWhenPinIsNotCreatedEarlier();
//     LoginCopyPage.itEnterDifferentPinInPinAndConfirmPin();
// };
// describe('Throw error message when entered Pin and Confirm Pin does not matches - ',S_DifferentPinAndConfirmPin);

// const S_InvalidPin = () => {
//     openPage(LoginPage);
//     LoginCopyPage.itEnterValidLoginCredentialsWhenPinCreatedEarlier();
//     LoginCopyPage.itEnterInvalidPinWhileLoginWithPin();
// };
// describe('throw error message when entered wrong pin during login with pin - ',S_InvalidPin);