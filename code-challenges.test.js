// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// const { it } = require("node:test")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


//  PROBLEM #1

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// b) Create the function that makes the test pass.

//  First create a Test function that takes in an Arr, removes first value, then shuffles remainder
describe("removeFirstAndShuffle", () => {
    // Create an it function that will explain what is the purpose of the 'removeFirstAndShuffle' function
    it("Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.", () => {

        // Given 1st testCase is to equal the Expected output: example --> ["yellow", "blue", "pink", "green"]
        const colors1 = ["purple", "blue", "green", "yellow", "pink"]
        expect(removeFirstAndShuffle(colors1)).toEqual(expect.arrayContaining(colors1))
        
        // Given 2nd testCase is to equal the Expected output: example --> ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
        const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
        expect(removeFirstAndShuffle(colors2)).toEqual(expect.arrayContaining(colors2))

    })
})

//  After running yarn jest, I should expect a good fail prompt saying function is not defined
//      ReferenceError: removeFirstAndShuffle is not defined

//  To make the test pass, I will need to create the function I am testing for above and pass in an array parameter
const removeFirstAndShuffle = (arr) => {

    //First remove the first value from the arr w/ the shift() method
    arr.shift()

    //Create i variable w/ value of arr.length
    let shuffleThisIndex = arr.length 

    //Iterate shuffleThisIndex while it does NOT equal 0
    while (shuffleThisIndex != 0) {

        //Create shuffle variable w/ value of Math.floor(Math.random() * shuffleThisIndex)
        let shuffle = Math.floor(Math.random() * shuffleThisIndex)
        
        //Decrement shuffleThisIndex down by 1
        shuffleThisIndex--
    }
    //Return the arr
    return arr
}

//=====================================
// removeFirstAndShuffle
//   ✓ Create a function that takes in an array, removes the first item from the array and shuffles the remaining content. (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.144 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.58s.
//=====================================



//  PROBLEM #2

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the net total of votes.

// a) Create a test with expect statements for each of the variables provided.

// b) Create the function that makes the test pass.

//  First create a Test function that takes in an Obj, returns sum of all values
describe("netTotalOfObj", () => {

    // Create an it function that will explain what is the purpose of the 'netTotalOfObj' function
    it("Create a function that takes in an object that contains up votes and down votes and returns the net total of votes.", () => {

        // Given 1st testCase is to equal the Expected output: 11
        const votes1 = {upVotes: 13, downVotes: 2}
        expect(netTotalOfObj(votes1)).toEqual(11)

        // Given 1st testCase is to equal the Expected output: -31
        const votes2 = {upVotes: 2, downVotes: 33}
        expect(netTotalOfObj(votes2)).toEqual(-31)

    })
})

//  After running yarn jest, I should expect a good fail prompt saying function is not defined
//      ReferenceError: netTotalOfObj is not defined

//  To make the test pass, I will need to create the function I am testing for above and pass in an object parameter
const netTotalOfObj = (obj) => {
    //Create sum variable
    let sum = 0

    //Iterate obj with for-in loop
    for (let key in obj) {
        //If current key in object strictly equals upVotes, add to sum
        if (key === "upVotes") {
            sum += obj[key]
        }
        //Else if current key in object strictly equals downVotes, subract from sum
        else if (key === "downVotes") {
            sum -= obj[key]
        }
    }

    //Return sum
    return sum
}

//====================================
// netTotalOfObj
//     ✓ Create a function that takes in an object that contains up votes and down votes and returns the net total of votes.

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.147 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.64s.
//====================================


//  PROBLEM #3

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

// b) Create the function that makes the test pass.

//  First create a Test function that takes in 2 arrays, returns 1 array with no duplicate values
describe("two2oneArr", () => {

    // Create an it function that will explain what is the purpose of the 'two2oneArr' function
    it("Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.", () => {

        // Given 1st & 2nd testCases
        const dataArray1 = ["array", "object", "number", "string", "Boolean"]
        const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]

        //  Both testCases to equal Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
        expect(two2oneArr(dataArray1, dataArray2)).toEqual(expect.arrayContaining(["array", "object", "number", "string", "Boolean", "null", "undefined"]))
    
    })
})

//  After running yarn jest, I should expect a good fail prompt saying function is not defined
//      ReferenceError: two2oneArr is not defined


//  To make the test pass, I will need to create the function I am testing for above and pass in an object parameter
const two2oneArr = (arr1, arr2) => {
    //Create result variable that is an empty array that contains a spread operator new Set that will hold unique data from arr1 concatting with arr2
    let result = [...new Set(arr1.concat(arr2))]

    //Return result
    return result
}

//====================================
// two2oneArr
//     ✓ Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.
// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.154 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.62s.
//=====================================ß
