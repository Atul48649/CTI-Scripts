const SignupPage = require('../pages/signup.page');
const SetPinPage = require('../pages/setpin.page');
const LoginWithPinPage = require('../pages/loginwithpin.page');
const StudentDashboard = require('../pages/studentdashboard.page');

//const LoginPage = require('../pages/login.page');// Importing this for using Login with Pin locators here

describe('Sign Up page', () => {
    it('Should open the url and verify the title', () => {
        SignupPage.open();
        expect(browser).toHaveTitle('CTI');
    });

    // Should display Sign Up text on the Sign Up Page
    // it('Should display Sign Up text on the screen', () => {
    //     expect(SignupPage.signupText).toBePresent();
    // });

    // Sign Up page should have text containing "Welcome, Student Name"
    // it('Should display Welcome text before the Student Name on the screen', () => {
    //     expect(SignupPage.welcomeText).toHaveTextContaining('Welcome,');
    // });

    // Password should get generated and should navigate to Set Pin page
    // it('Password should get generated and should navigate to Set Pin page', () => {
    //     SignupPage.passwordInput.addValue('12345');
    //     SignupPage.confirmPasswordInput.addValue('12345');
    //     SignupPage.signupBtn.click();
    //     browser.pause(5000);
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/set/pin');
    // });

    // it('Password should not get generated', () => {             // Improvement needed to expect error warning
    //     SignupPage.passwordInput.addValue('12345');
    //     SignupPage.confirmPasswordInput.addValue('12345');
    //     SignupPage.signupBtn.click();
    //     browser.pause(15000);
    // });

    // Skip setting Pin
    // it('Should skip Two-Step Authentication', () => {
    //     SignupPage.passwordInput.addValue('12345');
    //     SignupPage.confirmPasswordInput.addValue('12345');
    //     SignupPage.signupBtn.click();
    //     SetPinPage.skip();
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/sign/pin');
    // });

    //  Student Dashboard should get displayed Sign Up>Set Pin>Login with valid Pin
    // it('Should get Login by Verifyiing pin', () => {
    //     SignupPage.passwordInput.addValue('5001');
    //     SignupPage.confirmPasswordInput.addValue('5001');
    //     SignupPage.signupBtn.click();
    //     SetPinPage.pinInput.addValue('6001');
    //     SetPinPage.confirmPinInput.addValue('6001');
    //     SetPinPage.enterPinBtn.click();
    //     LoginWithPinPage.pinInput.addValue('6001');
    //     LoginWithPinPage.verifyPinBtn.click();
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/student/dashboard');
    // });

    // Should throw error message Sign Up>Set Pin>Login with invalid Pin
    // it('Should throw error message when Verifying Pin with invalid pin', () => {
    //     SignupPage.passwordInput.addValue('5001');
    //     SignupPage.confirmPasswordInput.addValue('5001');
    //     SignupPage.signupBtn.click();
    //     SetPinPage.pinInput.addValue('6001');
    //     SetPinPage.confirmPinInput.addValue('6001');
    //     SetPinPage.enterPinBtn.click();
    //     LoginWithPinPage.pinInput.addValue('7001');
    //     expect(LoginWithPinPage.errorMessageLoginWithPin).toHaveText('Wrong Pin.');
    // });

    //  Should get Sign Out displayed Sign Up>Set Pin>Verify Pin>Sign Out
    it('Should get Login by Verifyiing pin', () => {
        SignupPage.passwordInput.addValue('12345');
        SignupPage.confirmPasswordInput.addValue('12345');
        SignupPage.signupBtn.click();
        SetPinPage.pinInput.addValue('1234');
        SetPinPage.confirmPinInput.addValue('1234');
        SetPinPage.enterPinBtn.click();
        LoginWithPinPage.pinInput.addValue('1234');
        //LoginWithPinPage.verifyPinBtn.click();
        //StudentDashboard.signOutBtn.click();
        browser.pause(2000);
        expect(LoginWithPinPage.verifyPinBtn).toBeClickable()
        browser.pause(2000);
        // LoginWithPinPage.verifyPinBtn.click();
        // browser.pause(2000);
        // StudentDashboard.signOutBtn.click();
        // expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/');
        // browser.pause(2000);
    });

});