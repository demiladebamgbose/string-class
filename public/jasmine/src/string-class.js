/**
  * @method hasVowels
  *
  * Checks if a string contains vowels.
  *
  * @param {String}
  * @return {Bolean} returns true/false
  */
String.prototype.hasVowels = function () {
  'use strict';
  var vowelExp = /[aeiou]/i;

  return vowelExp.test(this);
};

/**
  * @method toUpper
  *
  * Returns uppercase of characters in a string.
  *
  * @param {String}
  * @return {String}
  */
String.prototype.toUpper = function () {
  'use strict';
  var lowerExp = /[a-z]/g;

  return this.replace(lowerExp, function (letter) {
  	letter = String.fromCharCode(letter.charCodeAt(letter) - 32);

  	return letter;
  });
};

/**
  * @method toLower
  *
  * Returns lower case of characters in a string.
  *
  * @param {String}
  * @return {String}
  */
String.prototype.toLower = function () {
  'use strict';
  var upperExp = /[A-Z]/g;

  return this.replace(upperExp, function (letter) {
  	letter = String.fromCharCode(letter.charCodeAt(letter) + 32);

  	return letter;
  });
};

/**
  * @method ucFirst
  *
  * Returns a string with the first character capitalized.
  *
  * @param {String}
  * @return {String}
  */
String.prototype.ucFirst = function () {
  'use strict';
  var first = this.substring(0,1).toUpper();
  var body = this.substring(1).toLower();

  return this.replace( /^./, first).replace(/(?!(^))(.*)$/, body);
};

/**
  * @method isQuestion
  *
  * Checks if a string is a question.
  *
  * @param {String}
  * @return {Boolean} returns true/false
  */
String.prototype.isQuestion = function () {
  'use strict';
	var queExp = /^.+\?$/;

	return queExp.test(this);
};

/**
  * @method words
  *
  * Returns an array of the words in a string.
  *
  * @param {String}
  * @return {Array}
  */
String.prototype.words = function () {
  'use strict';
  if (this.length > 0){

    return this.replace(/[^a-zA-Z0-9\s]/g, '')
      .replace(/\s+/g, ' ').split(/\s/);
  }

  return [];
};

/**
  * @method wordCount
  *
  * The number of words in a string.
  *
  * @param {String}
  * @return {Number}
  */
String.prototype.wordCount = function() {
  'use strict';
	return this.words().length;
};

/**
  * @method toCurrency
  *
  * Returns the currency representation  of a string.
  *
  * @param {String}
  * @return {String}
  */
String.prototype.toCurrency = function () {
  'use strict';
  if (/^(\d*\.\d{2})$/.test(this)) {
    var value = this.split(/\./);
  	var currExp = /\B(?=(\d{3})+$)/g;

  	value[0] = value[0].replace(currExp, ',');

    return value.join('.');
  }

  throw new Error('Improper input format');
};

/**
  * @method fromCurrency
  *
  * Returns the number equivalent of a currency string.
  *
  * @param {String}
  * @return {String}
  */
String.prototype.fromCurrency = function() {
  'use strict';
	if (/^[\d,]+\.\d{2}$/.test(this)) {
		return parseFloat(this.split(/,/g).join(''));
	}

	throw new Error('Improper input format');
};

/**
  * @method inverseCase
  *
  * Returns a string in inverse case.
  *
  * @param {String}
  * @return {String}
  */
String.prototype.inverseCase = function () {
  'use strict';
  var switchCase = function (letter) {

	  if (/[A-Z]/.test(letter)) {
		  return letter.toLower();
	  }

	  return letter.toUpper();
	};

	 return this.split(/(?!^)/).map(switchCase).join('');
};

/**
  * @method alternateCase
  *
  * Returns a sting in alternting cases.
  *
  * @param {String}
  * @return {String}
  */
String.prototype.alternateCase = function () {
  'use strict';
  var changeCase = function (letter, index) {
	  if (index % 2 === 0) {
		  return letter.toLower();
	  }

	  return letter.toUpper();
	};

	 return this.split(/(?!^)/).map(changeCase).join('');
};

/**
  * @method getMiddle
  *
  * Returns chracter(s) in the middle of a string.
  *
  * @param {String}
  * @return {String}
  */
String.prototype.getMiddle = function () {
  'use strict';
	var result = this.split(/(?!^)/);
	var length = result.length/2;

	if (result.length % 2 === 0) {
		return result.slice((length)-1, (length)+1).join('');
	}

	return result[parseInt(length)].toString();
};

/**
  * @method isDigit
  *
  * Returns checks if a string is a single digit.
  *
  * @param {String}
  * @return {Boolean} returns true/false
  */
String.prototype.isDigit = function () {
  'use strict';
	var digitExp = /^\d{1}$/;

	return digitExp.test(this);
};

/**
  * @method numberWords
  *
  * Returns the words for each number in a string.
  *
  * @param {String}
  * @return {String}
  */
String.prototype.numberWords = function () {
	var match = function (digit) {
		var words = ['zero', 'one', 'two', 'three', 'four',
     'five', 'six', 'seven', 'eight', 'nine'];

		return words[parseInt(digit)];
	};

	if (/^\d+$/.test(this)) {
		return this.split(/(?!^)/).map(match).join(' ');
	}

	throw new Error('improper input format');
};

/**
  * @method doubleCheck
  *
  * Checks if a string contains double characters.
  *
  * @param {String}
  * @return {Boolean} returns true or false
  */
String.prototype.doubleCheck = function () {
  'use strict';
	var doubleExp = /(\w)\1{1}/;

	return doubleExp.test(this);
};
