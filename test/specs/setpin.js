const {setPinScreen} = require('../constants/setpinscreen');
const { studentDashboardScreen } = require('../constants/studentdashboardscreen');

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
            expect(SetPinPage.twoStepVerificationText).toBeDisplayed();
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
    },
    itEnterValidLoginCredentialsWhenPinIsNotCreatedEarlier :  () => {
        it('Student should get Login and Set Pin Page should get displayed', () => {
            LoginPage.emailOrPhoneInput.addValue(loginScreen.usernamePinNotCreatedEarlier);
            LoginPage.passwordInput.addValue(loginScreen.password);
            LoginPage.loginBtn.click();
            expect(browser).toHaveUrl(setPinScreen.setPinUrl);
        });
    },
    itEnterPin :  (pin) => {
        it('Should enter pin passed as an arguement', () => {
            SetPinPage.pinInput.addValue(pin);
        });
    },
    itEnterConfirmPin :  (confirmPin) => {
        it('Should enter confirm pin passed as an arguement', () => {
            SetPinPage.confirmPinInput.addValue(confirmPin);
        });
    },
    itClickEnterPinBtn :  () => {
        it('Should click Enter Pin button', () => {
            SetPinPage.enterPinBtn.click();
            expect(browser).toHaveUrl(studentDashboardScreen.studentDashboardUrl);
        });
    },
    itSkipSettingPin :  () => {
        it('While Login Skip setting Pin', () => {
            SetPinPage.skip.click();
            expect(browser).toHaveUrl(studentDashboardScreen.studentDashboardUrl);
        });
    },
    // TODO: 2 methods below might needs to be deleted
    itEnterSamePinInPinAndConfirmPin :  () => {
        it('Creating Pin', () => {
            SetPinPage.pinInput.addValue(setPinScreen.pin);
            SetPinPage.confirmPinInput.addValue(setPinScreen.confirmPin);
            // SetPinPage.enterPinBtn.click();
            // expect(browser).toHaveUrl(verifyPinScreen.verifyPinUrl);
        });
    },
    itEnterDifferentPinInPinAndConfirmPin :  () => {
        it('Should throw error message when entered pin in Pin and Confirm Pin does not matches', () => {
            SetPinPage.pinInput.addValue(setPinScreen.pin);
            SetPinPage.confirmPinInput.addValue(setPinScreen.mismatchedConfirmPin);
            SetPinPage.enterPinBtn.click();
            expect(SetPinPage.errorMessageDifferentPin).toHaveText(setPinScreen.errorTextDifferentPin);
        });
    },
}

module.exports = SetPin;