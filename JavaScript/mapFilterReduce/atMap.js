//Sem THIS
/*
let arr = [3, 4, 5, 6];
let modifiedArr = arr.map(function (element) {
    return element * 3
});

console.log(modifiedArr);
*/ 



//Com this
const maca = {
    value :2,
};

function mapComThis(arr, thisArg){
    return arr.map(function(item){
        return item*this.value;
    },thisArg);
}
const nums = [1,2];
console.log(mapComThis(nums, maca))