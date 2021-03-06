/**
 * Created by David on 8-9-2017.
 */

/**
 * returns the decimal equivalent of the hexadecimal input
 * @param {string} Input
 * @returns {int} decimal
 */
function toDecimal(Input) {
    "use strict";
    const hexaDecimal = Input;
    let decimal = [];

    /**
     * Converts single Hexadecimal numbers to decimal equivalent
     * @param {string} Hexadecimal
     * @returns {string} decimalValue
     */
    function convertDigit(Hexadecimal) {
        let decimalValue = "";
        switch (Hexadecimal) {
            case "0":
                decimalValue = "0";
                break;
            case "1":
                decimalValue = "1";
                break;
            case "2":
                decimalValue = "2";
                break;
            case "3":
                decimalValue = "3";
                break;
            case "4":
                decimalValue = "4";
                break;
            case "5":
                decimalValue = "5";
                break;
            case "6":
                decimalValue = "6";
                break;
            case "7":
                decimalValue = "7";
                break;
            case "8":
                decimalValue = "8";
                break;
            case "9":
                decimalValue = "9";
                break;
            case "A":
                decimalValue = "10";
                break;
            case "B":
                decimalValue = "11";
                break;
            case "C":
                decimalValue = "12";
                break;
            case "D":
                decimalValue = "13";
                break;
            case "E":
                decimalValue = "14";
                break;
            case "F":
                decimalValue = "15";
                break;
        }
        return decimalValue;
    }

    /**
     * Adds b to a
     * @param {int} a
     * @param {int} b
     * @returns {int} a + b
     */
    function add(a, b) {
        return a + b;
    }

    for  (let i = 0, len = hexaDecimal.length; i < len; i++) {
        decimal.push(parseInt(convertDigit(hexaDecimal[i])));
    }
    let pw = decimal.length;

    for (let i = 0, len = decimal.length; i < len; i++) {
        decimal[i] = decimal[i] * Math.pow(16,pw - 1);
        pw--;
    }

    parseInt(decimal.toString(""));

    decimal = decimal.reduce(add, 0);
    return decimal;
}
