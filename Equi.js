function solution(A){

    if (!A.length) {
        return -1;
    }

    var total = A.reduce((a,b) => {
        return a + b;
    });

    var left = 0;
    var right = total;

    for (var i = 0; i < A.length; i++) {

        var current = A[i];

        right -= current;

        if (left == right) {
            return i;
        }

        left += A[i];

    }

    return -1;

}
