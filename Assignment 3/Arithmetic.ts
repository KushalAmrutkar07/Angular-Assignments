/*
1. Create one typescript application which contains one class named as Arithmetic. Arithmetic class contains three characteristics (Class data members) as Number1, Number2. Create one parametrised constructor which accept two values and assign it to Number1 and
Number2. In Arithmetic class we have to write four methods (Behaviours) as Addition, Subtraction,
Multiplication and Division.
Addition method will add Number1, Number2 & return result. Subtraction method will subtract Number1, Number2 & return result.
Multiplication method will multiply Number1, Number2 & return result.
Division method will divide Number1, Number2 & return result. After designing the class create two objects of that class by providing some hardcoded value. Call all the methods by using both the objects.
*/
class Arithematic
{
    No1 : number
    No2 : number

    constructor(A : number , B : number)
    {
        this.No1 = A
        this.No2 = B
    }

    Addition():number
    {
        return this.No1 + this.No2
    }

    Substraction(): number
    {
        return this.No1 - this.No2
    }

    Multiplication():number
    {
        return this.No1 * this.No2
    }

    Division():number
    {
        return this.No1/ this.No2
    }

}

var obj1 = new Arithematic(25,5)

var Ret : number = 1;

Ret = obj1.Addition()
console.log("Addition is obj1 :"+Ret)

Ret = obj1.Substraction()
console.log("Substraction is obj1 :"+Ret)

Ret = obj1.Multiplication()
console.log("Multiplication is obj1 :"+Ret)

Ret = obj1.Division()
console.log("Division is obj1 :"+Ret)