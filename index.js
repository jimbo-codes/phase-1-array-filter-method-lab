// Code your solution here
const array = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

function findMatching(arr,search){

    return arr.filter((list) => search.toLowerCase() === list.toLowerCase());
}

function fuzzyMatch(arr,fuzsearch){
    return arr.filter((list) => fuzsearch.substr(0,1) === list.substr(0,1));
}

function matchName(arr, name){
    return arr.filter((object) => object.name === name);

}
//fuzzyMatch - This function takes an array of drivers' names and a 
// string as arguments for querying the array, and returns all drivers 
// whose names begin with the provided letters.

// function nameis(input){
//    return str === input;
//     // return input == str;
// }

console.log(findMatching(array,"Sa"));