package twopointers;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class FindSumElement {

    List<Pair> red;
    List<Pair> black;
    List<Pair> merge = new ArrayList<>();


    public static List<Pair> mergeBoth(List<Pair> reds, List<Pair> blacks) {
        List<Pair> work = new ArrayList<>();
        work.addAll(reds);
        work.addAll(blacks);
        Collections.sort(work);
        return work;
    }

    public FindSumElement(List<Pair> reds, List<Pair> blacks) {

        red = reds;
        black = blacks;
        merge = mergeBoth(reds, blacks);

        System.out.println(merge);


    }


    public int closestTwoPointers(int target) {

        var pLeft = 0;
        var size = merge.size();
        var end = size - 1;


        if (red.isEmpty() || black.isEmpty()) {
            throw new RuntimeException("fail");
        }

        var sum = red.get(0).value() + black.get(0).value();
        var diff = target - sum;

        while (pLeft < end) {

            var left = merge.get(pLeft);
            var leftValue = left.value();
            var color = left.color();
            var rightList = merge.subList(pLeft + 1, size).stream().filter(i -> i.color() != color).toList();

            if (rightList.isEmpty()) {
                return sum;
            }
            var complement = target - leftValue;

            var rightIndex = binarySearchClosestIndex(rightList, complement);
            var rightValue = rightList.get(rightIndex).value();

            var newSum = leftValue + rightValue;
            var newDiff = Math.abs(target - newSum);

            if (newDiff > diff) {
                return sum;
            }

            sum = newSum;
            diff = newDiff;

            pLeft++;
        }

        return sum;
    }


    public int binarySearchClosestIndex(List<Pair> list, int comp) {

        var left = 0;
        var right = list.size() - 1;

        if (list.isEmpty()) {
            throw new RuntimeException("fail");
        }
        if (list.size() == 1) {
            return 0;
        }

        var lastCheckedIndex = left;
        var lastCheckedValue = list.get(lastCheckedIndex).value();
        var lastDiff = Math.abs(lastCheckedValue - comp);


        while (left < right) {
            var mid = (left + right) / 2;
            var current = list.get(mid).value();
            if (current == comp) {
                return mid;
            }

            if (current < comp) {
                left = mid + 1;
            } else {
                right = mid;
            }

        }

        var finalIndex = left;
        var finalValue = list.get(left).value();
        var finalDiff = Math.abs(finalValue - comp);
        if (left > 0 && lastDiff < finalDiff) {
            return left - 1;
        }
        return left;


    }


}
