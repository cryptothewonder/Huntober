function compareArr(x,y) {
    return JSON.stringify(x)==JSON.stringify(y)
}

console.log(compareArr([1,2,3,[1,2,3]],[1,2,3,[1,2,3]]))