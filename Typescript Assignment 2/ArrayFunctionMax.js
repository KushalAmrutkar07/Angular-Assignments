function Maximum(Arr) {
    var Max = 0;
    var Counter = 0;
    for (Counter = 0; Counter < Arr.length; Counter++) {
        if (Arr[Counter] > Max)
            Max = Arr[Counter];
    }
    return Max;
}
var Week = [23, 89, 6, 29, 56, 45, 77, 32];
var Ret = 0;
Ret = Maximum(Week);
console.log("Maximum is : " + Ret);
