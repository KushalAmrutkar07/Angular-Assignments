/*Write a typescript program which contains one function named as Fibonacci. That function accept
one number from user and print Fibonacci series till that number. 
Input: 21 
Output:1 1 2 3 5 8 13 21
*/

function Fibonacci(No : number) : void
{
    var Num : number = 0;
    var No1 : number = 0;
    var No2 : number = 1;
    var acci : number = 0;

    for (acci = 0; acci < No; acci++)
    {
        console.log(No1)
        Num = No1 + No2;
        No1 = No2;
        No2 = Num;
        if(No1 > No)
        {
            break;
        }
    }

}

Fibonacci(21)