document.getElementById("cifrarBtn").addEventListener("click", () => {
    const toEncode = document.getElementById("textArea1").value.toUpperCase();
    const offSet = parseInt(document.getElementById("inputOffSet").value);
    let result = cipher.encode(toEncode, offSet)
    document.getElementById("textArea2").innerHTML = result;
});


document.getElementById("descifrarBtn").addEventListener("click", () => {

    const toDecode = document.getElementById("textArea1").value.toUpperCase();
    const offSet = parseInt(document.getElementById("inputOffSet").value);
    let result = cipher.decode(toDecode, offSet)
    document.getElementById("textArea2").innerHTML = result;
});

document.getElementById("resetbtn").addEventListener("click", () => {
    document.getElementById("textArea1").value = "";
    document.getElementById("inputOffSet").value = "";
    document.getElementById("textArea2").value = "";
});