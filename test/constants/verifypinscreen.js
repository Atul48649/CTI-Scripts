const{
    BASE_URL
} = require('./general');

const{
    VERIFYPIN
} = require('./route');


exports.verifyPinScreen = {
    pin : "123",
    wrongPin : "321",
    errorTextPin : "Wrong Pin.",
    title : "CTI App",
    verifyPinUrl : `${BASE_URL}${VERIFYPIN}`,
}