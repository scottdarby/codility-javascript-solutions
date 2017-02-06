function solution(A) {

    var arrayLength = A.length;

    var checkDict = {};

    for (var i = 1; i <= arrayLength; i++) {
        checkDict[i] = false;
    }

    for (var i = 0; i < arrayLength; i++) {
        checkDict[A[i]] = true;
    }

    for (var prop in checkDict) {
        if (checkDict.hasOwnProperty(prop)) {
            if (checkDict[prop] == false) {
                return 0;
            }
        }
    }

    return 1;
}
