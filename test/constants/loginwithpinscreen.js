const{
    BASE_URL
} = require('./general');

const{
    LOGINWITHPIN
} = require('./route');


exports.loginWithPinScreen = {
    pin : "123",
    wrongPin : "321",
    errorTextPin : "Wrong Pin.",
    title : "CTI App",
    loginWithPinUrl : `${BASE_URL}${LOGINWITHPIN}`,
}