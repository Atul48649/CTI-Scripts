const Page = require('./page');

class LoginWithPinPage extends Page {

    get pinInput(){
        return $('#pin');
    }

    get verifyPinBtn(){
        return $('.login-btn');
    }

    get errorMessageLoginWithPin(){
        return $('#pinHelp');
    }

    get loginWithPinText(){
        return $('h3=Login with Pin');
    }
}

module.exports = new LoginWithPinPage();