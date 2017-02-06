function solution(A) {

    var zeroRunningTotal = 0;

    var pairCount = 0;

    for (var i = 0; i < A.length; i++) {

        if (pairCount > 1000000000) {
            return -1;
        }

        if (A[i] == 0) {

            // increment running total of zeros
            zeroRunningTotal++;

        } else {

            // add zeros seen so far to running total
            pairCount += zeroRunningTotal;

        }
    }

    return pairCount;

}
