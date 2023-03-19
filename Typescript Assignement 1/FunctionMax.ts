/* Write a typescript program which contains one function named as Maximum , that function accepts three parameters and it should returns largest value from three input parameters
 Input : 23 89 6
 Output : Maximum number is 89
 */

function Maximum(No1 : number , No2 : number , No3 : number) : void
{
    if(No1 > No2 && No1 > No3)
    {
        console.log("Largest number is : "+No1)
    }
    else if(No2 > No1 && No2 > No3)
    {
        console.log("Largest number is : "+No2)
    }
    else
    {
        console.log("Largest numnber is : "+No3)
    }
} 

var A : number = 23
var B : number = 89
var C : number = 6

Maximum(A,B,C)