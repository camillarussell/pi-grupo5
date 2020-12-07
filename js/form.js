/* ---Campo nome--- */
let formNome = document.getElementById("inputNome");

formNome.addEventListener("focus", myFocusNome, true);
formNome.addEventListener("blur", myBlurNome, true);

function myFocusNome() {
  document.getElementById("inputNome").style.backgroundColor = "rgba(255, 255, 255, 0.2)";
}

function myBlurNome() {
  document.getElementById("inputNome").style.backgroundColor = "";
}

/* ---Campo numero--- */
let formNumero = document.getElementById("inputNumero");

formNumero.addEventListener("focus", myFocusNumero, true);
formNumero.addEventListener("blur", myBlurNumero, true);

function myFocusNumero() {
  document.getElementById("inputNumero").style.backgroundColor = "rgba(255, 255, 255, 0.2)";
}

function myBlurNumero() {
  document.getElementById("inputNumero").style.backgroundColor = "";
}

/* ---Campo email--- */
let formEmail4 = document.getElementById("inputEmail4");

formEmail4.addEventListener("focus", myFocusEmail4, true);
formEmail4.addEventListener("blur", myBlurEmail4, true);

function myFocusEmail4() {
  document.getElementById("inputEmail4").style.backgroundColor = "rgba(255, 255, 255, 0.2)";
}

function myBlurEmail4() {
  document.getElementById("inputEmail4").style.backgroundColor = "";
}

/* ---Campo receberEmail--- */
let formReceberEmail = document.getElementById("inputReceberEmail");

formReceberEmail.addEventListener("focus", myFocusReceberEmail, true);
formReceberEmail.addEventListener("blur", myBlurReceberEmail, true);

function myFocusReceberEmail() {
  document.getElementById("inputReceberEmail").style.backgroundColor = "rgba(255, 255, 255, 0.2)";
}

function myBlurReceberEmail() {
  document.getElementById("inputReceberEmail").style.backgroundColor = "";
}

/* ---Campo receberZap--- */
let formReceberZap = document.getElementById("inputReceberZap");

formReceberZap.addEventListener("focus", myFocusReceberZap, true);
formReceberZap.addEventListener("blur", myBlurReceberZap, true);

function myFocusReceberZap() {
  document.getElementById("inputReceberZap").style.backgroundColor = "rgba(255, 255, 255, 0.2)";
}

function myBlurReceberZap() {
  document.getElementById("inputReceberZap").style.backgroundColor = "";
}

/* ---Campo receberFrequencia--- */
let formReceberFrequencia = document.getElementById("inputReceberFrequencia");

formReceberFrequencia.addEventListener("focus", myFocusReceberFrequencia, true);
formReceberFrequencia.addEventListener("blur", myBlurReceberFrequencia, true);

function myFocusReceberFrequencia() {
  document.getElementById("inputReceberFrequencia").style.backgroundColor = "rgba(255, 255, 255, 0.2)";
}

function myBlurReceberFrequencia() {
  document.getElementById("inputReceberFrequencia").style.backgroundColor = "";
}