const Page = require('./page');

class SignupPage extends Page{
    
    open(){
        super.open('http://cti-techoon.azurewebsites.net/signup/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsaW5rX3R5cGUiOiJzaWdudXBMaW5rIiwiY29udGFjdF9pZCI6IjI0IiwiY29udGFjdF90eXBlIjoiUyIsImlhdCI6MTYwNTUyNzU1OH0.yhwP75nG-Ha8R4aTQZsVEHqnao8l0Pw7t1r_urJu4P4');
    }

    get passwordInput(){
        return $('#password');
    }

    // get passwordEyeIcon(){
    //     return // TO BE WRITTEN
    // }

    get confirmPasswordInput(){
        return $('#confirmPassword');
    }

    // get confirmPasswordEyeIcon(){
    //     return // TO BE WRITTEN
    // }

    get signupBtn(){
        return $('.login-btn');
    }

    get signupText(){
        return $('h3*=Sign');
    }

    get welcomeText(){
        return $('h5*=Welcome');
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