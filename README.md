# HEXDECconverter
javascript functions for Hexadecimal to Decimal conversion and vice versa.

#### toHexadecimal(int,'datatype')
parameters are: integer for conversion, datatype 'arr' or 'str'.
returns hexadecimal as an array of strings if datatype = 'arr'.
returns hexadecimal as a string if datatype = 'str'

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
