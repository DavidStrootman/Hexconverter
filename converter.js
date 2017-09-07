/**
 * Created by David Strootman on 26-7-2017.
 */

// function toRgb(hex) {
// 	var result = toHexadecimal(parseInt(decimal / 16));
// 	var remainder = toHexadecimal(decimal % 16);
//
// 	function toHexadecimal(decimal) {
// 		var hexValue = '';
// 		switch(decimal) {
// 			case 0:
// 				hexValue = '0';
// 				break;
// 			case 1:
// 				hexValue = '1';
// 				break;
// 			case 2:
// 				hexValue = '2';
// 				break;
// 			case 3:
// 				hexValue = '3';
// 				break;
// 			case 4:
// 				hexValue = '4';
// 				break;
// 			case 5:
// 				hexValue = '5';
// 				break;
// 			case 6:
// 				hexValue = '6';
// 				break;
// 			case 7:
// 				hexValue = '7';
// 				break;
// 			case 8:
// 				hexValue = '8';
// 				break;
// 			case 9:
// 				hexValue = '9';
// 				break;
// 			case 10:
// 				hexValue = 'A';
// 				break;
// 			case 11:
// 				hexValue = 'B';
// 				break;
// 			case 12:
// 				hexValue = 'C';
// 				break;
// 			case 13:
// 				hexValue = 'D';
// 				break;
// 			case 14:
// 				hexValue = 'E';
// 				break;
// 			case 15:
// 				hexValue = 'F';
// 				break;
// 		}
// 		return hexValue;
// 	}
// 	function convert(decimal) {
// 		foreach
// 	}
// }

Math.trunc = Math.trunc || function(x) {
        return x - x%1;
    };

function toHexadecimal(input) {
    var Hexadecimal = [];
    var remainder = 0;
    var calculations = 0;
    while (input >= 16) {
        // if modulo return is smaller than 0, multiply by 16.
        var decimal = input % 16;
        Hexadecimal.push(convertValue(decimal));
        input = Math.trunc(input / 16);
        console.log("result: " + input +" " + "remainder: " + decimal);
        calculations += 1;
    }
    console.log('amount of calculations:' + calculations);
    function convertValue(decimal) {
        var hexValue = '';
        switch (decimal) {
            case 0:
                hexValue = '0';
                break;
            case 1:
                hexValue = '1';
                break;
            case 2:
                hexValue = '2';
                break;
            case 3:
                hexValue = '3';
                break;
            case 4:
                hexValue = '4';
                break;
            case 5:
                hexValue = '5';
                break;
            case 6:
                hexValue = '6';
                break;
            case 7:
                hexValue = '7';
                break;
            case 8:
                hexValue = '8';
                break;
            case 9:
                hexValue = '9';
                break;
            case 10:
                hexValue = 'A';
                break;
            case 11:
                hexValue = 'B';
                break;
            case 12:
                hexValue = 'C';
                break;
            case 13:
                hexValue = 'D';
                break;
            case 14:
                hexValue = 'E';
                break;
            case 15:
                hexValue = 'F';
                break;
        }
        return hexValue;
    }
    console.log(Hexadecimal);
}