const Page = require('./page');

class LoginPage extends Page{

    open(){
        super.open('http://cti-techoon.azurewebsites.net/');
    }

    get emailOrPhoneInput(){
        return $('#email');
    }

    get crossIcon(){
        return // TO BE WRITTEN
    }

    get passwordInput(){
        return $('#password');
    }

    get eyeIcon(){
        return // TO BE WRITTEN
    }

    get forgotPassword(){
        return $('*=Password?');
    }

    get checkboxInput(){
        return $('#remember_me');
    }

    get loginBtn(){
        return $('.login-btn');
    }

    get errorMsgEmailIdOrPhoneNumber(){
        return $('#emailHelp');
    }
    
    get errorMsgPassword(){
        return // TO BE WRITTEN
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

    get signOutBtn(){
        return $('.halfBtn');
    }
}

module.exports = new LoginPage();