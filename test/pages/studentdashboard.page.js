const Page = require('./page');
class StudentDashboard extends Page{
    
    get signOutBtn(){
        return $('.halfBtn');
    }
}

module.exports = new StudentDashboard();