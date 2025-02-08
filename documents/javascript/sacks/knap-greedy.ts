function knapsackGreedy(values: number[], weights: number[], W, n): number {

    if (n === 0) {
        return 0;
    }

    const ratios: Knap[] = values.map((v, i) => ({
        ratio: v / weights[i],
        value: v,
        weight: weights[i]
    }))
        .sort((k1, k2) => k2.ratio - k1.ratio);

    console.log(ratios);
    let result = 0;
    let weight = 0;
    ratios.forEach(r => {
        // weight AFTER addition must still be under W
        if (weight + r.weight < W) {
            result += r.value;
            weight += r.weight;
        }
    });

    return result;

}

interface Knap {
    value: number;
    weight: number;
    ratio: number;
}

let values = [60, 100, 1200, 10, 2000, 12, 40];
let weights = [20, 20, 3, 10, 5, 10, 20];
let W = 50;
let n = 7;


console.log(knapsackGreedy(values, weights, W, n));
