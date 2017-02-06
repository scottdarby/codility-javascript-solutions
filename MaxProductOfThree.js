function solution(A) {

    // sort array descending
    A.sort((a,b) => {
        return b - a;
    });

    // find max product of these four scenarios, it might not be the first three array elements if some elements are negative or 0
    return Math.max(
        (A[0] * A[1] * A[2]),
        (A[0] * A[1] * A[A.length-1]),
        (A[0] * A[A.length-1] * A[A.length-2]),
        (A[A.length-1] * A[A.length-2] * A[A.length-3])
    );

}
