/*
2. Create one typescript application which contains one class named as Circle.
Circle class contains two characteristics (Class data members) as Radius, PI.
Create one parametrised constructor which accept one value and assign it to Radius. Value of
PI member is set to 3.14. In Circle class we have to one method (Behaviours) as Area which will return area of Circle. After designing the class create two objects of that class by providing some hardcoded value. Call the method Area by using both the objects.
*/

class Circle
{
    Radius : number
    PI : number

    constructor(Data : number)
    {
        this.Radius = Data
        this.PI = 3.14
    }

    CalculateArea(): number
    {
        let Ans : number = 0
        Ans = this.PI * this.Radius**2
        return Ans
    }

}

var obj = new Circle(10.7)
var Ret : number = 0

Ret = obj.CalculateArea()
console.log("Area is :"+Ret)