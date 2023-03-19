/*  Write a typescript program which contains one function named as Area. That function should
calculate area of circle. Accept value of radius from user and return its area. Default value of PI should be 3.14 if it is not provided by the caller.

Input: 5
Output: Area of circle is 78.5
*/

function area(Radius : number , PI : number = 3.14 ) : number
{
  var Area = PI * Radius **2
  return Area; 
}

var Ret : number = 0;
Ret = area (5);
console.log("Area of Circle is "+Ret)

  