var a = {
  a: 'haha',
  getA: function() {
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
getA();//对象a
run(a.getA);//对象a
getA2.call(b);//'haha'
