// 1) Sum Zero
// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

// For example:

// addToZero([]);
// // -> False

// addToZero([1]);
// // -> False

// addToZero([1, 2, 3]);
// // -> False

// addToZero([1, 2, 3, -2]);
// // -> True

const sumZero = (a) => {
    for(let i = 0; i < a.length; i++){
        for(let j = 1; j < a.length; j++) {
            if(a[i] + a[j] === 0) {
                return true
            } else {
                j++
            } 
        } 
    } return false

    return sumZero
}

//this one basically iterates through an array and compares values to one another while iterating again. it is super inefficient and horrible to look at at, but i couldnt get any refactored code to work properly and honestly it would probably be slow too. 

//I would say this one is O(n^2) because the looping is exponential based on the array size inserted

console.log(sumZero([1, 2, 3, -2]))

//trying to refactor below

// const sumZero = (a) => {
//     for(let i = 0; i < a.length; i++){
//         for(let j = 1; j < a.length; j++) {
//             return (a[i] + a[j] === 0 ? true : j++)
//         } 
//     } return false

//     return sumZero
// }

// console.log(sumZero([1, 2, 3, -2]))

// const sumZero = (a) => {
//     a.forEach(e => {
//         if (a[e] + a[e+1] === 0) {
//             return true
//         } else {
//             e++
//         } return false  
//     }) 
//     return sumZero
// }

// console.log(sumZero([1, 2, 3, -2]))

// 2) Unique Characters
// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

// For example:

// hasUniqueChars("Monday");
// // -> True

// hasUniqueChars("Moonday");
// // -> False


const unique = (word) => {
    const dupes = [...new Set(word)]
    return (dupes.length < word.length ? false : true)
}

//this code takes an array and iterates through, taking each new value and adding it to a new array. it ignores any duplicate values. now I can check and see if my new array is shorter and if so, I know there were duplicates, auper proud of this one, happy I was able to get it to work, the others not so much.

//I would say this is probably a constant so O(1), dependent upon the array size

console.log(unique("Moonday"))
// -> False



// 3) Pangram Sentence
// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.

// For example:

// isPangram("The quick brown fox jumps over the lazy dog!");
// // -> True

// isPangram("I like cats, but not mice");
// // -> False

const absurdFunction = (a) => {
    let alpha = 'abcdefghijklmnopqrstuvwxyz'

    (a.contains(alpha))
}

//Still working on getting this one to look nice, if I can't, I will resubmit with refactored code like the one above.

//Knowing my intent though, which is to loop through an array that is constant ans one that can get exponantially bigger, I would say this is O(n * 1) or simply O(n).

console.log(absurdFunction("I like cats, but not mice"))

// 4) Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

// For example:

// findLongestWord(["hi", "hello"]);
// // -> 5

const howLong = (word) => {
    wordLengths =[]
    (wordLengths.push(word.map(e => e.length))).sort((a, b) => b - a)
    // wordLengths.sort((a, b) => b - a)
    return howLong
    return wordLengths[0]
}

//Again, trying to get a refactored version of this to work for my own learning, will submit an ugly version later if I can't.

//My plan is to iterate through the array and push the length of each element to a new array, then sort it in descedning order and print the array at index 0. I would describe this one as O(n) because it has to move the new array around and depending on the size of the array can be extremely simple or extremely convoluted. 

console.log(howLong["hi", "hello"])