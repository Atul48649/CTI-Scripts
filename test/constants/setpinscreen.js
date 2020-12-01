const{
    BASE_URL
} = require('./general');

const{
    SETPIN
} = require('./route');


exports.setPinScreen = {
    pin : "1234",
    confirmPin : "1234",
    mismatchedConfirmPin : "4321",
    errorTextDifferentPin : "pin and confirm pin should be same.",
    title : "CTI",
    setPinUrl : `${BASE_URL}${SETPIN}`,
}