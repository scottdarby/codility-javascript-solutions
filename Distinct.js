function solution(A) {

    var unique = [];
    var count = 0;

    for (var i = 0; i < A.length; i++) {
        if (typeof unique[A[i]] == 'undefined') {
            unique[A[i]] = true;
            count++;
        }
    }

    return count;

}
