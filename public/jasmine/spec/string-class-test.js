describe('String Class', function () {
'use strict';
  describe('hasVowels function', function () {
    it('should return true if a string contains a vowel', function () {
      expect('Dry ace'.hasVowels()).toBe(true);
      // hasVowels function is case insensitive.
      expect('Ordyrs'.hasVowels()).toBe(true);
    });
    it('should return false if a string contains no vowel', function () {
      expect('Dry'.hasVowels()).toBe(false);
    });
  });

  describe('toUpper function', function  () {
    it('should capitalize all the letters of a string', function () {
      expect('gentle'.toUpper()).toEqual('GENTLE');
      expect('gEnTle'.toUpper()).toEqual('GENTLE');
    });
  });

  describe('toLower function', function  () {
    it('should letters of a string in lower case', function () {
      expect('GRAND'.toLower()).toEqual('grand');
      expect('GrandE'.toLower()).toEqual('grande');
    });
  });

  describe('ucFirst function', function () {
    it('should capitalize only the first letter of a string', function () {
      expect('gold'.ucFirst()).toEqual('Gold');
      expect('G!OLD4EN'.ucFirst()).toEqual('G!old4en');
      expect('goLd PlaTTed'.ucFirst()).toEqual('Gold platted');
      expect('a'.ucFirst()).toBe('A');
    });
  });

  describe('isQuestion function',function () {
    it('should return true for questions',function () {
      expect('Where?'.isQuestion()).toBeTruthy();
      expect('With whom ?'.isQuestion()).toBeTruthy();
    });
    it('should return false for a statement',function () {
      expect('A big? crowd.'.isQuestion()).toBeFalsy();
      expect('?'.isQuestion()).toBeFalsy();
    });
  });

  describe('words function', function () {
    it('should return an array of all the words in a string', function () {
      expect(Array.isArray('Oliver Twist'.words())).toBe(true);
      expect('This is $ & &# @!sugar'.words()).toEqual(['This', 'is', 'sugar']);
      expect(''.words()).toEqual([]);
    });
  });

  describe('wordCount function', function () {
    it('should return the number of words in a string', function () {
      expect('I was here'.wordCount()).toBe(3);
      expect(''.wordCount()).toBe(0);
      expect('It is () so ^% $% true'.wordCount()).toBe(4);
    });
  });

  describe('toCurrency function', function () {
    it('should return the currency representation of a string', function () {
      expect('111111.11'.toCurrency()).toBe('111,111.11');
      expect('2231.11'.toCurrency()).toBe('2,231.11');
    });
    it('should throw an error for an improperly formated string', function () {
      expect(function () {
          'ddd'.toCurrency();
        }).toThrow(new Error('Improper input format'));
      expect(function () {
          '!!345bc'.toCurrency();
        }).toThrow(new Error('Improper input format'));
    });
  });

  describe('fromCurrency function', function () {
    it('should return a number equivalent of the currency string', function () {
      expect('111,111.11'.fromCurrency()).toBe(111111.11);
      expect('1,111,111.01'.fromCurrency()).toBe(1111111.01);
    });
    it('should throw an error for an improperly formarted string', function () {
      expect(function () {
          'ddd.12'.fromCurrency();
        }).toThrow(new Error('Improper input format'));
      expect(function () {
          '4.560'.fromCurrency();
        }).toThrow(new Error('Improper input format'));
    });
  });

  describe('inverseCase function', function () {
    it('should return inverse case for each letter in a string', function () {
      expect('Mr. Ben.'.inverseCase()).toEqual('mR. bEN.');
      expect('aDDidAS! 678'.inverseCase()).toEqual('AddIDas! 678');
    });
  });

  describe('alternateCase function', function () {
    it('should return letters in aternating cases', function () {
      expect('Onomatopoeia2!'.alternateCase()).toBe( 'oNoMaToPoEiA2!');
    });
  });

  describe('getMiddle function', function () {
    it('should return the letters in the middle of a string', function () {
      expect('read'.getMiddle()).toBe('ea');
      expect('reads'.getMiddle()).toBe('a');
    });
  });

  describe('isDigit function', function () {
    it('should return true for a single digit string', function () {
      expect('3'.isDigit()).toBe(true);
      expect('34'.isDigit()).toBe(false);
      expect('bee'.isDigit()).toBe(false);
      expect('e'.isDigit()).toBe(false);
    });
  });

  describe('numberWords function', function () {
    it('should return the words for each digit in a string', function () {
      expect('456'.numberWords()).toBe('four five six');
      expect('old 789'.numberWords()).toBe('o l d seven eight nine');
    });
  });

  describe('doubleCheack function', function () {
    it('should return true if string contains double characters', function () {
      expect('green'.doubleCheck()).toBe(true);
      expect('red'.doubleCheck()).toBe(false);
    });
  });
});
