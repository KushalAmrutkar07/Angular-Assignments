/*Write a typescript program which contains one function named as ChkString. That function accept one string and check whether that string contains "Marvellous word or not. 
Input: "Pune Kothrud Marvellous Infosystems" 
Output: String contains Marvellous in it
*/
function ChkString(str: string ) : void
{
    var word : String = "Pune Kothrud Marvellous Infosystems";
    
    if(word.indexOf(str)!= -1)
    {
        console.log("String Contain Word Marvellous")
    }
    else
    {
        console.log("String does not Contain Word Marvellous")
    }
}

ChkString("Marvellous")


