const Page = require('./page');

class SetPinPage extends Page{
    
    open(){
        super.open('http://cti-techoon.azurewebsites.net/');
    }

    get ctiLogo(){
        return $("//img[@alt='CTI logo']");
    }

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
        return $("//*[@id='root']/div/div/div/div/div[2]/form/div[1]/span[2]/i");
    }

    get confirmPinInput(){
        return $('#confirmPin');
    }

    get confirmPinEyeIcon(){
        return $("//*[@id='root']/div/div/div/div/div[2]/form/div[2]/span[2]/i");
    }

    get enterPinBtn(){
        return $('.login-btn');
    }

    get skip(){
        return $("//u[contains(text(),'Skip')]");
    }

    get errorMessageDifferentPin(){
        return $('#confirmPasswordHelp');
    }

}

module.exports = new SetPinPage();