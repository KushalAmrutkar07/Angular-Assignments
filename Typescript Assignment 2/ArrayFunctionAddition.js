function Addition(Arr) {
    var Sum = 0;
    var Counter = 0;
    for (Counter = 0; Counter < Arr.length; Counter++) {
        Sum = Sum + Arr[Counter];
    }
    return Sum;
}
var Week = [23, 6, 7, 4, 5, 7];
var Ret = 0;
Ret = Addition(Week);
console.log("Addition is : " + Ret);
