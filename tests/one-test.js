"use strict";

var assert = require('chai').assert;

describe('Our country selector', function () {

  it('should initially have nothing selected', function(){
    $('#selection').text().should.equal('');
  });

});
