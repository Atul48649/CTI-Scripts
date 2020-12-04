const Page = require('./page');

class LoginPage extends Page{
    open(){
        super.open('http://cti-techoon.azurewebsites.net/');
    }
    get ctiLogo(){
        return $("//img[@alt='CTI logo']");
    }
    get emailOrPhoneInput(){
        return $('#email');
    }
    get crossIcon(){
        return $('.input-group').$('.fa-times-circle');
    }
    get passwordInput(){
        return $('#password');
    }
    get eyeIcon(){
        return $('//*[@id="root"]/div/div/div/div[2]/form/div[2]/span[2]/i');
        //return $('.input-group').$('//i[@aria-hidden="true"]');//Running fine but unable to see the exection here
                                                                 // also pause command is not working here
    }
    get passwordInputTypeText(){
        return $("//input[@type='text']");
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
    get loginText(){
        return $('h3=Login');
    }
}

module.exports = new LoginPage();