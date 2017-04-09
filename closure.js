function A(num) {
  return function() {
    console.log(num);
  }
}

var C = A(10);
C();//10
