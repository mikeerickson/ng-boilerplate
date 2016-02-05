(function () {

  module.exports = function(initValue) {
    return {
      addOne: function() {
        return initValue + 1;
      },
      subtractOne: function() {
        return initValue - 1;
      },
      add: function(value) {
        return initValue + value;
      }

    }
  }

})();


