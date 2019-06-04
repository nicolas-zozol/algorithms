"use strict";
/*
Given weights and values of n items, put these items in a knapsack of capacity W
to get the maximum total value in the knapsack.

In other words, given two integer arrays val[0..n-1] and wt[0..n-1] which represent values
 and weights associated with n items respectively.

Also given an integer W which represents knapsack capacity,
 find out the maximum value subset of val[] such that sum of the weights of
  this subset is smaller than or equal to W.

You cannot break an item, either pick the complete item, or don’t pick it (0-1 property).
 */
exports.__esModule = true;
var memoize_1 = require("../utils/memoize");
function max(x, y) {
    return x < y ? y : x;
}
function knapsack(values, weights, W, n) {
    if (n === 0) {
        return 0;
    }
    // If weight of the nth item is more than Knapsack capacity W, then
    // this item cannot be included in the optimal solution
    if (weights[n - 1] > W)
        return knapsack(values, weights, W, n - 1);
    // With last item included, we add the previous value that can't hold the last item weight
    var weightAvailableWithLast = W - weights[n - 1];
    var withLastItem = knapsack(values, weights, weightAvailableWithLast, n - 1) + values[n - 1];
    var withoutLastItem = knapsack(values, weights, W, n - 1);
    return max(withLastItem, withoutLastItem);
}
function knapsackMemo(values, weights, W, n) {
    var memo = memoize_1.getMemo(values, weights, W, n);
    if (memo !== undefined) {
        return memo;
    }
    if (n === 0) {
        return 0;
    }
    // If weight of the nth item is more than Knapsack capacity W, then
    // this item cannot be included in the optimal solution
    if (weights[n - 1] > W)
        return knapsackMemo(values, weights, W, n - 1);
    var weightAvailableWithLast = W - weights[n - 1];
    var available = memoize_1.getMemo(values, weights, weightAvailableWithLast, n - 1);
    if (available === undefined) {
        available = knapsackMemo(values, weights, weightAvailableWithLast, n - 1);
        memoize_1.setMemo(available, values, weights, weightAvailableWithLast, n - 1);
    }
    var withLastItem = available + values[n - 1];
    var previousWithout = memoize_1.getMemo(values, weights, W, n - 1);
    if (previousWithout === undefined) {
        previousWithout = knapsackMemo(values, weights, W, n - 1);
        memoize_1.setMemo(previousWithout, values, weights, W, n - 1);
    }
    var result = max(withLastItem, previousWithout);
    memoize_1.setMemo(result, values, weights, W, n);
    return result;
}
var values = [60, 100, 1200, 10, 2000, 12, 40];
var weights = [20, 20, 3, 10, 5, 10, 20];
var W = 50;
var n = 7;
memoize_1.setDebugMemo(true);
console.log(knapsackMemo(values, weights, W, n));
