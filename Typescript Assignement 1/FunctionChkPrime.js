function ChkPrime(no) {
    var prime = 0;
    var flag = true;
    for (prime = 2; prime <= (no / 2); prime++) {
        if (no % prime == 0) {
            flag = false;
            break;
        }
    }
    if (flag == true) {
        console.log("no is prime");
    }
    else {
        console.log("no is not prime");
    }
}
ChkPrime(14);
