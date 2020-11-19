const Page = require('./page');

class LoginPage extends Page{

    open(){
        super.open('http://cti-techoon.azurewebsites.net/');
    }

    get emailOrPhoneInput(){
        return $('#email');
    }

    get crossIcon(){
        return $('//*[@id="root"]/div/div/div/div[2]/form/div[1]/span[2]/i');
    }

    get passwordInput(){
        return $('#password');
    }

    get eyeIcon(){
        return $('//*[@id="root"]/div/div/div/div[2]/form/div[2]/span[2]/i');
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

    // Login With Pin Page
    // get pinInput(){
    //     return $('#pin');
    // }

    // get verifyPinBtn(){
    //     return $('.login-btn');
    // }

    // get errorMessageLoginWithPin(){
    //     return $('#pinHelp');
    // }

    // get signOutBtn(){
    //     return $('.halfBtn');
    // }
}

module.exports = new LoginPage();