const assert = require('chai').assert;
global.window = global;
require('../public/src/js/model/validate');

describe('validar input vacio', () => {
  describe('el input no debe estar vacio', () => {
    it('deberia ser una función', () => {
      assert.equal(typeof validateInput, 'function');
    });
    it('input no debe estar vacio', () => {
      assert.equal(validateInput('null'), false);
      assert.equal(validateInput(''), false);
      assert.equal(validateInput('pan'), true);
    });
    it('desabiliatr boton campo vacio', () => {
      assert.equal(validateInput(search.value === ''), btnSearch.disabled = true);
    });
  });
});