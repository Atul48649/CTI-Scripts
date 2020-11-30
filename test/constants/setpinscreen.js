const {
    test
} = require('./general');
const {
    test1
} = require('./route')

// import { BASE_URL, LOGIN } from "./general";
const { BASE_URL } = test;
const { SETPIN } = test1;


exports.setPinScreen = {
    pin : "1234",
    confirmPin : "1234",
    mismatchedConfirmPin : "4321",
    errorTextDifferentPin : "pin and confirm pin should be same.",
    title : "CTI",
    setPinUrl : BASE_URL.concat(SETPIN),
}