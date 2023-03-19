function Maximum(No1, No2, No3) {
    if (No1 > No2 && No1 > No3) {
        console.log("Largest number is : " + No1);
    }
    else if (No2 > No1 && No2 > No3) {
        console.log("Largest number is : " + No2);
    }
    else {
        console.log("Largest numnber is : " + No3);
    }
}
var A = 23;
var B = 89;
var C = 6;
Maximum(A, B, C);
