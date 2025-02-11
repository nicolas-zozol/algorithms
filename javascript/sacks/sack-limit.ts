/*
Given weights and values of n items, put these items in a knapsack of capacity W
to get the maximum total value in the knapsack with max items in the bag

In other words, given two integer arrays val[0..n-1] and wt[0..n-1] which represent values
 and weights associated with n items respectively.

Also given weight W and max numbers inside which represents knapsack capacity,
 find out the maximum value subset of val[] such that sum of the weights of
  this subset is smaller than or equal to W. Return also what are picked values.

  So a result is { picked: Item[], value:number}


You cannot break an item, either pick the complete item, or don’t pick it (0-1 property).
 */

type Item = {
    value:number,
    weight:number
}
type Result = {
    items : Item[],
    value:number
}




