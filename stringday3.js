function decode(x){
    let y = x.split('')
    for(let i=0; i<y.length; i++){
        if(y[i]==='S' || y[i]==='P' || y[i]==='A' ||y[i]==='C' || y[i]==='E'){
            y[i]= ' '
        }
    }
    return y.join('')
}

console.log(decode('SPspaceCE'))