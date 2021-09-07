const Page = require('./page');
class StudentDashboardPage extends Page{
    open(){
        super.open('http://localhost:3000/student/dashboard');
    }
    get ctiLogo(){
        return $("img.styles_logoImg__3l2qk");
    }
    get helloStudentText(){
        return $('h4*=Hello');
    }
    get alertIcon(){
        return $("img[alt='alert']");
    }
    get alertTextMessage(){
        return $('p*=You have');
    }
    get nextWorkshopSchedule(){
        return $('p*=Your next workshop is scheduled on');
    }
    get iWillBeThereBtn(){
        return $("button=I'll be there");
    }
    get conatctUsBtn(){
        return $("button=Contact us");
    }
    get worklogsBtn(){
        return $('p=Worklogs');
    }
    get courseLoginBtn(){
        return $('p=Course Login');
    }
    get reportsBtn(){
        return $('p=Reports');
    }
    get settingsBtn(){
        return $('p=Settings');
    }
    get contactsAndSupervisiorsBtn(){
        return $('p=Contacts and Supervisors');
    }
    get activitiesBtn(){
        return $('p=Activities');
    }
    get reachedKnowledgeLevelText(){
        return $('p=You have reached knowledge level ');
    }
    get trophyIcon(){
        return $("img[src*='trophyImg']");
    }
    get signoutBtn(){
        return $("button=Signout");
    }
    get timeCompleted(){
        return $('p=Time Completed');
    }
    get unitsCompleted(){
        return $('p=Units Completed');
    }
}

module.exports = new StudentDashboardPage();