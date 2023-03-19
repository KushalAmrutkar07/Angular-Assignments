/* Write a typescript program which contains one function named as ChkPrime. That function should
accept one number and it should return true if the given number is prime and otherwise return false.

Input: 11
Output: It is prime number
*/

function ChkPrime(no : number) : void
{
    var prime : number = 0;
    let flag = true;
    for (prime =2; prime<=(no/2);prime++)
    {
        if(no % prime == 0)
        {
            flag = false;
            break;
        }
        
    }
    if (flag == true)
    {
        console.log("no is prime")
    }
    else
    {
        console.log("no is not prime")
    }
}

ChkPrime(11)