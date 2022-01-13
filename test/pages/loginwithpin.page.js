const Page = require('./page');

class LoginWithPinPage extends Page {
    get pinInput(){
        return $('#pin');
    }
    get pinEyeIcon(){
        return $("//*[@id='root']/div/div/div/div/div/div[2]/form/div/span[2]/i");
    }
    get verifyPinBtn(){
        return $('.login-btn');
    }
    get ctiLogo(){
        return $("//img[@alt='CTI logo']");
    }
    get errorMessageLoginWithPin(){
        return $('#pinHelp');
    }
    get loginWithPinText(){
        return $('h3=Verify Pin');
        
    }
}

module.exports = new LoginWithPinPage();