/*Write a typescript program which contains one function named as Summation. That function accepts array of numbers and returns the summation of each number from array.
Input: 23 6 7 4 5 7
Output: Addition is 52

*/

function Addition(Arr : number[]) : number
{
    var Sum : number = 0;
    var Counter : number = 0;

    for (Counter = 0; Counter < Arr.length; Counter++)
    {
        Sum = Sum + Arr[Counter];
    }
    return Sum;

}

var Week : number[] = [23,6,7,4,5,7]

var Ret : number = 0;

Ret = Addition(Week)

console.log("Addition is : "+Ret)