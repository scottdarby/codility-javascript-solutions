function solution(A) {

    var arraySum = A.reduce((a,b) => {
        return a + b;
    });

    var left = 0;
    var right = arraySum;

    var minimalDiff = Number.MAX_VALUE;

    for (var i = 0; i < A.length; i++) {

        // if we have an element to the left of current pos
        if (
            typeof A[i - 1] != 'undefined'
        ) {

            right -= A[i - 1];
            left += A[i - 1];

            var diff = Math.abs(right - left);

            minimalDiff = Math.min( minimalDiff, diff );

        }

    }

    return minimalDiff;

}
