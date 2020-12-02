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

// const suite8 = () => {
//     openPage(LoginPage);
//     LoginCopyPage.itEnterValidLoginCredentialsWhenPinCreatedEarlier();
//     LoginCopyPage.itEnterValidPinWhileLoginWithPinWhenPinCreatedEarlier();
//     LoginCopyPage.itStudentGetSignOutWhenPinWhenPinCreatedEarlier();

// };
// describe('Login with valid login credentials and then sign out when Pin is already generated earlier - ',suite8);

// const suite9 = () => {
//     openPage(LoginPage);
//     LoginCopyPage.itEnterValidLoginCredentialsWhenPinIsNotCreatedEarlier()
//     LoginCopyPage.itEnterSamePinInPinAndConfirmPin();
//     LoginCopyPage.itEnterValidPinWhileLoginWithPinWhenPinIsNotCreatedEarlier(); // TODO : write script that enters pin and confirm pin
//     LoginCopyPage.itStudentGetSignOutWhenPinWhenPinIsNotCreatedEarlier();
// };
// describe('Login with valid login credentials and then sign out when Pin is not generated earlier - ',suite9);

const suite10 = () => {
    openPage(LoginPage);
    LoginCopyPage.itEnterValidLoginCredentialsWhenPinIsNotCreatedEarlier();
    LoginCopyPage.itSkipSettingPin();
    LoginCopyPage.itStudentGetSignOutWhenSkipCreatingPin();
};
describe('Login by Skip creating pin and then sign out - ',suite10);

// const suite11 = () => {
//     openPage(LoginPage);
//     LoginCopyPage.itEnterInvalidUsernameValidPassword();
// };
// describe('throw error message for username field - ',suite11);

// const suite12 = () => {
//     openPage(LoginPage);
//     LoginCopyPage.itEnterValidUsernameInvalidPassword();
// };
// describe('throw error message for password field - ',suite12);

// const suite13 = () => {
//     openPage(LoginPage);
//     LoginCopyPage.itInvalidUsernameInvalidPassword();
// };
// describe('throw error message for username and password field - ',suite13);

// const suite14 = () => {
//     openPage(LoginPage);
//     LoginCopyPage.itEnterValidLoginCredentialsWhenPinIsNotCreatedEarlier();
//     LoginCopyPage.itEnterDifferentPinInPinAndConfirmPin();
//     // LoginCopyPage.itEnterDifferentPinInPinAndConfirmPin();
// };
// describe('throw error message when entered pin and confirm pin does not matches - ',suite14);


// Checking fixed components/fields/elements of the Login Page
// const suite1 = ()=>{
//     openPage(LoginPage);
//     LoginCopyPage.itVerifyTitle();
//     LoginCopyPage.itCtiLogoShouldBeDisplayedInLoginPage();
//     LoginCopyPage.itDisplayLoginTextInLoginPage();
//     LoginCopyPage.itLoginbtnDisabled();
// }
// describe('Fixed things(texts,logo,title etc) present in the Login Page', suite1);

//Checking fixed components/fields/elements of the Set Pin Page
// const suite2 = ()=> {
//     openPage(LoginPage);
//     LoginCopyPage.itVerifyTitleInSetPinPage();
//     LoginCopyPage.itCtiLogoShouldBeDisplayedInSetPinPage(); 
//     LoginCopyPage.itDisplaySetPinTextInSetPinPage();
//     LoginCopyPage.itDisplay2StepVerificationTextInSetPinPage();
//     LoginCopyPage.itDisplay2StepVerificationParagraphTextInSetPinPage();
//     LoginCopyPage.itEnterPinbtnDisabled();
// }
// describe('Fixed things(texts,logo,title etc) present in the Set Pin Page', suite2);

// Checking fixed components/fields/elements of the Login With Pin Page
// const suite3 = ()=> {
//     openPage(LoginPage);
//     LoginCopyPage.itVerifyTitleInLoginWithPinPage();
//     LoginCopyPage.itCtiLogoShouldBeDisplayedInLoginWithPinPage();
//     LoginCopyPage.itDisplayLoginWithPinTextInLoginWithPinPage();
//     LoginCopyPage.itVerifybtnDisabled();
// }
// describe('Fixed things(texts,logo,title etc) present in the Login With Pin Page', suite3);


// const suite4 = ()=> {
//     openPage(LoginPage);
//     LoginCopyPage.itUsernameFieldGetCleared();
//     LoginCopyPage.itPasswordGetVisible();
//     LoginCopyPage.itEnterInvalidUsernameValidPassword();
//     LoginCopyPage.itEnterValidUsernameInvalidPassword();
//     LoginCopyPage.itInvalidUsernameInvalidPassword();
//     LoginCopyPage.itEnterValidLoginCredentialsWhenPinCreatedEarlier();
//     LoginCopyPage.itEnterValidLoginCredentialsWhenPinIsNotCreatedEarlier();
// }
// describe('Login Page', suite4);

// const suite5 = ()=> {
//     openPage(LoginPage);
//     LoginCopyPage.itEnterSamePinInPinAndConfirmPin();
//     LoginCopyPage.itEnterDifferentPinInPinAndConfirmPin();
//     LoginCopyPage.itSkipSettingPin();
//     LoginCopyPage.itEnterValidPinWhileLoginWithPinWhenPinIsNotCreatedEarlier();
// }
// describe('Set Pin Page', suite5);

// const suite6 = ()=> {
//     openPage(LoginPage);
//     LoginCopyPage.itEnterInvalidPinWhileLoginWithPinWhenPinIsNotCreatedEarlier();
//     LoginCopyPage.itEnterValidPinWhileLoginWithPinWhenPinCreatedEarlier();
//     LoginCopyPage.itEnterInvalidPinWhileLoginWithPinWhenPinCreatedEarlier();
//     LoginCopyPage.itStudentGetSignOutWhenPinWhenPinIsNotCreatedEarlier();
//     LoginCopyPage.itStudentGetSignOutWhenPinWhenPinCreatedEarlier();
// }
// describe('Login With Pin Page', suite6);

// const suite7 = ()=> {
//     openPage(LoginPage);
//     LoginCopyPage.itStudentGetSignOutWhenPinWhenPinIsNotCreatedEarlier();
//     LoginCopyPage.itStudentGetSignOutWhenPinWhenPinCreatedEarlier();
// }
// describe('Student Dashboard', suite7);
