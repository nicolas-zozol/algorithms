package sum;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.PriorityQueue;

public class MinSum {


    public static void main(String[] args) {

        var heap = new PriorityQueue<Pair>();
        var visited = new HashSet<Pair>();
        int k = 6;

        int[] nums1 = {1, 4, 6, 7, 8};
        int[] nums2 = {2, 4, 5, 7, 18};


        var p1 = new Pair(0, 0, nums1[0] + nums2[0]);
        heap.add(p1);
        visited.add(p1);
        List<Integer> result = new ArrayList<>();

        while (k > 0 && !heap.isEmpty()) {

            var head = heap.poll();
            var i = head.i();
            var j = head.j();
            var curSum = head.sum();


            if (i + 1 < nums1.length) {
                var pI = new Pair(i + 1, j, nums1[i + 1] + nums2[j]);
                if (!visited.contains(pI)) {
                    visited.add(pI);
                    heap.add(pI);
                }

            }

            if (j + 1 < nums2.length) {
                var pJ = new Pair(i, j + 1, nums1[i] + nums2[j + 1]);

                if (!visited.contains(pJ)) {
                    visited.add(pJ);
                    heap.add(pJ);
                }
            }

            result.add(curSum);
            k--;

        }


        System.out.println(result);

    }
}
