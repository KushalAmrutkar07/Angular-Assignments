function Maximum(Arr) {
    var temp;
    var i = 0;
    var j = 0;
    for (i = 0; i < Arr.length; i++) {
        for (j = i + 1; j < Arr.length; j++) {
            if (Arr[i] < Arr[j]) {
                temp = Arr[i];
                Arr[i] = Arr[j];
                Arr[j] = temp;
            }
        }
    }
    console.log(" Second Maximum  number is : " + Arr[1]);
}
Maximum([23, 89, 6, 29, 56, 45, 77, 32]);
