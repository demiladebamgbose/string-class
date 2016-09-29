(function () {
  // Prepare all event listeners.
  function start () {
    document.addEventListener('click', handleClick, false);
  }

  /**
    * @method handleClick
    * Handle click event for dropdown menu.
    * @param {String} e
    * @return {Void}
    */
  var handleClick = function (e) {
    var methods = [
      'hasVowels', 'toUpper', 'toLower', 'ucFirst','isQuestion',
      'words', 'wordCount', 'toCurrency', 'fromCurrency','inverseCase',
      'alternateCase', 'getMiddle', 'isDigit', 'numberWords', 'doubleCheck'
    ];

    if (methods.indexOf(e.target.id) !== -1) {
      callMethods(e.target.id);
    }
  };

  /**
    * @method callMethods
    * calls the different string metods based on the clicked id.
    * @param {String} methodName
    * @return {Void}
    */
  var callMethods = function (methodName) {
    try {
      showResult(getDomContent('stringInput')[methodName]());
    }
    catch (error) {
      showResult(error);
    }
  };

  /**
    * @method getDomContent
    * Return DOM content based on id.
    * @param {String} id
    * @return {Sring}
    */
  var getDomContent = function (id) {
    return document.getElementById(id).innerHTML ||
      document.getElementById(id).value;
  };

  /**
    * @method showResult
    * Displays value in the DOM.
    * @param {String} value
    * @return {Void}
    */
  var showResult = function (value) {
    document.getElementById('result').innerHTML  = value;
  };

  //Add an onLoad event to the window object
  window.addEventListener('load', start, false);
})();
