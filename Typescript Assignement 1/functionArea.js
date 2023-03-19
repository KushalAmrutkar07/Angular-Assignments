function area(Radius, PI) {
    if (PI === void 0) { PI = 3.14; }
    var Area = PI * Math.pow(Radius, 2);
    return Area;
}
var Ret = 0;
Ret = area(5);
console.log("Area of Circle is " + Ret);
