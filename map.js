let m = new Map();
let o = {a:1}

m.set(o, {b:1})
m.get(o);//{b:1}
m.has(o);//true
m.delete(o);//true

m.set(o, 'o')
  .set(NaN, 'NaN')
  .set(0, '0');

m.size;//3
m.delete(0);//true

for (let v of m.keys()) {
  console.log(v);
}

for (let v of m.values()) {
  console.log(v);
}

for (let v of m.entries()) {
  console.log(v[0], v[1]);
}

let arr = [...m];
console.log(arr);//[[o, 'o'], [NaN, 'NaN']]

m.clear();//undefined
