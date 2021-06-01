goog.module('a');

exports.Bar =
  /**
   * @param {string} value 
   */
  function(value) {
    return `foo ${value}`;
  };
