function solution(A) {

    var checkDict = [];
    var intersectionCount = 0;

    for (var i = 0; i < A.length; i++) {
        checkDict[i] = {
            left : i - A[i],
            right : i + A[i],
        };
    }

    // order by starting position so we know that each sequential circle
    // has a starting point greater than the last, this way we only have
    // to check if the end position is in bounds
    checkDict.sort((a,b) => {
        return a.left - b.left;
    });

    for (var i = 0; i < checkDict.length; i++) {

        var currentCircle = checkDict[i];

        var j = i + 1;

        // check all following items in dictionary to see if end pos is in bounds
        for (var j = i + 1; j < checkDict.length; j++) {
            if (currentCircle.right >= checkDict[j].left) {

                intersectionCount++;

                if (intersectionCount > 10000000) {
                    return -1;
                }

            } else {

                break;

            }
        }

    }

    return intersectionCount;

}
