function solution(N){

    // get N in binary
    var binaryN = N.toString(2);

    var largestGap = 0;
    var counter = 0;

    for (var i = 0; i < binaryN.length; i++) {

        if (binaryN[i] == 1) {
            largestGap = Math.max(largestGap, counter);
            counter = 0;
        } else {
            counter++;
        }

    }

    return largestGap;

}
