String.prototype.hasVowels = function () {
  var vowelExp = /[a|e|i|o|u]/i;
  if (vowelExp.test(this)) {
    return true;
  }
  return false;
};
