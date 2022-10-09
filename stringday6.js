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
    
   

// function day6Cypher(x,y){
//     let ans = x.split('')
    
//     for (let i = 0; i<ans.length; i++){
//         if(i === y){
//             ans.shift(ans[i])
//         }
//     }
//     return ans
// }

function day6Cypher(x,y){
   return x.split('').filter((c, i) => (i + 1) % y !== 0).join('')
}




console.log(day6Cypher('He3ll5o 4Th5eree 6Bugd', 3))

// console.log('hello there'.split(''))


