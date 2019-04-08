window.cipher = {
  encode: (toEncode, offSet) => {
    let codAscii; /*guarda el texto cifrado aun en Ascii*/
    let codCifrado; /*convierte el Ascii en alfabeto normal*/
    let finCifrado = "";

    if (toEncode == "" || offSet == "") {
      alert("Por favor verifica el valor del mensaje y/o el numero de desplazamiento");
    }

    for (let i = 0; i <= toEncode.length; i++) {
      let toAscii = toEncode.charCodeAt(i);    

      if (toAscii >= 65 && toAscii <= 90) {
        codAscii = (toAscii - 65 + offSet) % 26 + 65;
        codCifrado = String.fromCharCode(codAscii);
        finCifrado += codCifrado;
      } else if (toAscii >= 97 && toAscii <= 122){
        codAscii = (toAscii - 97 + offSet) % 26 + 97;
        codCifrado = String.fromCharCode(codAscii);
        finCifrado += codCifrado;
      } else if (toAscii === 32) {
        codAscii = (toAscii - 32 + offSet) % 1 + 32;
        codCifrado = String.fromCharCode(codAscii);
        finCifrado += codCifrado;
      }else if(toAscii === 241 || toAscii === 209) {
        codAscii = toAscii
        codCifrado = String.fromCharCode(codAscii);
        finCifrado += codCifrado;
      }
    }
    return finCifrado;
  },


  decode: (toDecode, offSet) => {
    let codAscii; /*guarda el texto cifrado aun en Ascii*/
    let codDescifrado; /*convierte el Ascii en alfabeto normal*/
    let finDescifrado = "";

    if (toDecode == "" || offSet == "") {
      alert("Por favor verifica el valor del mensaje y/o el numero de desplazamiento");
    }

    for (let i = 0; i <= toDecode.length; i++) {
      let toAscii = toDecode.charCodeAt(i);

      if (toAscii >= 65 && toAscii <= 90) {
        codAscii = (toAscii + 65 - offSet) % 26 + 65;
        if (codAscii <= 64)
          codAscii = codAscii + 26;
        codDescifrado = String.fromCharCode(codAscii);
        finDescifrado += codDescifrado;
      } else if (toAscii >= 97 && toAscii <= 122){
        codAscii = (toAscii - 97 - offSet) % 26 + 97;
        if (codAscii <= 96)
          codAscii = codAscii + 26;
        codDescifrado = String.fromCharCode(codAscii);
        finDescifrado += codDescifrado;
      } else if (toAscii === 32) {
        codAscii = (toAscii + 32 - offSet) % 1 + 32;
        codDescifrado = String.fromCharCode(codAscii);
        finDescifrado += codDescifrado;
      }else if(toAscii === 241 || toAscii === 209) {
        codAscii = toAscii
        codDescifrado = String.fromCharCode(codAscii);
        finDescifrado += codDescifrado; 
      }
    }
    return finDescifrado;
  }
};
