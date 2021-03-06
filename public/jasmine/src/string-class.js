(function () {
  'use strict';

  /**
    * @method hasVowels
    * Checks if a string contains vowels.
    * @return {Bolean} returns true/false
    */
  String.prototype.hasVowels = function () {
    return /[aeiou]/i.test(this);
  };

  /**
    * @method toUpper
    * Returns uppercase of characters in a string.
    * @return {String}
    */
  String.prototype.toUpper = function () {
    return this.replace(/[a-z]/g, function (letter) {
      letter = String.fromCharCode(letter.charCodeAt(letter) - 32);

      return letter;
    });
  };

  /**
    * @method toLower
    * Returns lower case of characters in a string.
    * @return {String}
    */
  String.prototype.toLower = function () {
    return this.replace(/[A-Z]/g, function (letter) {
      letter = String.fromCharCode(letter.charCodeAt(letter) + 32);

      return letter;
    });
  };

  /**
    * @method ucFirst
    * Returns a string with the first character capitalized.
    * @return {String}
    */
  String.prototype.ucFirst = function () {
    var result = this.substring(0, 1).toUpper() + this.substring(1).toLower();

    return result;
  };

  /**
    * @method isQuestion
    * Checks if a string is a question.
    * @return {Boolean} returns true/false
    */
  String.prototype.isQuestion = function () {
    return /^.+\?$/.test(this);
  };

  /**
    * @method words
    * Returns an array of the words in a string.
    * @return {Array}
    */
  String.prototype.words = function () {
    if (this.length) {
      return this.replace(/[^a-zA-Z0-9\s]/g, '')
        .replace(/\s+/g, ' ').split(/\s/);
    }

    return [];
  };

  /**
    * @method wordCount
    * The number of words in a string.
    * @return {Number}
    */
  String.prototype.wordCount = function() {
    return this.words().length;
  };

  /**
    * @method toCurrency
    * Returns the currency representation  of a string.
    * @return {String}
    */
  String.prototype.toCurrency = function () {
    var val = this.replace(/[^\d\.]/g, '');

    val = val.split(/\./);
    val[0] = val[0].replace(/\B(?=(\d{3})+$)/g, ',');
    if (val[1]) {
      val[1] = val[1].substring(0, 2);

      return val.join('.');
    }

    return val[0] + '.00';
  };

  /**
    * @method fromCurrency
    * Returns the number equivalent of a currency string.
    * @return {String}
    */
  String.prototype.fromCurrency = function () {
    if (/^[\d,]+\.\d{2}$/.test(this)) {
      return parseFloat(this.split(/,/g).join(''));
    }

    throw new Error('Improper input format');
  };

  /**
    * @method inverseCase
    * Returns a string in inverse case.
    * @return {String}
    */
  String.prototype.inverseCase = function () {
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
    * Returns a sting in alternting cases.
    * @return {String}
    */
  String.prototype.alternateCase = function () {
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
    * Returns chracter(s) in the middle of a string.
    * @return {String}
    */
  String.prototype.getMiddle = function () {
    var result = this.split(/(?!^)/);
    var halfLen = result.length / 2;

    if (result.length % 2 === 0) {
      return result.slice((halfLen) - 1, (halfLen) + 1).join('');
    }

    return result[parseInt(halfLen)].toString();
  };

  /**
    * @method isDigit
    * Returns checks if a string is a single digit.
    * @return {Boolean} returns true/false
    */
  String.prototype.isDigit = function () {
    var digitExp = /^\d{1}$/;

    return digitExp.test(this);
  };

  /**
    * @method numberWords
    * Returns the words for each number in a string.
    * @return {String}
    */
  String.prototype.numberWords = function () {
    var match = function (character) {
      if (/\d/.test(character)) {
        var words = [
          'zero', 'one', 'two', 'three', 'four',
          'five', 'six', 'seven', 'eight', 'nine'
        ];

        return words[parseInt(character)];
      }

      return character;
    };

      return this.split(/(?!^)/).map(match).join(' ').replace(/\s+/g, ' ');
  };

  /**
    * @method doubleCheck
    * Checks if a string contains double characters.
    * @return {Boolean} returns true or false
    */
  String.prototype.doubleCheck = function () {
    return /(\w)\1/.test(this);
  };
})();
