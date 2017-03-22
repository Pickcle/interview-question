var doms = document.querySelectorAll('ul li');
for (var i = 0; i < 5; i++) {
  doms[i].addEventListener('click', function() {
    console.log('click' + i);
  })
}
//点击任意li，输出都是5

//目标：5个li依次输出1 2 3 4 5

//解法1：IIFE
var doms = document.querySelectorAll('ul li');
for (var i = 0; i < 5; i++) {
  !function(index) {
    doms[index].addEventListener('click', function() {
      console.log('click' + index);
    })
  }(i);
}

//解法2：forEach
var doms = document.querySelectorAll('ul li');
[].slice.call(doms).forEach((dom, index) => {
  dom.addEventListener('click', function() {
    console.log('click' + index);
  })
})

//解法3：let 块级作用域
var doms = document.querySelectorAll('ul li');
for (let i = 0; i < 5; i++) {
  doms[i].addEventListener('click', function() {
    console.log('click' + i);
  })
}
