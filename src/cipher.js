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
      if (toAscii >= 65 && toAscii <= 90 || toAscii === 165) {
        codAscii = (toAscii - 65 + offSet) % 26 + 65;
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
        codDescifrado = String.fromCharCode(codAscii);
        finDescifrado += codDescifrado;
      }
    }

    return finDescifrado;
  }
};
