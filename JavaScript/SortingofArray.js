
//  Perform sorting of an array in descending order.


// Case:-1  Sort in Descending order
const strArr1 = ['a', 'c', 'z', 'f'];
const descArr = strArr1.sort().reverse();
console.log(descArr); //  ['z', 'f', 'c', 'a']

// Case 2 Sort in Descending order ()
const strArr2 = ['a', 'c', 'z', 'f'];
const descArr2 = strArr2.sort((a, b) => (a > b ? -1 : 1));
console.log(descArr2); //  ['z', 'f', 'c', 'a']

