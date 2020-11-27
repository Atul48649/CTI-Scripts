// TODO : TO BE ADDED
exports.selectorsConfig = {
    eyeIcon: "",
    eyeSlashIcon: "",
    ctiLogo: "\"//img[@alt='CTI logo']\""
}

exports.loginScreen = {
    username : "jacobrams2001@gmail.com",
    password : "12345",
    wrongUsername : "jacobrams",
    wrongPassword : "111111111",
    title : "CTI",
    errorTextUsername : "Wrong login id format, either it should be a valid phone number or an email Id.",
    errorTextPassword : "You have entered incorrect password.",
    loginUrl : "http://cti-techoon.azurewebsites.net/",
    // resetting password url to be added later
    resettingPasswordUrl : "",
}

exports.setPinScreen = {
    pin : "1234",
    confirmPin : "1234",
    mismatchedConfirmPin : "4321",
    errorTextDifferentPin : "pin and confirm pin should be same.",
    setPinUrl : "http://cti-techoon.azurewebsites.net/set/pin",
}

exports.loginWithPinScreen = {
    pin : "1234",
    wrongPin : "4321",
    errorTextPin : "Wrong Pin.",
    loginWithPinUrl : "http://cti-techoon.azurewebsites.net/sign/pin",
}

exports.studentDashboardScreen = {
    studentDashboardUrl : "http://cti-techoon.azurewebsites.net/student/dashboard",
}