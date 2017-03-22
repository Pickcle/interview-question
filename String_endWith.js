String.prototype.endWith = function(char) {
  let string = String(this);
  return (new RegExp(".*" + char + "$").test(string));
}
