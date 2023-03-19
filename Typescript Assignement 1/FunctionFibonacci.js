function Fibonacci(No) {
    var Num = 0;
    var No1 = 0;
    var No2 = 1;
    var acci = 0;
    for (acci = 0; acci < No; acci++) {
        console.log(No1);
        Num = No1 + No2;
        No1 = No2;
        No2 = Num;
        if (No1 > No) {
            break;
        }
    }
}
Fibonacci(21);
