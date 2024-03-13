function encriptarTexto(){
    var textoSinEncrip = document.querySelector('#encrypted-Text').value;
    var textoConEncrip = textoSinEncrip.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    console.log(textoConEncrip)

    var textArea = document.querySelector('#mensaje')
    textArea.value = textoConEncrip
}

function desencriptadorTexto(){
    var textoConEncrip = document.querySelector('#encrypted-Text').value;
    var textoSinEncrip = textoConEncrip.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    console.log(textoSinEncrip)

    var textArea = document.querySelector('#mensaje')
    textArea.value = textoSinEncrip
}

encriptarTexto();
desencriptadorTexto();