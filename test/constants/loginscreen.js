const {
    BASE_URL,
    TITLE
} = require('./general');

const {
    LOGIN
} = require('./route')

exports.loginScreen = {
    username : "jacobrams2001@gmail.com",
    password : "12345",
    wrongUsername : "jacobrams",
    wrongPassword : "111111111",
    title : TITLE,
    errorTextUsername : errorMessages.login_text_username,
    errorTextPassword : errorMessages.login_text_password,
    loginUrl : `${BASE_URL}${LOGIN}`,
    // resetting password url to be added later
    resettingPasswordUrl : "",
}


const errorMessages = {
    login_text_password: "You have entered incorrect password.",
    login_text_username: "Wrong login id format, either it should be a valid phone number or an email Id."

}