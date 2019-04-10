window.cipher = {
  encode: (toEncode, offSet) => {
    let codAscii; /*guarda el texto cifrado aun en Ascii*/
    let codCifrado; /*convierte el Ascii en alfabeto normal*/
    let finCifrado = "";
    let msgError = "Por favor verifica el valor del mensaje y/o el numero de desplazamiento";
    for (let i = 0; i <= toEncode.length; i++) {
      let toAscii = toEncode.charCodeAt(i);

      if (toAscii >= 32 && toAscii <= 125) {
        codAscii = (toAscii - 32 + offSet) % 94 + 32;
        codCifrado = String.fromCharCode(codAscii);
        finCifrado += codCifrado;
      } else if (toAscii === 241 || toAscii === 209) {
        codAscii = toAscii
        codCifrado = String.fromCharCode(codAscii);
        finCifrado += codCifrado;
      } else if (toAscii === 193 || toAscii === 225) {
        codAscii = toAscii
        codCifrado = String.fromCharCode(codAscii);
        finCifrado += codCifrado;
      } else if (toAscii === 201 || toAscii === 233) {
        codAscii = toAscii
        codCifrado = String.fromCharCode(codAscii);
        finCifrado += codCifrado;
      } else if (toAscii === 205 || toAscii === 237) {
        codAscii = toAscii
        codCifrado = String.fromCharCode(codAscii);
        finCifrado += codCifrado;
      } else if (toAscii === 211 || toAscii === 243) {
        codAscii = toAscii
        codCifrado = String.fromCharCode(codAscii);
        finCifrado += codCifrado;
      } else if (toAscii === 218 || toAscii === 250) {
        codAscii = toAscii
        codCifrado = String.fromCharCode(codAscii);
        finCifrado += codCifrado;
      } else if (offSet === "" || toEncode === "") {
        return msgError;
      }
    } return finCifrado
  },

  decode: (toDecode, offSet) => {
    let codAscii; /*guarda el texto cifrado aun en Ascii*/
    let codDescifrado; /*convierte el Ascii en alfabeto normal*/
    let finDescifrado = "";
    let msgError = "Por favor verifica el valor del mensaje y/o el numero de desplazamiento";

    for (let i = 0; i <= toDecode.length; i++) {
      let toAscii = toDecode.charCodeAt(i);

      if (toAscii >= 32 && toAscii <= 125) {
        codAscii = (toAscii - 32 - offSet) % 94 + 32;
        if (codAscii <= 31)
          codAscii = codAscii + 94;
        codDescifrado = String.fromCharCode(codAscii);
        finDescifrado += codDescifrado;
      } else if (toAscii === 241 || toAscii === 209) {
        codAscii = toAscii
        codDescifrado = String.fromCharCode(codAscii);
        finDescifrado += codDescifrado;
      } else if (toAscii === 193 || toAscii === 225) {
        codAscii = toAscii
        codDescifrado = String.fromCharCode(codAscii);
        finDescifrado += codDescifrado;
      } else if (toAscii === 201 || toAscii === 233) {
        codAscii = toAscii
        codDescifrado = String.fromCharCode(codAscii);
        finDescifrado += codDescifrado;
      } else if (toAscii === 205 || toAscii === 237) {
        codAscii = toAscii
        codDescifrado = String.fromCharCode(codAscii);
        finDescifrado += codDescifrado;
      } else if (toAscii === 211 || toAscii === 243) {
        codAscii = toAscii
        codDescifrado = String.fromCharCode(codAscii);
        finDescifrado += codDescifrado;
      } else if (toAscii === 218 || toAscii === 250) {
        codAscii = toAscii
        codDescifrado = String.fromCharCode(codAscii);
        finDescifrado += codDescifrado;
      } else if (offSet === "" || toDecode === "") {
        return msgError;
      }
    } return finDescifrado
  }
};