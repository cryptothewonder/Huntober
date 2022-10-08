// Write a function that, when given a non-empty string, and positive integer X, removes every Xth character from the string. Counting should begin from the first element in the string and should continue in that pattern until the end of the string.

// For the string below and 4
"Thies its H alltowe!en!? Th#is Tis GHalolowmeen$!"
// remove decoy strings
"This is Halloween! This is Halloween!"

// For the string below and 5
"The LBachyelor^ is ma tehrrib le tpelev!isioOn sh8ow."
// remove decoy strings and preach 🙌
"The Bachelor is a terrible television show."


// function day6Cypher(str,num){
//     let ans = str.split('')
//     let newNum = num
    
   



function day6Cypher(str,num){
    ans = str.split('')
    newNum = num
    return ans.filter((x,y)=> {
        if(y=0){}
        y%newNum !== 0})
}

console.log(day6Cypher('Hel3lo 4The4re Bud',4))

// console.log('hello there'.split(''))


