/* Write a typescript program which contains one arrow function named as ChkArmstrong. That
function accepts one numbers and check whether number is Armstrong number or not.

Input: 153
Output: It is Armstrong number

*/

function ChkArmstrong(no : number) : void
{
    var Temp :number = 0;
    var Cnt :number = 0;
    var Mult  : number = 1;
    var DigCnt : number = 0;
    var Digit : number = 0;
    var Sum : number = 0;
   
    while(no != 0)
    {
        DigCnt++;
        no = no / 10;
    }

    no = Temp;

    while(no != 0)
    {
        Mult = 1;
        Digit = no % 10;

        for (Cnt = 1; Cnt <= DigCnt ; Cnt++)
        {
            Mult = Mult * Digit;
        }

        Sum = Sum + Mult;
        no = no / 10;
    }
    
    if (Sum == Temp)
    {
        console.log("number is armstrong")
    }
    else
    {
        console.log("number is not armstrong")
    }

}    

ChkArmstrong(153)



