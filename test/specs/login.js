const LoginPage = require('../pages/login.page');
const SetPinPage = require('../pages/setpin.page');
const LoginWithPinPage = require('../pages/loginwithpin.page');
const StudentDashboard = require('../pages/studentdashboard.page');

describe('Login page', () => {
    beforeEach(() => {
        LoginPage.open();
    });

    it('Should open the url and verify the title', () => {
        LoginPage.open();
        expect(browser).toHaveTitle('CTI');
    });

    // -----------------SHOULD THROW WARNING EVEN IF WE DON'T INCLUDE '.' IN IT-----------------
    // When entering invalid Email Id / Phone Number and valid Password
    // it('Should throw error message for Email Id/Phone Number field', () => {
    //     LoginPage.emailOrPhoneInput.addValue('shuker07@bigpond');
    //     LoginPage.passwordInput.addValue('5001');
    //     LoginPage.loginBtn.click();
    //     browser.pause(5000);
    //     expect(LoginPage.errorMsgEmailIdOrPhoneNumber).toHaveText('Wrong login id format, either it should be a valid phone number or an email Id.');//Text can be changed
    //     browser.pause(5000);
    // });

    // -----------------SHOULD THROW ERROR MESSAGE-----------------
    // When entering valid Email Id / Phone Number and invalid Password
    // it('Should throw error message for Password field', () => {
    //     LoginPage.emailOrPhoneInput.addValue('shuker07@bigpond.com');
    //     LoginPage.passwordInput.addValue('9211');
    //     LoginPage.loginBtn.click();
    //     browser.pause(2000);
    //     expect(LoginPage.errorMsgPassword).toHaveText('You have entered incorrect password.');//Text can be changed
    //     browser.pause(2000);
    // });

    // -----------------SHOULD THROW ERROR MESSAGE FOR BOTH CASES(NOT WORKING)-----------------
    // When entering invalid Email Id / Phone Number and invalid Password
    // it('Should throw error message for both Email Id/Phone Number and Password field', () => {
    //     LoginPage.emailOrPhoneInput.addValue('shuker07@bigpond');
    //     LoginPage.passwordInput.addValue('500500');
    //     LoginPage.loginBtn.click();
    //     browser.pause(2000);
    //     expect(LoginPage.errorMsgEmailIdOrPhoneNumber).toHaveText('Wrong login id format, either it should be a valid phone number or an email Id.');//Text can be changed
    //     expect(LoginPage.errorMsgPassword).toHaveText('You have entered incorrect password.');//Text can be changed
    //     browser.pause(2000);
    // });

    // When entering valid login credentials
    // it('User should get login', () => {
    //     LoginPage.emailOrPhoneInput.addValue('shuker07@bigpond.com');
    //     LoginPage.passwordInput.addValue('5001');
    //     LoginPage.loginBtn.click();
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/sign/pin');
    //     //browser.pause(2000);
    // });

    // After login should get login with pin
    // it('Should get Login With Pin', () => {
    //     LoginPage.emailOrPhoneInput.addValue('shuker07@bigpond.com');
    //     LoginPage.passwordInput.addValue('5001');
    //     LoginPage.checkboxInput.click();
    //     LoginPage.loginBtn.click();
    //     //expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/sign/pin');
    //     LoginWithPinPage.pinInput.addValue('6001');
    //     LoginWithPinPage.verifyPinBtn.click();
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/student/dashboard');
    //     browser.pause(2000);
    // });

    // After login when entering invalid pin should throw error message
    // it('Should throw error message', () => {
    //     LoginPage.emailOrPhoneInput.addValue('shuker07@bigpond.com');
    //     LoginPage.passwordInput.addValue('5001');
    //     LoginPage.checkboxInput.click();
    //     LoginPage.loginBtn.click();
    //     //expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/sign/pin');
    //     LoginWithPinPage.pinInput.addValue('92119211');
    //     LoginWithPinPage.verifyPinBtn.click();
    //     expect(LoginWithPinPage.errorMessageLoginWithPin).toHaveText('Wrong Pin.');
    //     browser.pause(2000);
    // });

    // Student Sign Out
    // it('Student should get Sign Out', () => {
    //     LoginPage.emailOrPhoneInput.addValue('shuker07@bigpond.com');
    //     LoginPage.passwordInput.addValue('5001');
    //     LoginPage.checkboxInput.click();
    //     LoginPage.loginBtn.click();
    //     LoginWithPinPage.pinInput.addValue('6001');
    //     LoginWithPinPage.verifyPinBtn.click();
    //     StudentDashboard.signOutBtn.click();
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/');
    //     browser.pause(2000);
    // });

    // Login and haven't set the Pin earlier Login>Set Pin>Login With Pin>Sign Out
    // it('Login and setting Pin', () => {
    //     LoginPage.emailOrPhoneInput.addValue('burkey21@hotmail.com');
    //     LoginPage.passwordInput.addValue('12345');
    //     LoginPage.loginBtn.click();
    //     SetPinPage.pinInput.addValue('1234');
    //     SetPinPage.confirmPinInput.addValue('1234');
    //     SetPinPage.enterPinBtn.click();
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/sign/pin');
    //     LoginWithPinPage.pinInput.addValue('1234');
    //     LoginWithPinPage.verifyPinBtn.click();
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/student/dashboard');
    //     StudentDashboard.signOutBtn.click();
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/');
    //     browser.pause(2000);
    // });

    // Login and haven't set the Pin earlier Login>Skip>Sign Out
    // it('Login and setting Pin', () => {
    //     LoginPage.emailOrPhoneInput.addValue('0423481105');
    //     LoginPage.passwordInput.addValue('12345');
    //     LoginPage.loginBtn.click();
    //     SetPinPage.skip.click();
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/student/dashboard');
    //     StudentDashboard.signOutBtn.click();
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/');
    //     browser.pause(2000);
    // });

    // When try to login again we should get credentials prefilled becuse we marked Remember Me as checked
    // it('Student should get Sign Out', () => {
    //     LoginPage.emailOrPhoneInput.addValue('shuker07@bigpond.com');
    //     LoginPage.passwordInput.addValue('5001');
    //     LoginPage.checkboxInput.click();
    //     browser.pause(2000);
    //     LoginPage.loginBtn.click();
    //     LoginWithPinPage.pinInput.addValue('6001');
    //     browser.pause(2000);
    //     LoginWithPinPage.verifyPinBtn.click();
    //     browser.pause(2000);
    //     StudentDashboard.signOutBtn.click();
    //     browser.pause(2000);
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/');
    //     expect(LoginPage.emailOrPhoneInput).toHaveValue('shuker07@bigpond.com');
    //     expect(LoginPage.passwordInput).toHaveValue('5001');
    //     browser.pause(2000);
    // });

    // ------------- WORKING FINE TILL HERE -------------

    //  Not so imp test script
    //  When entering valid login credentials and marking remember me as checked
    // it('User gets login and after sign out their credentials should be prefilled when go to Login page', () => {
    //     LoginPage.emailOrPhoneInput.addValue('shuker07@bigpond.com');
    //     LoginPage.passwordInput.addValue('5001');
    //     LoginPage.checkboxInput.click();
    //     LoginPage.loginBtn.click();
    //     browser.pause(10000);
    // });

    // Not so imp test script
    // it('checkbox should get checked', () => {
    //     LoginPage.checkboxInput.click();
    //     browser.pause(10000);
    // });


    // it('forgot password should get clicked', () => {
    //     LoginPage.forgotPassword.click();
    //     browser.pause(5000);
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/user/user/forgot');
    //     browser.pause(5000);
    // });
});