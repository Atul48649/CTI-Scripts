const{
    BASE_URL,
} = require('./general');

const{
    LOGIN,
} = require('./route');

exports.loginScreen = {
    username : "joewilton3@gmail.com",
    password : "12345",
    wrongUsername : "jacobrams@",
    wrongPassword : "111111111",
    usernamePinCreatedEarlier : "joewilton3@gmail.com",
    usernamePinNotCreatedEarlier : "harryerbacher@gmail.com",
    title : "CTI",
    errorTextUsername : "Wrong login id format, either it should be a valid phone number or an email Id.",
    errorTextPassword : "You have entered incorrect password.",
    loginUrl : `${BASE_URL}${LOGIN}`,
    // resetting password url to be added later
    resettingPasswordUrl : "",
}