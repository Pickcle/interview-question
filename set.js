//Set value必须唯一
let set = new Set();
let arr = [1,2,3,4,5,5,5,5,4,3,2,1];
arr.forEach((value, index) => {
  set.add(value);
})

set.size;//5

for (let v of set) {
  console.log(v);
}//1,2,3,4,5

let res = Array.from(set);
console.log(res);//[1,2,3,4,5]

let res2 = [...set];
console.log(res2);//[1,2,3,4,5]

set.add(6);//set
set.delete(5);//true
set.has(4);//true
set.clear();//undefined
