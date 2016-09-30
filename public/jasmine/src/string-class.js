(function () {
  /**
    * @method hasVowels
    * Checks if a string contains vowels.
    * @param {String}
    * @return {Bolean} returns true/false
    */
  String.prototype.hasVowels = function () {
    return /[aeiou]/i.test(this);
  };

  /**
    * @method toUpper
    * Returns uppercase of characters in a string.
    * @param {String}
    * @return {String}
    */
  String.prototype.toUpper = function () {
    var lowerExp = /[a-z]/g;

    return this.replace(lowerExp, function (letter) {
      letter = String.fromCharCode(letter.charCodeAt(letter) - 32);

      return letter;
    });
  };

  /**
    * @method toLower
    * Returns lower case of characters in a string.
    * @param {String}
    * @return {String}
    */
  String.prototype.toLower = function () {
    var upperExp = /[A-Z]/g;

    return this.replace(upperExp, function (letter) {
      letter = String.fromCharCode(letter.charCodeAt(letter) + 32);

      return letter;
    });
  };

  /**
    * @method ucFirst
    * Returns a string with the first character capitalized.
    * @param {String}
    * @return {String}
    */
  String.prototype.ucFirst = function () {
    var result = this.substring(0,1).toUpper() + this.substring(1).toLower();
    return result;
  };

  /**
    * @method isQuestion
    * Checks if a string is a question.
    * @param {String}
    * @return {Boolean} returns true/false
    */
  String.prototype.isQuestion = function () {
    return /^.+\?$/.test(this);
  };

  /**
    * @method words
    * Returns an array of the words in a string.
    * @param {String}
    * @return {Array}
    */
  String.prototype.words = function () {
    if (this.length){

      return this.replace(/[^a-zA-Z0-9\s]/g, '')
        .replace(/\s+/g, ' ').split(/\s/);
    }

    return [];
  };

  /**
    * @method wordCount
    * The number of words in a string.
    * @param {String}
    * @return {Number}
    */
  String.prototype.wordCount = function() {
    return this.words().length;
  };

  /**
    * @method toCurrency
    * Returns the currency representation  of a string.
    * @param {String}
    * @return {String}
    */
  String.prototype.toCurrency = function () {
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
    * Returns the number equivalent of a currency string.
    * @param {String}
    * @return {String}
    */
  String.prototype.fromCurrency = function() {
    if (/^[\d,]+\.\d{2}$/.test(this)) {
      return parseFloat(this.split(/,/g).join(''));
    }

    throw new Error('Improper input format');
  };

  /**
    * @method inverseCase
    * Returns a string in inverse case.
    * @param {String}
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
    * @param {String}
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
    * @param {String}
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
    * @param {String}
    * @return {Boolean} returns true/false
    */
  String.prototype.isDigit = function () {
    var digitExp = /^\d{1}$/;

    return digitExp.test(this);
  };

  /**
    * @method numberWords
    * Returns the words for each number in a string.
    * @param {String}
    * @return {String}
    */
  String.prototype.numberWords = function () {
    var match = function (character) {
      if (/\d/.test(character)) {
        var words = ['zero', 'one', 'two', 'three', 'four',
          'five', 'six', 'seven', 'eight', 'nine'];

        return words[parseInt(character)];
      }
      return character;
    };
      return this.split(/(?!^)/).map(match).join(' ').replace(/\s+/g, ' ');
  };

  /**
    * @method doubleCheck
    * Checks if a string contains double characters.
    * @param {String}
    * @return {Boolean} returns true or false
    */
  String.prototype.doubleCheck = function () {
    return /(\w)\1{1}/.test(this);
  };
})();
