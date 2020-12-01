const Page = require('../pages/page')
const LoginCopyPage = require('../pages/logincopy.page');
const LoginPage = require('../pages/login.page')
const LoginWithPinPage = require('../pages/loginwithpin.page')

const openPage= (page) => {
    beforeEach(() => {
        page.open();
    });
    afterEach(() => {
        browser.reloadSession();
    });
}

// Checking fixed components/fields/elements of the Login Page
const suite1 = ()=>{
    openPage(LoginPage);
    LoginCopyPage.itVerifyTitle();
    LoginCopyPage.itCtiLogoShouldBeDisplayedInLoginPage();
    LoginCopyPage.itDisplayLoginTextInLoginPage();
    LoginCopyPage.itLoginbtnDisabled();
}
describe('Fixed things(texts,logo,title etc) present in the Login Page', suite1);

// Checking fixed components/fields/elements of the Set Pin Page
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
