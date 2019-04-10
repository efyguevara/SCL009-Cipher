document.getElementById("cifrarBtn").addEventListener("click", () => {
    const toEncode = document.getElementById("textArea1").value;
    const offSet = Math.abs(parseInt(document.getElementById("inputOffSet").value));
    //let msgError = "Por favor verifica el valor del mensaje y/o el numero de desplazamiento";
    let result = cipher.encode(toEncode, offSet);
    document.getElementById("textArea2").innerHTML = result;
});

document.getElementById("descifrarBtn").addEventListener("click", () => {
    const toDecode = document.getElementById("textArea1").value;
    const offSet = Math.abs(parseInt(document.getElementById("inputOffSet").value));
    //let msgError = "Por favor verifica el valor del mensaje y/o el numero de desplazamiento";
    let result = cipher.decode(toDecode, offSet);
    document.getElementById("textArea2").innerHTML = result;
});

document.getElementById("resetbtn").addEventListener("click", () => {
   location.reload(true);
});