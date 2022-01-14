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
    },
    itStudentGetSignOut :  () => {
        it('Student Should get Signed Out', () => {
            StudentDashboardPage.signOutBtn.click();
            expect(browser).toHaveUrl(general.AFTERSIGNOUTNAVIGATEDURL);
        });
    }
}

module.exports = StudentDashboard;