String.prototype.hasVowels = function () {
  var vowelExp = /[a|e|i|o|u]/i;
  if (vowelExp.test(this)) {
    return true;
  }
  return false;
};

String.prototype.toUpper = function () {
  var lowerExp = /[a-z]/g;
  return this.replace(lowerExp, function (letter) {
  	letter = String.fromCharCode(letter.charCodeAt(letter) - 32);
  	return letter;
  });
};
