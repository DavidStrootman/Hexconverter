/**
 * Created by David on 8-9-2017.
 */

function toDecimal(Input) {
    "use strict";
    var hexaDecimal = Input;
    var decimal = [];
    var pw = decimal.length;

    function convertDigit(Hexadecimal) {
        var decimalValue = "";
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

    function add(a, b) {
        return a + b;
    }

    for  (var i = 0, len = hexaDecimal.length; i < len; i++) {
        decimal.push(parseInt(convertDigit(hexaDecimal[i])));
    }
    for (i = 0, len = decimal.length; i < len; i++) {
        decimal[i] = decimal[i] * Math.pow(16,pw - 1);
        pw--;
    }
    parseInt(decimal.toString(""));

    decimal = decimal.reduce(add, 0);
    return decimal;
}