function strStr(str, pattern) {
    if (!pattern) { return 0; }
    let table = getPatternTable(pattern);
    let i = 0;
    let j = 0;

    while (i < str.length) {
        if (str[i] === pattern[j]) {
            i++
            if (j++ === pattern.length - 1) { return i - pattern.length; }
        } else {
            !j ? i++ : j = table[--j];
        }
    }

    return -1;
}

function getPatternTable(str) {
    let table = [0];
    let i = 1;
    let j = 0;

    while (i < str.length) {
        if (str[i] === str[j]) {
            table[i++] = ++j;
        } else {
            !j ? table[i++] = 0 : j = table[--j];
        }
    }

    return table;
}
