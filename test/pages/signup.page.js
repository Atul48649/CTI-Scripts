const Page = require('./page');

class SignupPage extends Page{
    
    open(){
        super.open('http://cti-techoon.azurewebsites.net/signup/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsaW5rX3R5cGUiOiJzaWdudXBMaW5rIiwiY29udGFjdF9pZCI6IjkiLCJjb250YWN0X3R5cGUiOiJTIiwiaWF0IjoxNjA1MjQ1NzI2fQ.KkWC1PudVFL0ftTaAciive2YAG0QkNXW5I3PMQyuy4c');
    }

    // Sign Up Page
    get passwordInput(){
        return $('#password');
    }

    get passwordEyeIcon(){
        return // TO BE WRITTEN
    }

    get confirmPasswordInput(){
        return $('#confirmPassword');
    }

    get confirmPasswordEyeIcon(){
        return // TO BE WRITTEN
    }

    get signupBtn(){
        return $('.login-btn');
    }

    get signupText(){
        return $('h3*=Sign');//Selector to be checked
    }

    get welcomeText(){
        return $('h5*=Welcome');//Selector to be checked
    }

    // Set Pin Page

    get setpinText(){
        return $('h3=Set Pin');
    }

    get twoStepVerificationText(){
        return $('h5=2 step verification');
    }

    get paragraphText(){
        return $('p=You can add 2 step verification to login into your account');
    }

    get pinInput(){
        return $('#pin');
    }

    get pinEyeIcon(){
        return // TO BE WRITTEN
    }

    get confirmPinInput(){
        return $('#confirmPin');
    }

    get confirmPinEyeIcon(){
        return // TO BE WRITTEN
    }

    get enterPinBtn(){
        return $('.login-btn');
    }

    get skip(){
        return $('=Skip');//Selector to be checked
    }

}

module.exports = new SignupPage();