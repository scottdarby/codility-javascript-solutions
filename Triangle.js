function validTriangle(P, Q, R) {

    return (
        P + Q > R &&
        Q + R > P &&
        R + P > Q
    )

}

/**

A zero-indexed array A consisting of N integers is given. A triplet (P, Q, R) is triangular if 0 ≤ P < Q < R < N and:

A[P] + A[Q] > A[R],
A[Q] + A[R] > A[P],
A[R] + A[P] > A[Q].

*/

function solution(A) {

    // Sort the array so that P + R > Q and Q + R > P (R is always the biggest)
    A.sort((a,b) => {
        return b - a;
    });

    for (var i = 0; i < A.length; i++) {
        if (validTriangle(A[i], A[i + 1], A[i + 2])) {
            return 1;
        }
    }

    return 0;

}
