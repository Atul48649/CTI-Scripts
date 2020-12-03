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


// // Checking fixed components/fields/elements of the Login Page
const suite1 = ()=>{
    openPage(LoginPage);
    LoginCopyPage.itVerifyTitle();
    LoginCopyPage.itCtiLogoShouldBeDisplayedInLoginPage();
    LoginCopyPage.itDisplayLoginTextInLoginPage();
    LoginCopyPage.itLoginbtnDisabled();
}
describe('Fixed things(texts,logo,title etc) present in the Login Page', suite1);

// // Checking fixed components/fields/elements of the Set Pin Page
const suite2 = ()=> {
    openPage(LoginPage);
    LoginCopyPage.itEnterValidLoginCredentialsWhenPinIsNotCreatedEarlier();
    LoginCopyPage.itVerifyTitleInSetPinPage();
    LoginCopyPage.itCtiLogoShouldBeDisplayedInSetPinPage(); 
    LoginCopyPage.itDisplaySetPinTextInSetPinPage();
    LoginCopyPage.itDisplay2StepVerificationTextInSetPinPage();
    LoginCopyPage.itDisplay2StepVerificationParagraphTextInSetPinPage();
    LoginCopyPage.itEnterPinbtnDisabled();
}
describe('Fixed things(texts,logo,title etc) present in the Set Pin Page', suite2);

// Checking fixed components/fields/elements of the Login With Pin Page
const suite3 = ()=> {
    openPage(LoginPage);
    LoginCopyPage.itEnterValidLoginCredentialsWhenPinCreatedEarlier();
    LoginCopyPage.itVerifyTitleInLoginWithPinPage();
    LoginCopyPage.itCtiLogoShouldBeDisplayedInLoginWithPinPage();
    LoginCopyPage.itDisplayLoginWithPinTextInLoginWithPinPage();
    LoginCopyPage.itVerifybtnDisabled();
}
describe('Fixed things(texts,logo,title etc) present in the Login With Pin Page', suite3);


const suite8 = () => {
    openPage(LoginPage);
    LoginCopyPage.itEnterValidLoginCredentialsWhenPinCreatedEarlier();
    LoginCopyPage.itEnterValidPinWhileLoginWithPinWhenPinCreatedEarlier();
    LoginCopyPage.itStudentGetSignOutWhenPinWhenPinCreatedEarlier();
};
describe('Login with valid login credentials and then sign out when Pin is already generated earlier - ',suite8);

const suite9 = () => {
    openPage(LoginPage);
    LoginCopyPage.itEnterValidLoginCredentialsWhenPinIsNotCreatedEarlier()
    LoginCopyPage.itEnterSamePinInPinAndConfirmPin();
    LoginCopyPage.itEnterValidPinWhileLoginWithPinWhenPinIsNotCreatedEarlier(); // TODO : write script that enters pin and confirm pin
    LoginCopyPage.itStudentGetSignOutWhenPinWhenPinIsNotCreatedEarlier();
};
describe('Login with valid login credentials and then sign out when Pin is not generated earlier - ',suite9);

const suite10 = () => {
    openPage(LoginPage);
    LoginCopyPage.itEnterValidLoginCredentialsWhenPinIsNotCreatedEarlier();
    LoginCopyPage.itSkipSettingPin();
    LoginCopyPage.itStudentGetSignOutWhenSkipCreatingPin();
};
describe('Login by Skip creating pin and then sign out - ',suite10);

const suite11 = () => {
    openPage(LoginPage);
    LoginCopyPage.itEnterInvalidUsernameValidPassword(); //TODO:To be asked i.e. Should we divide it into two it blocks 1st-Entering wong username and 2nd-for error message
};
describe('throw error message for username field - ',suite11);

const suite12 = () => {
    openPage(LoginPage);
    LoginCopyPage.itEnterValidUsernameInvalidPassword(); // TODO: To be asked i.e. Should we divide it into two it blocks
};
describe('throw error message for password field - ',suite12);

const suite13 = () => {
    openPage(LoginPage);
    LoginCopyPage.itInvalidUsernameInvalidPassword(); // TODO: To be asked i.e. Should we divide it into two it blocks
};
describe('throw error message for username and password field - ',suite13);

const suite14 = () => {
    openPage(LoginPage);
    LoginCopyPage.itEnterValidLoginCredentialsWhenPinIsNotCreatedEarlier();
    LoginCopyPage.itEnterDifferentPinInPinAndConfirmPin();
};
describe('throw error message when entered pin and confirm pin does not matches - ',suite14);

const suite15 = () => {
    openPage(LoginPage);
    LoginCopyPage.itEnterValidLoginCredentialsWhenPinCreatedEarlier();
    LoginCopyPage.itEnterInvalidPinWhileLoginWithPinWhenPinCreatedEarlier();
};
describe('throw error message when entered wrong pin during login with pin - ',suite15);

const suite4 = () => { // TODO should we write it seprately 
    openPage(LoginPage);
    LoginCopyPage.itUsernameFieldGetCleared();
    //LoginCopyPage.itPasswordGetVisible();
};
describe('Entered username should get cleared and password should get visible - ',suite4);