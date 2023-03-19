/*Write a typescript program which contains one function named as Maximum. That function accepts array of numbers and returns the second largest number from array. 
Input: 23 89 6 29 56 45 77 32 
Output: Second Maximum number is 77
*/

function Maximum(Arr : number[]) : void
{
    var temp ;
    var i : number = 0;
    var j : number = 0;
   

    for (i = 0; i < Arr.length; i++)
    {
        for(j = i+1; j< Arr.length;j++)
        {
            if(Arr[i] < Arr[j])
            {
                temp = Arr[i];
                Arr[i] = Arr[j];
                Arr[j] = temp;
            }
        }
    }
    console.log(" Second Maximum  number is : "+Arr[1]);

}    

Maximum([23,89,6,29,56,45,77,32]);

