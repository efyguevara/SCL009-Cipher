describe('cipher', () => {
  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {
    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });
    //Testeando cifrado de letras mayúsculas  
    it('debería retornar "bcdefghijklmnopqrstuvwxyz{" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(window.cipher.encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 33), "bcdefghijklmnopqrstuvwxyz{");
    });
    //Testeando cifrado de minusculas
    it('debería retornar " kwlsox*p!xmsyxk*myx*wsx!}m!vk}" para "tambien funciona con minusculas" con offset 7624', () => {
      assert.equal(window.cipher.encode('tambien funciona con minusculas', 7624), " kwlsox*p!xmsyxk*myx*wsx!}m!vk}");
    });
    //Probando cifre los espacios
    it('debería retornar "aheZ9fng]h" para "HOLA MUNDO"', () => {
      assert.equal(window.cipher.encode('HOLA MUNDO', 25), "aheZ9fng]h");
    });
    //Testeando impresion de letra "ñ" en minúscula
    it('debería retornar "w;>.+*G-.G.ñ.<G627><,>5*<" para "Probando las eñes minúsculas" con offset 979', () => {
      assert.equal(window.cipher.encode('Prueba de eñes minusculas', 979), "w;>.+*G-.G.ñ.<G627><,>5*<");
    });
    //Testeando impresion de letra "Ñ" en mayúscula
    it('debería retornar "^"%spo.q}|.sÑs#.{o)%#q%zo#" para "Prueba con eÑes mayusculas" con offset 578', () => {
      assert.equal(window.cipher.encode('Prueba con eÑes mayusculas', 578), '^"%spo.q}|.sÑs#.{o)%#q%zo#');
    });
    //Testeando cifrado de caracteres especiales: ! " # $ % & ' ) ( * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | }
    it('Esto deberia retornar "4r2r0r#rsrS" para "@ > < / ! _" con offset 82' , () => {
      assert.equal(window.cipher.encode('@ > < / ! _', 82), "4r2r0r#rsrS");
    });
    //Testeando cifrado de números: 0123456789
    it('Esto deberia retornar "+y4y3y2y1y0y/y.y-y," para "0 9 8 7 6 5 4 3 2 1" con offset 2345', () => {  
      assert.equal(window.cipher.encode('0 9 8 7 6 5 4 3 2 1', 2345), '+y4y3y2y1y0y/y.y-y,');
    });
    //Testeando la impresion de vocales acentuadas en mayúscula
    it('Esto deberia retornar "ÁÉÍÓÚ" para "ÁÉÍÓÚ" con offset 2345', () => {  
      assert.equal(window.cipher.encode('ÁÉÍÓÚ', 2), 'ÁÉÍÓÚ');
    });
    //Testeando la impresion de vocales acentuadas en minúscula
    it('Esto deberia retornar "áéíóú" para "áéíóú" con offset 2345', () => {  
      assert.equal(window.cipher.encode('áéíóú', 4), 'áéíóú');
    });
    //Testeando que imprima un aviso cuando no se coloque valor al campo del mensaje
    it('Esto deberia retornar en el textArea2: "msgError" para "toEncode === ""', () => {
      assert.equal(window.cipher.encode("", 3), "msgError");
    });
  })  


  describe('cipher.decode', () => {
    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });
    //Testeando descifrado de letras mayúsculas
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para ";<=>?@ABCDEFGHIJKLMNOPQRST" con offset 88', () => {
      assert.equal(window.cipher.decode(';<=>?@ABCDEFGHIJKLMNOPQRST', 88), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });
    //Testeando descifrado de minúsculas
    it('debería retornar "abc" para "bcd" con offset 1', () => {
      assert.equal(window.cipher.decode('bcd', 1), "abc"); 
    });
    //Testeando descifrado de espacios
    it('debería retornar "p3A174@=L3A>/17=A" para "Descifro espacios" con offSet 1924', () => {
      assert.equal(window.cipher.decode('p3A174@=L3A>/17=A', 1924), "Descifro espacios");
    });
    //impresion de "ñ" minúscula
    it('debería retornar "Imprime eñe minuscula" para "Jnqsjnf!fñf!njovtdvmb`" con offset 1', () => {
      assert.equal(window.cipher.decode('Jnqsjnf!fñf!njovtdvmb', 1), "Imprime eñe minuscula");    
    });
    //impresion de "Ñ" mayúscula
    it('debería retornar "Prueba con eÑes mayusculas" para "^"%spo.q}|.sÑs#.{o)%#q%zo#" con offset 578', () => {
      assert.equal(window.cipher.decode('^"%spo.q}|.sÑs#.{o)%#q%zo#', 578), 'Prueba con eÑes mayusculas');
    });
    //Testeando descifrado de caracteres especiales: ! " # $ % & ' ) ( * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | }
    it('Esto deberia retornar "vuxuyuzu{u1u2u7uRut" para "! # $ % & : ; @ [ }" con offset 9', () => {
      assert.equal(window.cipher.decode('! # $ % & : ; @ [ }', 9), "vuxuyuzu{u1u2u7uRut");
    });
    //Testeando descifrado de números: 0123456789
    it('Esto deberia retornar "0123456789" para "OPQRSTUVWX" con offset 4543', () => {  
      assert.equal(window.cipher.decode('OPQRSTUVWX', 4543), '0123456789');
    });
    //Testeando la impresion de vocales acentuadas en mayúscula
    it('Esto deberia retornar "ÁÉÍÓÚ" para "ÁÉÍÓÚ" con offset 2345', () => {  
      assert.equal(window.cipher.decode('ÁÉÍÓÚ', 2), 'ÁÉÍÓÚ');
    });
    //Testeando la impresion de vocales acentuadas en minúscula
    it('Esto deberia retornar "áéíóú" para "áéíóú" con offset 2345', () => {  
      assert.equal(window.cipher.decode('áéíóú', 4), 'áéíóú');
    });
    //Testeando que imprima un mensaje cuando no se coloque valor al mensaje o al offset
    it('Esto deberia retornar en el textArea2: "msgError" para "toDecode === ""', () => {
      assert.equal(window.cipher.decode('', 3), "msgError");
    });
    

  });
})