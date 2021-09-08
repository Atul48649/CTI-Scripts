const StudentDashboardPage = require('../pages/studentdashboard.page')

const StudentDashboard = {
    itCtiLogoShouldBeDisplayedInStudentDashboardPage : () => {
        it('CTI Logo should be displayed in Student Dashboard page', () => {
            expect(StudentDashboardPage.ctiLogo).toBeVisible()
        });
    },
    itAlertIconAndItsTextShouldBeDisplayed : () => {
        it('Alert icon and you have overdue activities text should be displayed', () => {
            
        });
    }
}

module.exports = StudentDashboard;