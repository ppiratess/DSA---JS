// anagarams -> hello , olleh

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    const lookup = {};

    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i];

        //check if string exits in the hashmap
        // if yes increase the count else create a new lookup

        if (!lookup[letter]) {
            lookup[letter] = 1;
        } else {
            lookup[letter] += 1;
        }
    }

    console.log({ lookup });

    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i];

        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    for (let key in lookup) {
        if (lookup[key] > 0) {
            return false;
        }
    }

    return true;
}

console.log('anagram', isAnagram('hellu', 'olleh'));
