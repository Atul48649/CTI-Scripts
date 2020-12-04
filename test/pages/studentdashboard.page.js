const Page = require('./page');
class StudentDashboardPage extends Page{
    get signOutBtn(){
        return $('.halfBtn');
    }
}

module.exports = new StudentDashboardPage();