function fill(N, value) {

    let result = [];
    result[N - 1] = value;
    result.fill(value, 0, N - 1);

    return result;
}