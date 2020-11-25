const Page = require('./page');

class SignupPage extends Page{
    
    open(){
        super.open('http://cti-techoon.azurewebsites.net/signup/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsaW5rX3R5cGUiOiJzaWdudXBMaW5rIiwiY29udGFjdF9pZCI6IjU4IiwiY29udGFjdF90eXBlIjoiUyIsImlhdCI6MTYwNjI5NTg0MH0.kzRp3XwztP5wTlf9Mq_szmFQFPK7mNM6fn9Q7AXqJw0');
    }

    get ctiLogo(){
        return $("//img[@alt='CTI logo']");
    }

    get passwordInput(){
        return $('#password');
    }

    get passwordEyeIcon(){
        return $("//*[@id='root']/div/div/div/div[2]/form/div[1]/span[2]/i");
    }

    get confirmPasswordInput(){
        return $('#confirmPassword');
    }

    get confirmPasswordEyeIcon(){
        return $("//*[@id='root']/div/div/div/div[2]/form/div[2]/span[2]/i");
    }

    get signupBtn(){
        return $('.login-btn');
    }

    get signupText(){
        return $('h3*=Sign');
    }

    get welcomeText(){
        return $('h5*=Welcome');
    }
    
}

module.exports = new SignupPage();