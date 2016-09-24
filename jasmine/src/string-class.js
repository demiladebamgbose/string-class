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

String.prototype.words = function () {
  if (this.length > 0){
    return this.replace(/\s+/g, " ").split(/\s/);
  }
  return [];
};

String.prototype.wordCount = function() {
	return this.words().length;
};

String.prototype.toCurrency = function () {
  if (/^(\d*\.\d{2})$/.test(this)) {
    var value = this.split(/\./);
  	var currExp = /\B(?=(\d{3})+$)/g;
  	value[0] = value[0].replace(currExp, ',');
    return value.join('.');
  }
  throw new Error('Improper input format');
};

String.prototype.fromCurrency = function() {
	if (/^[\d,]+\.\d{2}$/.test(this)) {
		return parseFloat(this.split(/,/g).join(''));
	}
	throw new Error('Improper input format');
};

String.prototype.inverseCase = function () {
  var switchCase = function (letter) {
	  if (/[A-Z]/.test(letter)) {
		  return letter.toLower();
	  }
	  return letter.toUpper();
	};
	 return this.split(/(?!^)/).map(switchCase).join('');
};

String.prototype.alternateCase = function () {
  var changeCase = function (letter, index) {
	  if (index % 2 === 0) {
		  return letter.toLower();
	  }
	  return letter.toUpper();
	};
	 return this.split(/(?!^)/).map(changeCase).join('');
};
