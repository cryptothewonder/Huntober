// Oh no! How did this happen?! Somehow similar-looking numbers and letters have been confused in our document. Someone may have been messing around writing naughty words on a calculator. We need to get them back to normal.

// Below, find the mix-ups that have been made. Note: the confusion happened in both directions and was case-sensitive.

// '0' <-> 'O'      '5' <-> 'S'
// '1' <-> 'I'      '6' <-> 'G'
// '2' <-> 'Z'      '7' <-> 'L'
// '3' <-> 'E'      '8' <-> 'B'
// '4' <-> 'h'      '9' <-> 'q'

function fixString(x){
    let ans = x.split('')
    let ans2 = ''
    for(let i=0; i<ans.length; i++){
        if(ans[i]==='0'){
            ans[i] = 'O'
        } else if(ans[i]==='1'){
            ans[i] = 'I'
        } else if(ans[i]==='2'){
            ans[i] = 'Z'
        } else if(ans[i]==='3'){
            ans[i] = 'E'
        } else if(ans[i]==='4'){
            ans[i] = 'h'
        } else if(ans[i]==='5'){
            ans[i] = 'S'
        } else if(ans[i]==='6'){
            ans[i] = 'G'
        } else if(ans[i]==='7'){
            ans[i] = 'L'
        } else if(ans[i]==='8'){
            ans[i] = 'B'
        } else if(ans[i]==='9'){
            ans[i] = 'q'
        } 
    }
    return ans.join('')
}

console.log(fixString('8008132'))
