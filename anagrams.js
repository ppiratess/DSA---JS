// function isAnagram(str1, str2) {
//     if (str1.length !== str2.length) return false;

//     const sortedStr1 = str1.split('').sort().join('');
//     const sortedStr2 = str2.split('').sort().join('');

//     return sortedStr1 === sortedStr2;
// }

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    const lookup = {};

    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i];

        if (lookup[letter]) {
            lookup[letter] += 1;
        } else {
            lookup[letter] = 1;
        }
    }

    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i];

        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
}

console.log(validAnagram('sgwgs', 'gwgss'));
