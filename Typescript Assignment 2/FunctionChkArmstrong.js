function ChkArmstrong(no) {
    var Temp = 0;
    var Cnt = 0;
    var Mult = 1;
    var DigCnt = 0;
    var Digit = 0;
    var Sum = 0;
    while (no != 0) {
        DigCnt++;
        no = no / 10;
    }
    no = Temp;
    while (no != 0) {
        Mult = 1;
        Digit = no % 10;
        for (Cnt = 1; Cnt <= DigCnt; Cnt++) {
            Mult = Mult * Digit;
        }
        Sum = Sum + Mult;
        no = no / 10;
    }
    if (Sum == Temp) {
        console.log("No number is armstrong");
    }
    else {
        console.log("No number is not armstrong");
    }
}
ChkArmstrong(155);
