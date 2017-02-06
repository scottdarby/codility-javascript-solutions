function solution(S, P, Q) {

    var impactFactors = {
        A : 1,
        C : 2,
        G : 3,
        T : 4,
    };

    var minimalImpactFactors = [];

    for (var i = 0; i < P.length; i++) {

        var start = P[i];
        var end = Q[i];

        var section = S.slice(start, (end+1));

        if (section.indexOf('A') != -1) {
            minimalImpactFactors.push(impactFactors['A']);
        } else if (section.indexOf('C') != -1) {
            minimalImpactFactors.push(impactFactors['C']);
        } else if (section.indexOf('G') != -1) {
            minimalImpactFactors.push(impactFactors['G']);
        } else if (section.indexOf('T') != -1) {
            minimalImpactFactors.push(impactFactors['T']);
        }

    }

    return minimalImpactFactors;

}
