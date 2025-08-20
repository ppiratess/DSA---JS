// hello {h: 1, e:1, l:2, o:1}

function charCount(string) {
    let map = {};

    for (let char of string) {
        map[char] = (map[char] || 0) + 1;
    }

    return map;
}

// console.log('map count', charCount('hello'));

// character lookup with index

// hello {h: {count:1, index:[0]}, e: {count:1, index:[1]}, l:  {count:1, index:[2,3]}, o:  {count:1, index:[4]}}

function charCountWithIndex(string) {
    let result = {};

    const cleanedString = string.replace(/[^a-z0-9]/gi, '').toLowerCase();

    for (let i = 0; i < cleanedString.length; i++) {
        let char = cleanedString[i];

        if (!result[char]) {
            result[char] = { count: 1, index: [i] };
        } else {
            result[char].count++;
            result[char].index.push(i);
        }
    }

    return result;
}

console.log('map count with index', charCountWithIndex('hello I am working here at home'));
