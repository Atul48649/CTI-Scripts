const LoginWithPinPage = require('../pages/loginwithpin.page');

describe('Login With Pin Page', () => {
    
    // TODO : Defining path to the Login With Pin screen
    before(() => {
        LoginWithPinPage.open();
    });

    // Should verify the title
    it('Should verify the title', () => {
        expect(browser).toHaveTitle('CTI');
    });

    // Logo of CTI should be present and visible
    it('Logo should be displayed', () => {
        expect(LoginWithPinPage.ctiLogo).toBeDisplayed();
    });

    // Should display "Login With Pin" text on the Login With Pin Screen
    it('Should display Login With Pin text on the screen', () => {
        expect(LoginWithPinPage.loginWithPinText).toBeDisplayed();
    });

    // By default VERIFY PIN button should be disabled
    it('Verify Pin button should be disabled', () => {
        LoginWithPinPage.verifyPinBtn.waitForClickable({ reverse: true });
    });

});