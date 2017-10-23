# HEXDECconverter
javascript functions for Hexadecimal to Decimal conversion and vice versa.

#### toHexadecimal(int,'datatype')
parameters: integer for conversion, datatype to be returned: 'arr' or 'str'.
returns hexadecimal as an array of strings if data type = 'arr'.
returns hexadecimal as a string if data type = 'str'

##### Example:

toHexadecimal(1000,'arr')

~["3","E","8"]

toHexadecimal(1000,'str')

~"3E8"

#### toDecimal(str)
Parameters are: string for conversion.
returns decimal as integer.

##### Example:

toDecimal('19AF')

~6575
