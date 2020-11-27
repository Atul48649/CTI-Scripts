const {
    BASE_URL
} = require('./general');

const {
    LOGINWITHPIN
} = require('./general')


exports.loginWithPinScreen = {
    pin : "1234",
    wrongPin : "4321",
    errorTextPin : "Wrong Pin.",
    loginWithPinUrl : `${BASE_URL}${LOGINWITHPIN}`,
}