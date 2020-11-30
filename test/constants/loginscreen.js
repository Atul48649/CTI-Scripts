const {TITLE, BASE_URL} = require('./general');
const {LOGIN} = require('./route');
// import { BASE_URL, LOGIN } from "./general";

const errorMessages = {
    login_text_password: "You have entered incorrect password.",
    login_text_username: "Wrong login id format, either it should be a valid phone number or an email Id."

}

exports.loginScreen = {
    username : "harryerbacher@gmail.com",
    password : "12345",
    wrongUsername : "jacobrams",
    wrongPassword : "111111111",
    title : "CTI",
    errorTextUsername : errorMessages.login_text_username,
    errorTextPassword : errorMessages.login_text_password,
    loginUrl : BASE_URL+LOGIN,
    // resetting password url to be added later
    resettingPasswordUrl : "",
}