const assert = require('chai').assert;
global.window = global;
require('public/src/js/model/validate');

describe('validar input vacio', () => {
  describe('el input no debe estar vacio', () => {
    it('deberia ser una función', () => {
      assert.equal(typeof validateInput, 'function');
    });
    it('input no debe estar vacio', () => {
      assert.equal(validateInput(inputTxt.value === 'null'), false);
      assert.equal(validateInput(inputTxt.value === ''), false);
      assert.equal(validateCard(inputTxt.value === 'a12s'), true);
    });
    it('desabiliatr boton campo vacio', () => {
      assert.equal(btnAddList(inputTxt.value === ''), btnAdd.disabled = true);
    });
  });
});