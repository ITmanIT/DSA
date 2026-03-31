var isPalindrome = function(s) {
    // 1. Convert everything to lowercase
    // This ensures 'A' and 'a' are treated as the same character
    let lowerText = s.toLowerCase();

    // 2. Remove all non-alphanumeric characters
    // The [^a-z0-9] means: "find anything that is NOT a letter or a number"
    // The 'g' stands for "global" (do it for the whole string)
    let cleanText = lowerText.replace(/[^a-z0-9]/g, '');

    // 3. Create a reversed version of the clean text
    // .split('')   -> turns "abc" into ["a", "b", "c"]
    // .reverse()   -> turns ["a", "b", "c"] into ["c", "b", "a"]
    // .join('')    -> turns ["c", "b", "a"] back into "cba"
    let reversedText = cleanText.split('').reverse().join('');

    // 4. Compare the clean text with the reversed version
    // If they are identical, it returns true. If not, it returns false.
    return cleanText === reversedText;
};

// Test examples:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("race a car"));                     // Output: false