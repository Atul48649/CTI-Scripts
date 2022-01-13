
/*
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

    // Pin should gets visible
    it('Pin should gets visible', () => {
        LoginWithPinPage.pinInput.addValue('1234');
        LoginWithPinPage.pinEyeIcon.click();
        expect(LoginWithPinPage.pinInput.getValue()).isDisplayed();
    });

    // By default VERIFY PIN button should be disabled
    it('Verify Pin button should be disabled', () => {
        LoginWithPinPage.verifyPinBtn.waitForClickable({ reverse: true });
    });

});
*/

const {loginWithPinScreen} = require('../constants/loginwithpinscreen');

const LoginWithPinPage = require('../pages/loginwithpin.page');

const VerifyPin = {
    itVerifyTitleInLoginWithPinPage :  () => {
        it('Should verify the title', () => {
            expect(browser).toHaveTitle(loginWithPinScreen.title);
        });
    },
    itCtiLogoShouldBeDisplayedInLoginWithPinPage :  () => {
        it('Logo should be displayed', () => {
            expect(LoginWithPinPage.ctiLogo).toBeVisible();
        });
    },
    itDisplayLoginWithPinTextInLoginWithPinPage :  () => {
        it('Should display Set Pin text on the screen', () => {
            expect(LoginWithPinPage.loginWithPinText).toBeDisplayed();
        });
    },
    itVerifybtnDisabled : () => {
        it('Verify Pin button should be disabled', () => {
            LoginWithPinPage.verifyPinBtn.waitForClickable({ reverse: true });
        });
    },
    itPinGetVisibleInLoginWithPinPage :  () => {
        it('Entered Pin should get visible', () => {
            expect(LoginWithPinPage.pinInput).toHaveAttribute('type', 'password');
            LoginWithPinPage.pinInput.addValue(loginScreen.password);
            LoginWithPinPage.pinEyeIcon.click();
            expect(LoginWithPinPage.pinInput).toHaveAttribute('type', 'text');
        });
    }
}

module.exports = VerifyPin;