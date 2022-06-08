function encriptador(){
    var texto = document.getElementById("texto").value.toLowerCase();
    
    var letraCifrada = texto.replace(/e/igm,"enter");
    var letraCifrada = letraCifrada.replace(/o/igm,"ober");
    var letraCifrada = letraCifrada.replace(/i/igm,"imes");
    var letraCifrada = letraCifrada.replace(/a/igm,"ai");
    var letraCifrada = letraCifrada.replace(/u/igm,"ufat");

    document.getElementById("imgmuneco").style.display = "none";
    document.getElementById("mensajetitulo").style.display = "none";
    document.getElementById("text2").innerHTML= letraCifrada;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherir";

    text2.classList.add("texto-listo");

}

function desencriptar(){
    var texto = document.getElementById("texto").value.toLowerCase();
    
    var letraCifrada = texto.replace(/ai/igm,"a");
    var letraCifrada = letraCifrada.replace(/enter/igm,"e");
    var letraCifrada = letraCifrada.replace(/imes/igm,"i");
    var letraCifrada = letraCifrada.replace(/ober/igm,"o");
    var letraCifrada = letraCifrada.replace(/ufat/igm,"u");

    document.getElementById("imgmuneco").style.display = "none";
    document.getElementById("mensajetitulo").style.display = "none";
    document.getElementById("text2").innerHTML= letraCifrada;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherir";

    text2.classList.add("texto-listo");

}
