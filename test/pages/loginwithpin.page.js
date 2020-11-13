const Page = require('./page');
class LoginWithPinPage extends Page {

    get loginWithPinText(){
        return $('h3=Login with Pin');
    }

    get pinInput(){
        return $('#pin');
    }

    get verifyPinBtn(){
        return $('.login-btn');
    }

    get errorMessageLoginWithPin(){
        return $('#pinHelp');
    }

    // get signOutBtn(){
    //     return $('.halfBtn');
    // }
}

module.exports = new LoginWithPinPage();