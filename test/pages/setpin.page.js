const Page = require('./page');

class SetPinPage extends Page{
    
    open(){
        super.open('http://cti-techoon.azurewebsites.net/set/pin');
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

module.exports = new SetPinPage();