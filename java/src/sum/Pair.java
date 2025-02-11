package sum;

public record Pair(Integer i, Integer j, Integer sum) implements Comparable<Pair> {

    @Override
    public int compareTo(Pair o) {
        return this.sum.compareTo(o.sum);
    }
}