const Page = require('./page');

class SignupPage extends Page{
    
    open(){
        super.open('http://cti-techoon.azurewebsites.net/signup/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsaW5rX3R5cGUiOiJzaWdudXBMaW5rIiwiY29udGFjdF9pZCI6IjU2IiwiY29udGFjdF90eXBlIjoiUyIsImlhdCI6MTYwNTg3NDczOX0.ztRhtGsoI0ZNnhlSZ3hcbgGZ0j1ZR9v3m7-t9gkTeIo');
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