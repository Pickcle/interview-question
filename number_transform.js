//输入1000000，输出1,000,000
//解法1：
function tf(num) {
  let sNum = num + '';
  let arr = [];
  for (var i = 0, len = sNum.length; i < len; i+=3) {
    arr.push(sNum.substring(len - i - 3, len - i));
  }
  return arr.reverse().join(',');
}

//解法2：
function tf(num) {
  return num.toLocaleString();
}

1000000..toLocaleString();
1000000.0.toLocaleString();
[1000000].toLocaleString();
//'1,000,000'
