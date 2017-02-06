function solution(A) {

    if (A.length == 0) {
        return 1;
    }

    var desiredLength = A.length + 1;
    var desiredTotal = 0;

    for (var i = 1; i <= desiredLength; i++) {
        desiredTotal += i;
    }

    var currentTotal = A.reduce((a, b) => {
        return a + b;
    });

    return desiredTotal - currentTotal;

}
