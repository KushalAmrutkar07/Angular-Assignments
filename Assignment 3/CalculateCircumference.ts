/*
3. Create one typescript application which contains one class named as Circlex which sill inherits above Circle class.
In CircleX class we have to write one method (Behaviours) as Circumference which will return
circumference of circle.
After designing the class create two objects of that class by providing some hardcoded value. Call Circumference and Area methods by using both the objects.
*/

class Circle
{
    Radius : number
    PI : number

    constructor(Data:number)
    {
        this.Radius = Data
        this.PI = 3.14
    }

    CalculateArea():number
    {
        let Ans : number = 0
        Ans = this.PI * this.Radius**2
        return Ans
    }
}

class CircleX extends Circle
{
    constructor(Data :number)
    {
        super(Data)
    }

    CalculateCircumfarance():number
    {
        let Ans : number = 0
        Ans = 2 * this.PI *this.Radius
        return Ans
    }
}

var obj = new CircleX(10.7)
var Ret : number = 0

Ret = obj.CalculateArea()
console.log("Area is :"+Ret)

Ret = obj.CalculateCircumfarance()
console.log("Circumfarance is :"+Ret)