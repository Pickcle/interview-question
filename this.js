var a = {
  a: 'haha',
  getA: function() {
    'use strict';
    console.log(this.a);
  }
}

var b = {
  a: 'hello'
}

var getA = a.getA;
var getA2 = getA.bind(a);

function run(fn) {
  fn();
}

a.getA();//'haha'
getA();//对象a  如果getA是严格模式，则this为undefined
run(a.getA);//对象a   如果是getA严格模式，则this为undefined
getA2.call(b);//'haha'
