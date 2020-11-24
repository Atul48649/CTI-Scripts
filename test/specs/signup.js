const SignupPage = require('../pages/signup.page');
const SetPinPage = require('../pages/setpin.page');
// const LoginWithPinPage = require('../pages/loginwithpin.page');
// const StudentDashboard = require('../pages/studentdashboard.page');
const LoginPage = require('../pages/login.page');
const LoginWithPinPage = require('../pages/loginwithpin.page');
const StudentDashboardPage = require('../pages/studentdashboard.page');
//import allureReporter from '@wdio/allure-reporter'

//const LoginPage = require('../pages/login.page');// Importing this for using Login with Pin locators here

describe('Sign Up page', () => {

    beforeEach(() => {
        SignupPage.open();
    });

    // Should verify the title
    // it('Should verify the title', () => {
    //     expect(browser).toHaveTitle('CTI');
    // });

    // Logo of CTI should be present and visible
    // it('Logo should be displayed', () => {
    //     expect(LoginPage.ctiLogo).toBeVisible()
    // });

    //Should display Sign Up text on the Sign Up Page
    it('Should display Sign Up text on the screen', () => {
        expect(SignupPage.signupText).toBePresent();
    });

    // Sign Up page should have text containing "Welcome, Student Name"
    // it('Should display Welcome text before the Student Name on the screen', () => {
    //     expect(SignupPage.welcomeText).toHaveTextContaining('Welcome,');
    // });

    // By default Signup button should be disabled
    // it('Signup button should be disabled', () => {
    //     SignupPage.signupBtn.waitForClickable({ reverse: true });
    // });

    // FIXME 
    // Entered Password and Confirm Password should get visible
    // it('Password and Confirm Password should get visible', () => {
    //     SignupPage.passwordInput.addValue('12345');
    //     browser.pause(2000);
    //     SignupPage.passwordEyeIcon.click();
    //     //SignupPage.passwordEyeIcon.isDisplayed();
    //     //expect(SignupPage.passwordEyeIcon).isDisplayed();
    //     browser.pause(2000);


    //     SignupPage.confirmPasswordInput.addValue('123456');
    //     SignupPage.passwordEyeIcon.click();

    // });

    // Password should get generated and Set Pin page should get displayed
    // it('Password should get generated and Set Pin page should get displayed', () => {
    //     SignupPage.passwordInput.addValue('12345');
    //     SignupPage.confirmPasswordInput.addValue('12345');
    //     SignupPage.signupBtn.click();
    //     //browser.pause(2000);
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/set/pin');
    // });

    // ------------- THIS ONE LATER WILL BE MODIFIED -------------
    // Should throw error warning when enter different password in Password and Confirm Password field
    // it('Password should not get generated', () => {             // Improvement needed to expect error warning
    //     SignupPage.passwordInput.addValue('12345');
    //     SignupPage.confirmPasswordInput.addValue('54321');
    //     SignupPage.signupBtn.click();
    //     Expect an error warning 
    //     browser.pause(2000);
    // });

    // Skip setting Pin
    // it('Should skip Two-Step Authentication', () => {
    //     SignupPage.passwordInput.addValue('12345');
    //     SignupPage.confirmPasswordInput.addValue('12345');
    //     SignupPage.signupBtn.click();
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/set/pin')
    //     SetPinPage.skip.click();// Problem occuring in this line
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/student/dashboard');
    // });

    //  When entering same Pin in Pin and Confirm Pin field
    // it('Pin should get created and Login With Pin page should get displayed', () => {
    //     SignupPage.passwordInput.addValue('12345');
    //     SignupPage.confirmPasswordInput.addValue('12345');
    //     SignupPage.signupBtn.click();
    //     SetPinPage.pinInput.addValue('1234');
    //     SetPinPage.confirmPinInput.addValue('1234');
    //     SetPinPage.enterPinBtn.click();
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/sign/pin');
    // });

    //  When entering different Pin in Pin and Confirm Pin field
    // it('Pin should not get created and should throw an error message', () => {
    //     SignupPage.passwordInput.addValue('12345');
    //     SignupPage.confirmPasswordInput.addValue('12345');
    //     SignupPage.signupBtn.click();
    //     SetPinPage.pinInput.addValue('1234');
    //     SetPinPage.confirmPinInput.addValue('4321');
    //     SetPinPage.enterPinBtn.click();
    //     expect(SetPinPage.errorMessageDifferentPin).toHaveText('pin and confirm pin should be same.');
    //     browser.pause(2000);
    // });

    //  Signup>Set Pin>Login With valid Pin
    // it('Student Dashboard should get displayed while entering valid pin and clicking on VERIFY PIN button', () => {
    //     SignupPage.passwordInput.addValue('12345');
    //     SignupPage.confirmPasswordInput.addValue('12345');
    //     SignupPage.signupBtn.click();
    //     SetPinPage.pinInput.addValue('1234');
    //     SetPinPage.confirmPinInput.addValue('1234');
    //     SetPinPage.enterPinBtn.click();
    //     browser.pause(2000);
    //     LoginWithPinPage.pinInput.addValue('1234');
    //     LoginWithPinPage.verifyPinBtn.click();
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/student/dashboard');
    // });
    
    //  Should throw error message when Login>Set Pin>Login With invalid Pin
    // it('Should throw error message while entering invalid pin and clicking on VERIFY PIN button', () => {
    //     SignupPage.passwordInput.addValue('12345');
    //     SignupPage.confirmPasswordInput.addValue('12345');
    //     SignupPage.signupBtn.click();
    //     SetPinPage.pinInput.addValue('1234');
    //     SetPinPage.confirmPinInput.addValue('1234');
    //     SetPinPage.enterPinBtn.click();
    //     browser.pause(2000);
    //     LoginWithPinPage.pinInput.addValue('9211');
    //     LoginWithPinPage.verifyPinBtn.click();
    //     expect(LoginWithPinPage.errorMessageLoginWithPin).toHaveText('Wrong Pin.');
    // });

    // Should get Sign Out Signup>Set Pin>Skip>Student Dashboard>Login Page
    // it('Should skip Two-Step Authentication and should display Student Dashboard and after Sign Out should navigate to Login Page', () => {
    //     SignupPage.passwordInput.addValue('12345');
    //     SignupPage.confirmPasswordInput.addValue('12345');
    //     SignupPage.signupBtn.click();
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/set/pin')
    //     SetPinPage.skip.click();// Problem occuring in this line
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/student/dashboard');
    //     StudentDashboardPage.signOutBtn.click();
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/');
    //     browser.pause(2000);
    // });

    // Student Should get Sign Out Login>Set Pin>Login With Pin>Student Dashboard
    // it('Student Should get Sign Out Login>Set Pin>Login With Pin>Student Dashboard and Login page should get displayed', () => {
    //     SignupPage.passwordInput.addValue('12345');
    //     SignupPage.confirmPasswordInput.addValue('12345');
    //     SignupPage.signupBtn.click();
    //     SetPinPage.pinInput.addValue('1234');
    //     SetPinPage.confirmPinInput.addValue('1234');
    //     SetPinPage.enterPinBtn.click();
    //     browser.pause(2000);
    //     LoginWithPinPage.pinInput.addValue('1234');
    //     LoginWithPinPage.verifyPinBtn.click();
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/student/dashboard');
    //     StudentDashboardPage.signOutBtn.click();
    //     expect(browser).toHaveUrl('http://cti-techoon.azurewebsites.net/');
    // });

    // ------------- WORKING FINE TILL HERE -------------
    
});