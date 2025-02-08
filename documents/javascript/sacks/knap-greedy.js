function knapsackGreedy(values, weights, W, n) {
    if (n === 0) {
        return 0;
    }
    var ratios = values.map(function (v, i) { return ({
        ratio: v / weights[i],
        value: v,
        weight: weights[i]
    }); })
        .sort(function (k1, k2) { return k2.ratio - k1.ratio; });
    console.log(ratios);
    var result = 0;
    var weight = 0;
    ratios.forEach(function (r) {
        // weight AFTER addition must still be under W
        if (weight + r.weight < W) {
            result += r.value;
            weight += r.weight;
        }
    });
    return result;
}
var values = [60, 100, 1200, 10, 2000, 12, 40];
var weights = [20, 20, 3, 10, 5, 10, 20];
var W = 50;
var n = 7;
console.log(knapsackGreedy(values, weights, W, n));
