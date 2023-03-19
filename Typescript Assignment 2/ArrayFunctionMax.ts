/* Write a typescript program which contains one function named as Maximum. That function accepts
array of numbers and returns the largest number from array. 

Input: 23 89 6 29 56 45 77 32
Output: Maximum number is 89
*/

function Maximum(Arr : number[]) : number
{
    var Max : number = 0;
    var Counter : number = 0;

    for (Counter = 0; Counter < Arr.length; Counter++)
    {
        if(Arr[Counter] > Max)
        Max = Arr[Counter];
    }
    return Max;

}

var Week : number[] = [23,89,6,29,56,45,77,32]

var Ret : number = 0;

Ret = Maximum(Week)

console.log("Maximum  number is : "+Ret)