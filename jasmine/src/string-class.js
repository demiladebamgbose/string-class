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

String.prototype.toLower = function () {
  var upperExp = /[A-Z]/g;
  return this.replace(upperExp, function (letter) {
  	letter = String.fromCharCode(letter.charCodeAt(letter) + 32);
  	return letter;
  });
};

String.prototype.ucFirst = function () {
  var first = this.substring(0,1).toUpper();
  var body = this.substring(1).toLower();
  return this.replace( /^./, first).replace(/(?!(^))(.*)$/, body);
};

String.prototype.isQuestion = function () {
	queExp = /.+(\?)$/;
	return queExp.test(this);
};
