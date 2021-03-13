function findJudge(N, trust) {
    if (trust.length < N - 1) { return -1; }
    if (N === 1) { return 1; }
    let trusted = {};
    let trusting = {};
    for (let pair of trust) {
      trusting[pair[0]] = (trusting[pair[0]] || 0) + 1;
      trusted[pair[1]] = (trusted[pair[1]] || 0) + 1;
    }
    for (let suspect in trusted) {
      if (trusted[suspect] === N - 1 && !trusting[suspect]) {
        return +suspect;
      }
    }
    return -1;
}
