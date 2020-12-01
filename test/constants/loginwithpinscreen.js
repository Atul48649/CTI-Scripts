const{
    BASE_URL
} = require('./general');

const{
    LOGINWITHPIN
} = require('./route');


exports.loginWithPinScreen = {
    pin : "1234",
    wrongPin : "4321",
    errorTextPin : "Wrong Pin.",
    title : "CTI",
    loginWithPinUrl : `${BASE_URL}${LOGINWITHPIN}`,
}