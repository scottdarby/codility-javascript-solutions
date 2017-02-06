function solution(A, B, K) {

    // if A is divisible by K we need to add this to the result
    var offset = 0;
    if (A % K == 0) {
        offset = 1;
    }

    // calculate how many times K goes into A and B, then get the difference with added offset
    return Math.floor(B / K) - Math.floor(A / K) + offset;

}
