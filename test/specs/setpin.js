const {setPinScreen} = require('../constants/setpinscreen')

const SetPinPage = require('../pages/setpin.page');

const SetPin = {
    itVerifyTitleInSetPinPage :  () => {
        it('Should verify the title', () => {
            expect(browser).toHaveTitle(setPinScreen.title);
        });
    },
    itCtiLogoShouldBeDisplayedInSetPinPage :  () => {
        it('Logo should be displayed', () => {
            expect(SetPinPage.ctiLogo).toBeDisplayed();
        });
    },
    itDisplaySetPinTextInSetPinPage :  () => {
        it('Should display Set Pin text on the screen', () => {
            expect(SetPinPage.setpinText).toBeDisplayed()
        });
    },
    itDisplay2StepVerificationTextInSetPinPage : () =>{
        it('Should display Set Pin text on the screen', () => {
            expect(SetPinPage.twoStepVerificationText).toBeDisplayed()
        });
    },
    itDisplay2StepVerificationParagraphTextInSetPinPage :  () => {
        it('Should display Set Pin text on the screen', () => {
            expect(SetPinPage.paragraphText).toBeDisplayed();
        });
    },
    itEnterPinbtnDisabled :  () => {
        it('Enter Pin button should be disabled', () => {
            SetPinPage.enterPinBtn.waitForClickable({ reverse: true });
        });
    },
    itPinAndConfirmPinGetVisible :  () => {
        it('Entered Pin should get visible', () => {
            // expect(browser).toHaveUrl(setPinScreen.setPinUrl); 
            expect(SetPinPage.pinInput).toHaveAttribute('type', 'password');
            SetPinPage.pinInput.addValue(loginScreen.password);
            SetPinPage.pinEyeIcon.click();
            expect(SetPinPage.pinInput).toHaveAttribute('type', 'text');
            expect(SetPinPage.confirmPinInput).toHaveAttribute('type', 'password');
            SetPinPage.confirmPinInput.addValue(loginScreen.password);
            SetPinPage.confirmPinEyeIcon.click();
            expect(SetPinPage.confirmPinInput).toHaveAttribute('type', 'text');
            browser.pause(2000);
        });
    }
}

module.exports = SetPin;