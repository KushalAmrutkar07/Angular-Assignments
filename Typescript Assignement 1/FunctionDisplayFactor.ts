/*Write a typescript program which contains one function named as DisplayFactors. That function
should accept one number and display factors of that number.

Input:20
Output : 1 2 4 5 10
*/

function DisplayFactor(No1 : number ) : void
{
    var Factor : number = 0;

    for (Factor = 1; Factor < No1 ; Factor++)
    {
        if((No1 % Factor)== 0)
        {
            console.log(Factor);
        }
    }
}

DisplayFactor(20)
