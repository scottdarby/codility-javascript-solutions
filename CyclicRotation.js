function solution(A, K) {

    if (
        K == 0 ||
        K % A.length == 0 ||
        A.length == 1
    ) {
        return A;
    }

    var rotatedArray = [];

    for (var i = 0; i < A.length; i++) {
        var newIndex = (i + K) % A.length;
        rotatedArray[newIndex] = A[i];
    }

    return rotatedArray;

}
