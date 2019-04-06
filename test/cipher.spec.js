describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(window.cipher.encode('HOLA', 33), "OVSH");
    });
      
    it('Esto deberia retornar "Por favor verifica el valor del mensaje y/o el numero de desplazamiento" para "toEncode == ""', () => {
      assert.equal(window.cipher.encode(''), "Por favor verifica el valor del mensaje y/o el numero de desplazamiento");
    });
    it('debería retornar " " para " " para cualquier espacio ingresado', () => {
      assert.equal(window.cipher.encode('HOLA MUNDO', 25), "GNKZ LTMCN");
    });
  })  
/*  it('deberia ser un error', () => {
      assert.equal(typeof cipher.encode, 'Error');
    });*/
   


  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
    assert.equal(window.cipher.decode('OVSH', 33), "HOLA");
    });
    it('Esto deberia retornar "Por favor verifica el valor del mensaje y/o el numero de desplazamiento" para "toDecode == "" || offSet == ""', () => {
      assert.equal(window.cipher.decode('', 3), "Por favor verifica el valor del mensaje y/o el numero de desplazamiento");
    });
    it('debería retornar " " para " " para cualquier espacio ingresado', () => {
      assert.equal(window.cipher.decode('GNKZ LTMCN', 25), "HOLA MUNDO");
    });
  });
});

/*
    it('deberia ser un error', () => {
      assert.equal(typeof cipher.decode, 'function');
    });
    it('Esto deberia retornar un alert "Por favor verifica el valor del mensaje y/o el numero de desplazamiento" para "toDecode == "" || offSet == ""');
  assert.equal(window.cipher.decode('a', ''), "Por favor verifica el valor del mensaje y/o el numero de desplazamiento");*/