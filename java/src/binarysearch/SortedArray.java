package binarysearch;

import java.util.LinkedList;
import java.util.List;

public class SortedArray {

    LinkedList<Integer> list = new LinkedList<>();

    public SortedArray(List<Integer> l) {
        this.list.addAll(l);
    }

    public void add(int item) {
        int index = search(item);
        this.list.add(index);
    }


    public int search(int term) {
        int left = 0, right = list.size() - 1;

        while (left < right) {
            int middle = (left + right) / 2;
            int value = this.list.get(middle);

            if (value == term) {
                return middle;
            }

            if (term < value) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        }

        throw new RuntimeException("not found");
    }


}
