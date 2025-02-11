package twopointers;

import java.util.ArrayList;
import java.util.List;

public record Pair(Integer first, Color second) implements Comparable<Pair> {

    public Integer value() {
        return first;
    }

    public Color color() {
        return second;
    }

    @Override
    public int compareTo(Pair o) {
        return this.value().compareTo(o.value());
    }

    @Override
    public String toString() {
        return "%d %s".formatted(first, second);
    }

    public static List<Pair> of(Color color, int... ints) {
        ArrayList<Pair> list = new ArrayList<Pair>();
        for (var i : ints) {
            list.add(new Pair(i, color));
        }

        return list;
    }
}