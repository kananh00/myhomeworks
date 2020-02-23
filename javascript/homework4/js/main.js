function filterBy(arr, dt) {

    let newarr = [];
    let j = 0;

    for(let i=0; i<arr.length; i++){
        if(dt == 'null'){
            if(arr[i]!==null){
              newarr[j] = arr[i];
                  j++;
            }
        }

        else if(dt==dt.valueOf()){
            if(typeof arr[i] != dt.valueOf()||arr[i]===null){
                newarr[j] = arr[i];
                j++;
            }
        }
        
     }

    return newarr;
}
let x = {
    num: 12,
    age: 20
};
let myarr = ['name', 20, false, '35', undefined, null, 234, x, true, 'hello'];
let datype = prompt('say data type which you want to remove from given array');

let result = filterBy(myarr, datype);

console.log(result);
