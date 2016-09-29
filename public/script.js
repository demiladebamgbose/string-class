(function () {

  // Prepare all event listeners.
  function start () {
    document.addEventListener('click', handleClick, false);
  }

  /**
    * @method handleClick
    *
    * Handle click event for dropdown menu.
    *
    * @param {String} e
    * @return {Void}
    */
  var handleClick = function (e) {
    var methods = ['hasVowels', 'toUpper', 'toLower', 'ucFirst',
      'isQuestion', 'words', 'wordCount', 'toCurrency', 'fromCurrency',
      'inverseCase', 'alternateCase', 'getMiddle', 'isDigit',
      'numberWords', 'doubleCheck'];

    if (methods.indexOf(e.target.id) !== -1) {
      performSwitch(e.target.id);
    }
  };

  /**
    * @method performSwitch
    *
    * Switches cases based on the clicked id.
    *
    * @param {String} clickedId
    * @return {Void}
    */
  var performSwitch = function (clickedId) {
    switch (clickedId) {
      case 'hasVowels':
        try {
          var value = getDomContent('stringInput').hasVowels();

          showResult(value);
        }
        catch (error) {
          showResult(error);
        }
      break;
      case 'toUpper':
        try {
          var value = getDomContent('stringInput').toUpper();

          showResult(value);
        }
        catch (error) {
          showResult(error);
        }
      break;
      case 'toLower':
        try {
          var value = getDomContent('stringInput').toLower();

          showResult(value);
        }
        catch(error){
          showResult(error);
        }
      break;
      case 'ucFirst':
        try {
          var value = getDomContent('stringInput').ucFirst();

          showResult(value);
        }
        catch (error) {
          document.getElementById(result).colour = red;
          showResult(error);
        }
      break;
      case 'isQuestion':
        try {
          var value = getDomContent('stringInput').isQuestion();

          showResult(value);
        }
        catch (error) {
          showResult(error);
        }
      break;
      case 'words':
        try {
          var value = getDomContent('stringInput').words();

          showResult(value);
        }
        catch (error ) {
          showResult(error);
        }
      break;
      case 'wordCount':
        try {
          var value = getDomContent('stringInput').wordCount();

          showResult(value);
        }
        catch (error) {
          showResult(error);
        }
      break;
      case 'toCurrency':
        try {
          var value = getDomContent('stringInput').toCurrency();

          showResult(value);
        }
        catch (error) {
          showResult(error);
        }
      break;
      case 'fromCurrency':
        try {
          var value = getDomContent('stringInput').fromCurrency();

          showResult(value);
        }
        catch (error) {
          showResult(error);
        }
      break;
      case 'inverseCase':
        try {
          var value = getDomContent('stringInput').inverseCase();

          showResult(value);
        }
        catch (error) {
          showResult(error);
        }
      break;
      case 'alternateCase':
        try {
          var value = getDomContent('stringInput').alternateCase();

          showResult(value);
        }
        catch (error) {
          showResult(error);
        }
      break;
      case 'getMiddle':
        try {
          var value = getDomContent('stringInput').getMiddle();

          showResult(value);
        }
        catch (error) {
          showResult(error);
        }
      break;
      case 'isDigit':
        try {
          var value = getDomContent('stringInput').isDigit();

          showResult(value);
        }
        catch (error) {
          showResult(error);
        }
      break;
      case 'numberWords':
        try {
          var value = getDomContent('stringInput').numberWords();

          showResult(value);
        }
        catch (error) {
          showResult(error);
        }
      break;
      case 'doubleCheck':
        try {
          var value = getDomContent('stringInput').doubleCheck();

          showResult(value);
        }
        catch (error) {
          showResult(error);
        }
      break;
      default:
        }
  };

  /**
    * @method getDomContent
    *
    * Return DOM content based on id.
    *
    * @param {String} id
    * @return {Sring}
    */
  var getDomContent = function (id) {
    return document.getElementById(id).innerHTML ||
      document.getElementById(id).value;
  };

  /**
    * @method showResult
    *
    * Displays value in the DOM.
    *
    * @param {String} value
    * @return {Void}
    */
  var showResult = function (value) {
    document.getElementById('result').innerHTML  = value;
  };

  //Add an onLoad event to the window object
  window.addEventListener('load', start, false);
})();
