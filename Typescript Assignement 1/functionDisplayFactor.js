function DisplayFactor(No1) {
    var Factor = 0;
    for (Factor = 1; Factor < No1; Factor++) {
        if ((No1 % Factor) == 0) {
            console.log(Factor);
        }
    }
}
DisplayFactor(20);
