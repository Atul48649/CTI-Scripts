const SetPinPage = require('../pages/setpin.page');
const LoginPage = require('../pages/login.page');

describe('Set Pin page', () => {
    // Unable to test any test case here
   /*  
    // TODO : Defining path to the Set Pin screen
    beforeEach(() => {
        LoginPage.open();
        LoginPage.emailOrPhoneInput.addValue('harryerbacher@gmail.com');
        LoginPage.passwordInput.addValue('12345');
        LoginPage.loginBtn.click();
        // browser.pause(2000);
    });

    afterEach(() => {
        LoginPage.open();
        LoginPage.emailOrPhoneInput.addValue('harryerbacher@gmail.com');
        LoginPage.passwordInput.addValue('12345');
        LoginPage.loginBtn.click();
    });
    */

    // Should verify the title
    it('Should verify the title', () => {
        expect(browser).toHaveTitle('CTI');
    });

    // Logo of CTI should be present and visible
    it('Logo should be displayed', () => {
        expect(SetPinPage.ctiLogo).toBeVisible()
    });

    // Should display Set Pin text on the Set Pin Screen
    it('Should display Set Pin text on the screen', () => {
        expect(SetPinPage.setpinText).toBeDisplayed()
    });

    // Should display "2 step verification" text on the Set Pin Screen
    it('Should display Set Pin text on the screen', () => {
        expect(SetPinPage.twoStepVerificationText).toBeDisplayed()
    });

    // Should display "You can add 2 step verification to login into your account" text on the Set Pin Screen
    it('Should display Set Pin text on the screen', () => {
        expect(SetPinPage.paragraphText).toBeDisplayed()
    });

    // By default ENTER PIN button should be disabled
    it('Enter Pin button should be disabled', () => {
        SetPinPage.enterPinBtn.waitForClickable({ reverse: true });
    });

});