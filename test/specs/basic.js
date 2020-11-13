describe('Verify pin page should get opened', () => {
    browser.url('http://cti-techoon.azurewebsites.net/sign/pin');
    const pin = $('#pin');
    const verifyPin = $('.login-btn');
    expect(browser).toHaveText('Wrong pin.');
    browser.pause(5000);
});