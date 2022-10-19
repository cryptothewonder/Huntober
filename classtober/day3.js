// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// getAverage([2,2,2,2]),2)
// getAverage([1,2,3,4,5,]),3);
// getAverage([1,1,1,1,1,1,1,2]),1)

//Array won't be empty - no funny biz - find average rounded DOWN

//return a number that is the average of the array

function getAverage(x){
    //use .reduce to find the sum, divide by array.length and use math.floor to bring it down.
    return Math.floor((x.reduce((x,y) => x+y,0))/x.length)
}

console.log(getAverage([2,2,2,2]),2)
console.log(getAverage([1,2,3,4,5,]),3);
console.log(getAverage([1,1,1,1,1,1,1,2]),1)