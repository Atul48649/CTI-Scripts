
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

const {verifyPinScreen} = require('../constants/verifypinscreen');
const {studentDashboardScreen} = require('../constants/studentdashboardscreen')
 
const VerifyPinPage = require('../pages/verifypin.page');

const VerifyPin = {
    itVerifyTitleInVerifyPinPage :  () => {
        it('Should verify the title', () => {
            expect(browser).toHaveTitle(verifyPinScreen.title);
        });
    },
    itCtiLogoShouldBeDisplayedInVerifyPinPage :  () => {
        it('Logo should be displayed', () => {
            expect(VerifyPinPage.ctiLogo).toBeVisible();
        });
    },
    itDisplayVerifyPinTextInVerifyPinPage :  () => {
        it('Should display Set Pin text on the screen', () => {
            expect(VerifyPinPage.verifyPinText).toBeDisplayed();
        });
    },
    itVerifybtnDisabled : () => {
        it('Verify Pin button should be disabled', () => {
            VerifyPinPage.verifyPinBtn.waitForClickable({ reverse: true });
        });
    },
    itPinGetVisibleInVerifyPinPage :  () => {
        it('Entered Pin should get visible', () => {
            expect(VerifyPinPage.pinInput).toHaveAttribute('type', 'password');
            VerifyPinPage.pinInput.addValue(verifyPinScreen.wrongPin);
            VerifyPinPage.pinEyeIcon.click();
            expect(VerifyPinPage.pinInput).toHaveAttribute('type', 'text');
            browser.pause(2000)
        });
    },
    itEnterValidPinWhileVerifyPin :  () => {
        it('Student Dashboard should get displayed while entering valid Pin and clicking on VERIFY PIN button', () => {
            expect(browser).toHaveUrl(verifyPinScreen.verifyPinUrl);
            VerifyPinPage.pinInput.addValue(verifyPinScreen.pin);
            VerifyPinPage.verifyPinBtn.click();
            expect(browser).toHaveUrl(studentDashboardScreen.studentDashboardUrl);
        });
    },
    itEnterInvalidPinWhileVerifyPin :  () => {
        it('Should throw error message while entering invalid Pin and clicking on VERIFY PIN button', () => {
            VerifyPinPage.pinInput.addValue(verifyPinScreen.wrongPin);
            VerifyPinPage.verifyPinBtn.click();
            expect(VerifyPinPage.errorMessageVerifyPin).toHaveText(verifyPinScreen.errorTextPin);
        });
    },
}

module.exports = VerifyPin;