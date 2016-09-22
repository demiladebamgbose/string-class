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
});
