'use strict';

var $ = require('jquery');

module.exports = {
  init:             function () {
    $('#country')
        .on('change', this.displaySelectedCountry);
  },
  pickAustralia:    function () {
    $('#country')
        .val('au')
        .trigger();
  },
  pickUnitedStates: function () {
    $('#country')
        .val('au')
        .trigger();
  },
  displaySelectedCountry: function(){
    var selectedCountryName = $('#country').find(':selected').text();
    $('#selection').html(selectedCountryName);
  }
};
