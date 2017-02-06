function solution(A){

    var collection = [];

    for (var i = 0; i < A.length; i++) {
        if (typeof collection[A[i]] == 'undefined') {
            collection[A[i]] = 1;
        } else {
            collection[A[i]]++;
        }
    }

    var odd = 0;

    for (prop in collection) {
        if (collection.hasOwnProperty(prop)) {
            if (collection[prop] % 2) {
                odd = prop;
            }
        }
    }

    return parseInt(odd);

}
