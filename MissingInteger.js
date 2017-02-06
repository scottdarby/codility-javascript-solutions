function solution(A) {

    var checkDict = {};

    // create dictionary of desired sequence to check against
    for (var i = 1; i <= A.length + 1; i++) {
        checkDict[i] = false;
    }

    // mark any integers found in the input array in checkDict
    for (var i = 0; i < A.length; i++) {
        if (A[i] > 0 && A[i] <= 100000) {
            checkDict[A[i]] = true;
        }
    }

    // find first integer marked as false in checkDict
    for (var prop in checkDict) {
        if (checkDict.hasOwnProperty(prop)) {
            if (checkDict[prop] == false) {
                return parseInt(prop);
            }
        }
    }

}
