const SetPinPage = require('../pages/setpin.page');

describe('Set Pin page', () => {
    it('Should open the url and verify the title', () => {
        SetPinPage.open();
        expect(browser).toHaveTitle('CTI');
    });

    // it('Pin should get generated and should navigate to ', () => {
    //     SetPinPage.pinInput.addValue('1234');
    //     SetPinPage.confirmPinInput.addValue('1234');
    //     SetPinPage.enterPinBtn.click();
    //     browser.pause(15000);
    // });

    // it('Pin should not get generated', () => {
    //     SetPinPage.pinInput.addValue('1234');
    //     SetPinPage.confirmPinInput.addValue('5678');
    //     SetPinPage.enterPinBtn.click();
    //     browser.pause(15000);
    // });

    it('Two step verification should get skipped', () => {
        SetPinPage.skip.click();
        browser.pause(10000);
    });
});