package quicksort;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Quicksort {

    public static void main(String[] args) {

        Integer[] items = {1, 4, 6, 3, 45, 3, 4, 78};

        List<Integer> unsorted = Arrays.asList(items);
        List<Integer> sorted = new Quicksort().quicksort(unsorted);

        System.out.println(sorted);


    }


    public List<Integer> quicksort(List<Integer> list) {
        int size = list.size();
        if (size <= 1) {
            return list;
        }
        int pivot = list.get(size - 1);

        List<Integer> left = new ArrayList<>();
        List<Integer> right = new ArrayList<>();

        for (int i = 0; i < size - 1; i++) {
            var current = list.get(i);
            if (current < pivot) {
                left.add(current);
            } else {
                right.add(current);
            }
        }

        List<Integer> result = new ArrayList<>(size);
        result.addAll(quicksort(left));
        result.add(pivot);
        result.addAll(right);

        return result;

    }


}
