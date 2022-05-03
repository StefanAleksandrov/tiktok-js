// More Array mutate methods in JS:
// Array.prototype.reverse();
// Array.prototype.sort();
const arr = [11, 32, 30, 4, 245];

arr.sort((elA, elB) => {
    return elB - elA;
});

console.log(arr);
