// Today you'll need to create a function that swaps each letter of the alphabet for its opposite. A letter's opposite is one that, if the alphabet were flipped Z-A, would be the same number of letters in, and which would also have the opposite case.

'A'  // first letter of the alphabet, uppercase
'z'  // last letter of the alphabet, lowercase

'p'  // 16th letter of the alphabet, lowercase
'K'  // 16th letter from *end* of alphabet, uppercase

'vCZNKOV: 0 MFNYVI LI KFMXGFZGRLM XSZMTVH'
// function replaces letters with opposites
'Example: 0 number or punctuation changes'

// function day7cypher(x){
//    let ans = x.split('')
//    let str = ''
//    for(let i = 0; i<ans.length;)
//    if(ans[i]==='a'){
//     str + 'Z'
//    } else if (ans[i] === 'b'){
//     str + 'Y'
//    } else {
//     str + ans[i]
//    }

// }

console.log(day7cypher("HABa!"))
// It needs to switch from uppercase to lowercase
// It needs to switch letters.
// How will it switch letters?  I could use character codes.  There's probably a formula there.  If it had 64 subtracted from it and subtracted that number from 91, then it could work.   
//Wait.  I can't use charcodeat to add stuff.  I can however have a slightly less complicated system.
//nevermind.  you can't name vars numbers.  But I did fine fromcharcode
// I was close, but I almost forgot the uppercase




