describe('String Class', function () {

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
      expect('GOLDEN'.ucFirst()).toEqual('Golden');
      expect('goLd PlaTTed'.ucFirst()).toEqual('Gold platted');
      expect('a'.ucFirst()).toBe('A');
    });
  });

  describe('isQuestion function',function () {
    it('should return true for questions',function () {
      expect('Where?'.isQuestion()).toBeTruthy();
    });
    it('should return false for a statement',function () {
      expect('A big crowd.'.isQuestion()).toBeFalsy();
      expect('?'.isQuestion()).toBeFalsy();
    });
  });

  describe('words function', function () {
    it('should return an array of all the words in a string', function () {
      expect(Array.isArray('Oliver Twist'.words())).toBe(true);
      expect('This is sugar'.words()).toEqual(['This', 'is', 'sugar']);
      expect(''.words()).toEqual([]);
    });
  });

  describe('wordCount function', function () {
    it('should return the number of words in a string', function () {
      expect('I was here'.wordCount()).toBe(3);
      expect(''.wordCount()).toBe(0);
    });
  });

});
