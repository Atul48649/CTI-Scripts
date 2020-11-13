const Page = require('./page');

class SignupPage extends Page{
    
    open(){
        super.open('http://cti-techoon.azurewebsites.net/signup/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsaW5rX3R5cGUiOiJzaWdudXBMaW5rIiwiY29udGFjdF9pZCI6IjE1IiwiY29udGFjdF90eXBlIjoiUyIsImlhdCI6MTYwNTI2NDI2NH0.u3BEw1F4FglAOZiTR2GG6M3_3u-IsAcxMkC_fPWz8ao');
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

    // get setpinText(){
    //     return $('h3=Set Pin');
    // }

    // get twoStepVerificationText(){
    //     return $('h5=2 step verification');
    // }

    // get paragraphText(){
    //     return $('p=You can add 2 step verification to login into your account');
    // }

    // get pinInput(){
    //     return $('#pin');
    // }

    // get pinEyeIcon(){
    //     return // TO BE WRITTEN
    // }

    // get confirmPinInput(){
    //     return $('#confirmPin');
    // }

    // get confirmPinEyeIcon(){
    //     return // TO BE WRITTEN
    // }

    // get enterPinBtn(){
    //     return $('.login-btn');
    // }

    // get skip(){
    //     return $('=Skip');//Selector to be checked
    // }

}

module.exports = new SignupPage();