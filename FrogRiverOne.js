function solution(X, A) {

    var desiredTotal = 0;
    var checkDict = {};
    var runningTotal = 0;

    for (var i = 1; i <= X; i++) {
        desiredTotal += i;
        checkDict[i] = false;
    }

    for (var i = 0; i < A.length; i++) {

        if (checkDict[A[i]] == false) {

            checkDict[A[i]] = true;

            runningTotal += A[i];

            if (runningTotal == desiredTotal) {
                return i;
            }

        }

    }

    return -1;

}
