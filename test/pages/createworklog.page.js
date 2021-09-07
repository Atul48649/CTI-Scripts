const Page = require('./page');
class CreateWorklogPage extends Page{
    open(){
        // TODO:url needs to be added
        super.open('');
    }
    get backIcon(){
        return $('img..styles_leftImg__2I6RD');
    }
    get ctiLogo(){
        return $('src*=/static/media/logo.6fe1eebd');
    }
    get activitiesText(){
        return $('div=Activities');
    }
    get submittedWorklogsText(){
        return $('div=Submitted Worklogs');
    }
    get editIcon(){
        return $('');
    }
    get moveForwardIcon(){
        return $('');
    }
    get createNewWorklogBtn(){
        return $('button=Create New Work Log');
    }
}

module.exports = new CreateWorklogPage();