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

});
