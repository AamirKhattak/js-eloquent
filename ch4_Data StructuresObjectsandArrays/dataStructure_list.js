function arrayToList(arr){
    if(arr.length === 0) return null;
    let list = null;
    let i=arr.length -1;
    do{
      list = {value: arr[i], rest: list}
      i--;
    }while(i>=0)
    return list;
  }
  
  function  listToArray(list){
    let arr = [];
    for(let node = list; node; node = node.rest){
      arr.push(node.value);
    }
    return arr;
  }
  
  function  prepend(value, list){
    if(list === null){
      return {value, rest: null};
    }
    return {value, rest: list};
  }
  function  nth(list, positionAtList){
      let iteration = 0;
      for(let node = list; node; node = node.rest){
        if(iteration === positionAtList){
          return node.value;
        }
        iteration++;
    }
    return null;
  }
  console.log(arrayToList([10, 20]));
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(listToArray(arrayToList([10, 20, 30])));
  // → [10, 20, 30]
  console.log(prepend(10, prepend(20, null)));
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(nth(arrayToList([10, 20, 30]), 1));
  // → 20