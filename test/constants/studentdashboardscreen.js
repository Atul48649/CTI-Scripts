const{
    BASE_URL
} = require('./general');

const{
    STUDENTDASHBOARD
} = require('./route');

exports.studentDashboardScreen = {
    title : "CTI",
    studentDashboardUrl : `${BASE_URL}${STUDENTDASHBOARD}`,
}