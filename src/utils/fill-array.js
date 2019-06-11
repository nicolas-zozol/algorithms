function buildCounters(N) {

    let counters = []
    counters[N - 1] = 0;
    counters.fill(0, 0, N - 1);

    return counters;
}