myArray = ['abc', 'xyz', 1, 2, 'Hey!']

// call move left function with 'xyz' and myArray as arguments
console.log(myArray)   // ['xyz', 'abc', 1, 2, 'Hey!']

// call move left function again, same arguments
// Note that 'xyz' is already as far left as it can go
console.log(myArray) // ['xyz', 'abc', 1, 2, 'Hey!'] no change

// call move right function this time, with 2 and myArray as arguments
console.log(myArray) // ['xyz', 'abc', 1, 'Hey!', 2]

// call move right function again, same arguments
// Note that 2 is already as far right as it can go
console.log(myArray) // ['xyz', 'abc', 1, 'Hey!', 2] no change


//I have to push an element left or right.  Will I need to remove it?
//I could take it out, hold it safely in a different container and move it to index-1.

function Leftpush(arr,el){
    let indexOf = arr.indexOf(el)
    let newArr = arr.slice(indexOf,indexOf+1)
    arr.splice(indexOf,1)
    arr.splice(indexOf-1,0,newArr[0])
    return(arr)

}

Leftpush(myArray, 1)

function Rightpush(arr,el){
    let indexOf = arr.indexOf(el)
    let newArr = arr.slice(indexOf,indexOf+1)
    arr.splice(indexOf,1)
    arr.splice(indexOf+1,0,newArr[0])
    return(arr)

}