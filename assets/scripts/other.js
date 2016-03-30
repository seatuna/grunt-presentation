function stringy(size) {
  var string = new Array(Math.abs(size));
  string[0] = 1;
  for (var i = 1; i < size; i++) {
    if(i % 2 === 0) {
      string[i] = 1;
    } else {
      string[i] = 0;
    }
  }
  string = string.toString().replace(/,/g,"");
  return string;
}
