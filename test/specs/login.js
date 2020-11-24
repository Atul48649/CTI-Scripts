const LoginPage = require('../pages/login.page');
const SetPinPage = require('../pages/setpin.page');
const LoginWithPinPage = require('../pages/loginwithpin.page');
const StudentDashboardPage = require('../pages/studentdashboard.page');
//import allureReporter from '@wdio/allure-reporter'

describe('Login page', () => {
    beforeEach(() => {
        LoginPage.open();
    });

    // afterEach(() => {
    //     browser.refresh();
    // });
    

    //  =========================== LOGIN ===============================

    // Logo of CTI should be present and visible
    // it('Logo should be displayed', () => {
    //     expect(LoginPage.ctiLogo).toBeVisible()
    // });

    it('Login text should be visible', () => {
        expect(LoginPage.loginText).toBeDisplayed();
    });

    // Entered Email Id/ Phone Number in the input field should get cleared
    // it('Entered Email Id/ Phone Number in the input field should get cleared', () => {
    //     LoginPage.emailOrPhoneInput.addValue('shuker07@bigpond.com');
    //     browser.pause(2000);// Using this so that i can see the exection a bit slower, This can be removed
    //     LoginPage.crossIcon.click();
    //     browser.pause(2000);// Using this so that i can see the exection a bit slower, This can be removed
    // });

    // Entered Password should get visible
    // it('Entered Password should get visible', () => {
    //     browser.pause(2000);
    //     LoginPage.passwordInput.addValue('123654789');
    //     LoginPage.eyeIcon.click();
    //     expect(LoginPage.passwordInput).toBeDisplayed();
    //     browser.pause(4000);
    // });

    // Verifying Title of the Page
    // it('Should verify the title of the page', () => {
    //     expect(browser).toHaveTitle('CTI');
    // });

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

    // When entering valid Login credentials(In case of when Pin is created earlier)
    // it('Student should get Login and Login With Pin Page should get displayed', () => {
    //     LoginPage.emailOrPhoneInput.addValue('shuker07@bigpond.com');
    //     LoginPage.passwordInput.addValue('5001');
    //     LoginPage.loginBtn.click();
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/sign/pin');
    // });

    // When entering valid Login credentials(In case of when Pin is not created earlier)
    // it('Student should get Login and Set Pin Page should get displayed', () => {
    //     LoginPage.emailOrPhoneInput.addValue('harryerbacher@gmail.com');
    //     LoginPage.passwordInput.addValue('12345');
    //     LoginPage.loginBtn.click();
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/set/pin');
    // });

    //  Login>Set Pin(When Pin is not created)
    // it('Login and setting Pin', () => {
    //     LoginPage.emailOrPhoneInput.addValue('harryerbacher@gmail.com');
    //     LoginPage.passwordInput.addValue('12345');
    //     LoginPage.loginBtn.click();
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/set/pin');
    //     SetPinPage.pinInput.addValue('1234');
    //     SetPinPage.confirmPinInput.addValue('1234');
    //     SetPinPage.enterPinBtn.click();
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/sign/pin');
    // });

    //  Should throw error message when enter different pin in Pin and Confirm Pin field
    // it('Should throw error message when entered pin in Pin and Confirm Pin does not matches', () => {
    //     LoginPage.emailOrPhoneInput.addValue('harryerbacher@gmail.com');
    //     LoginPage.passwordInput.addValue('12345');
    //     LoginPage.loginBtn.click();
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/set/pin');
    //     SetPinPage.pinInput.addValue('1234');
    //     SetPinPage.confirmPinInput.addValue('4321');
    //     SetPinPage.enterPinBtn.click();
    //     expect(SetPinPage.errorMessageDifferentPin).toHaveText('pin and confirm pin should be same.');
    // });

    // Skip setting pin
    // it('While Login Skip setting Pin', () => {
    //     LoginPage.emailOrPhoneInput.addValue('harryerbacher@gmail.com');
    //     LoginPage.passwordInput.addValue('12345');
    //     LoginPage.loginBtn.click();
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/set/pin');
    //     SetPinPage.skip.click();
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/student/dashboard');
    // });

    // Login>Set Pin>Login With Pin
    // it('Should get Login With Pin Login>Set Pin>Login With Pin and should display Student Dashboard', () => {
    //     LoginPage.emailOrPhoneInput.addValue('harryerbacher@gmail.com');
    //     LoginPage.passwordInput.addValue('12345');
    //     LoginPage.loginBtn.click();
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/set/pin');
    //     SetPinPage.pinInput.addValue('1234');
    //     SetPinPage.confirmPinInput.addValue('1234');
    //     SetPinPage.enterPinBtn.click();
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/sign/pin');
    //     // browser.pause(2000);
    //     //LoginWithPinPage.pinInput.waitForDisplayed({ timeout: 3000 });
    //     //LoginWithPinPage.pinInput.waitForExist({ timeout: 5000 });
    //     //LoginWithPinPage.pinInput.waitForEnabled({ timeout: 3000 });
    //     //LoginWithPinPage.pinInput.waitForClickable({ timeout: 3000 });
    //     LoginWithPinPage.pinInput.addValue('1234');
    //     //LoginWithPinPage.verifyPinBtn.waitForClickable({ timeout: 3000 });
    //     LoginWithPinPage.verifyPinBtn.click();
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/student/dashboard');
    // });

    //  Should throw error message when Login>Set Pin>Login With invalid Pin
    // it('Should throw error message when entered pin in Pin field does not matches to the seted pin', () => {
    //     LoginPage.emailOrPhoneInput.addValue('harryerbacher@gmail.com');
    //     LoginPage.passwordInput.addValue('12345');
    //     LoginPage.loginBtn.click();
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/set/pin');
    //     SetPinPage.pinInput.addValue('1234');
    //     SetPinPage.confirmPinInput.addValue('1234');
    //     SetPinPage.enterPinBtn.click();
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/sign/pin');
    //     LoginWithPinPage.pinInput.addValue('9211');
    //     LoginWithPinPage.verifyPinBtn.click();
    //     expect(LoginWithPinPage.errorMessageLoginWithPin).toHaveText('Wrong Pin.');
    // });

    //  Login>Login With valid Pin(When Pin is already created)
    // it('Student Dashboard should get displayed while entering valid pin and clicking on VERIFY PIN button', () => {
    //     LoginPage.emailOrPhoneInput.addValue('goodesean@hotmail.com');
    //     LoginPage.passwordInput.addValue('12345');
    //     LoginPage.loginBtn.click();
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/sign/pin');
    //     LoginWithPinPage.pinInput.addValue('1234');
    //     LoginWithPinPage.verifyPinBtn.click();
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/student/dashboard');
    // });

    //  Should throw error message when Login>Login With invalid Pin
    // it('Should throw error message while entering invalid pin and clicking on VERIFY PIN button(Pin setted earlier)', () => {
    //     LoginPage.emailOrPhoneInput.addValue('goodesean@hotmail.com');
    //     LoginPage.passwordInput.addValue('12345');
    //     LoginPage.loginBtn.click();
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/sign/pin');
    //     LoginWithPinPage.pinInput.addValue('9211');
    //     LoginWithPinPage.verifyPinBtn.click();
    //     expect(LoginWithPinPage.errorMessageLoginWithPin).toHaveText('Wrong Pin.');
    // });

    // Student Should get Sign Out Login>Set Pin>Login With Pin>Student Dashboard>Login
    // it('Student Should get Sign Out Login>Set Pin>Login With Pin>Student Dashboard and Login page should get displayed', () => {
    //     LoginPage.emailOrPhoneInput.addValue('harryerbacher@gmail.com');
    //     LoginPage.passwordInput.addValue('12345');
    //     LoginPage.loginBtn.click();
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/set/pin');
    //     SetPinPage.pinInput.addValue('1234');
    //     SetPinPage.confirmPinInput.addValue('1234');
    //     SetPinPage.enterPinBtn.click();
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/sign/pin');
    //     //LoginWithPinPage.pinInput.waitForClickable({ timeout: 3000 });
    //     LoginWithPinPage.pinInput.addValue('1234');
    //     LoginWithPinPage.verifyPinBtn.click();
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/student/dashboard');
    //     StudentDashboardPage.signOutBtn.click();
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/');
    // });

    // Student Should get Sign Out Login>Login With Pin>Student Dashboard
    // it('Student Should get Sign Out Login>Login With Pin>Student Dashboard and Login page should get displayed', () => {
    //     LoginPage.emailOrPhoneInput.addValue('hunterclayworth@hotmail.com');
    //     LoginPage.passwordInput.addValue('12345');
    //     LoginPage.loginBtn.click();
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/sign/pin');
    //     LoginWithPinPage.pinInput.addValue('1234');
    //     LoginWithPinPage.verifyPinBtn.click();
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/student/dashboard');
    //     StudentDashboardPage.signOutBtn.click();
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/');
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
    //     StudentDashboardPage.signOutBtn.click();
    //     browser.pause(2000);
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/');
    //     expect(LoginPage.emailOrPhoneInput).toHaveValue('shuker07@bigpond.com');
    //     expect(LoginPage.passwordInput).toHaveValue('5001');
    //     browser.pause(2000);
    // });

    // ========TO BE DONE(TESTING)========
    // Should display Set Pin text on the screen
    // it('Should display Set Pin text on the screen', () => {
    //     LoginPage.emailOrPhoneInput.addValue('hunterclayworth@hotmail.com');
    //     LoginPage.passwordInput.addValue('12345');
    //     LoginPage.loginBtn.click();
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/sign/pin');
        
    //     expect(SetPinPage.setpinText).toBeDisplayed();
        
    //     // LoginWithPinPage.pinInput.addValue('1234');
    //     // LoginWithPinPage.verifyPinBtn.click();
    //     // expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/student/dashboard');
    //     // StudentDashboardPage.signOutBtn.click();
    //     // expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/');
    // });

    // FIXME 
    //--------------------This Feature Not Working Yet--------------------------
    // it('forgot password should get clicked', () => {
    //     LoginPage.forgotPassword.click();
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/user/user/forgot');
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

});