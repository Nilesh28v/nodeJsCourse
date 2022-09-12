const a = [[12,12,2,4],[3,4,3,3,3,2],[435,4656,456,7]]

console.log(a);

// const b = [].concat(...a)

// console.log(b);

//or

// const b = a.flat(1)
// console.log(b);

//or


function customFlat(ar, depth =1){
    let result = [];
    ar.forEach((ar) => {
        if(Array.isArray(ar) && depth > 0){
            result.push(...customFlat(ar,depth -1))

        }else result.push(ar);
       
    });
    return result;
}

console.log(customFlat(a));