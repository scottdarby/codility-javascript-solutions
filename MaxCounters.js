function solution(N, A) {

    var counters = Array(N).fill(0);

    var maxCounter = 0;
    var minCounter = 0;

    for (var i = 0; i < A.length; i++) {

        var operation = A[i];

        // max counter
        if (operation == (N + 1) ) {

            // set minimum counter as baseline for any operations
            minCounter = maxCounter;

        // increment
        } else {

            // bring counter up to min
            if (counters[operation - 1] < minCounter) {
                counters[operation - 1] = minCounter;
            }

            // increment counter
            counters[operation - 1] += 1;

            // if counter is larger than maxCounter, we have a new maxCounter
            if (counters[operation - 1] > maxCounter) {
                maxCounter = counters[operation - 1];
            }

        }

    }

    // loop through counters array and set any elements < minCounter to minCounter
    for (var i = 0; i < counters.length; i++) {
        if (counters[i] < minCounter) {
            counters[i] = minCounter;
        }

    }

    return counters;

}
