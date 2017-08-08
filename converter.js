/**
 * Created by David Strootman on 26-7-2017.
 */
 
function toRgb(hex) {
	var result = toHexadecimal(parseInt(decimal / 16));
	var remainder = toHexadecimal(decimal % 16);
	
	function toHexadecimal(decimal) {
		var hexadecimal = '';
		switch(decimal) {
			case 0:
				hexadecimal = '0';
				break;
			case 1:
				hexadecimal = '1';
				break;
			case 2:
				hexadecimal = '2';
				break;
			case 3:
				hexadecimal = '3';
				break;
			case 4:
				hexadecimal = '4';
				break;
			case 5:
				hexadecimal = '5';
				break;
			case 6:
				hexadecimal = '6';
				break;
			case 7: 
				hexadecimal = '7';
				break;
			case 8:
				hexadecimal = '8';
				break;
			case 9:
				hexadecimal = '9';
				break;
			case 10:
				hexadecimal = 'A';
				break;
			case 11:
				hexadecimal = 'B';
				break;
			case 12:
				hexadecimal = 'C';
				break;
			case 13:
				hexadecimal = 'D';
				break;
			case 14:
				hexadecimal = 'E';
				break;
			case 15:
				hexadecimal = 'F';
				break;
		}
		return hexadecimal;
	}
	
}