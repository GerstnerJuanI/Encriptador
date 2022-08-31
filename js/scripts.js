let img = document.querySelector('#img-texto');
let textarea = document.querySelector('#respuesta');

let boton1 = document.querySelector('#boton1');
let boton2 = document.querySelector('#boton2');
let textoSinEnc = document.getElementById('inputEncrip');
let textodesc = document.getElementById('textodesc');

window.addEventListener('load', init, false);

function init() {
    img.style.display = 'block';
    textarea.style.display = 'none';
    boton1.addEventListener('click', function (e) {
        e.preventDefault();
        img.style.display = 'none';
        textarea.style.display = 'block';
        encriptar(e);
    }, false);
    boton2.addEventListener('click', function (e) {
        e.preventDefault();
        img.style.display = 'none';
        textarea.style.display = 'block';
        desencriptar(e);
    }, false);
};

function encriptar(e) {
    e.preventDefault();
    textodesc.value = '';
    let textoAEncriptar = textoSinEnc.value;
    let expReg = /[^a-z ñ]+/;
    let expRegVocal = /aeiou/;
    const regla = [
        {letra:'a',codigo:'ai'},
        {letra:'e',codigo:'enter'},
        {letra:'i',codigo:'imes'},
        {letra:'o',codigo:'ober'},
        {letra:'u',codigo:'ufat'}
    ];
    
    if (!expReg.test(textoAEncriptar)) { // con esto verificamos que solo se introduzcan letras minusculas 
        //let textoEncriptado = textoAEncriptar;
        let textoEncriptado = textoAEncriptar.split('');
        textoEncriptado = textoEncriptado.map(
                (letra) => { // se toma cada letra del texto
                        for (const element in regla) { // se recorre la regla
                            if(regla[element].letra == letra) // si la letra coincide con la regla..
                                letra = letra.replace(regla[element].letra,regla[element].codigo); //..se remplaza por el codigo
                        }
                        return letra;
                }
            );/* se debió utilizar map en cada letra ya que si se utiliza replaceAll 
            se corre riesgo de codificar nuevamente el texto ya codificado*/
        textodesc.value = textoEncriptado.join('');
    } else {
        textodesc.value = 'SOLO SE PERMITEN LETRAS MINUSCULAS! Intentelo nuevamente.';
        return;
    }
}

function desencriptar(e) {
    e.preventDefault();
    textodesc.value = '';
    let textoAEncriptar = textoSinEnc.value;
    let expReg = /[^a-z ñ]+/;
    const regla = [
        {letra:'a',codigo:'ai'},
        {letra:'e',codigo:'enter'},
        {letra:'i',codigo:'imes'},
        {letra:'o',codigo:'ober'},
        {letra:'u',codigo:'ufat'}
    ];
    if (!expReg.test(textoAEncriptar)) { // con esto verificamos que solo se introduzcan letras minusculas 
        let textoEncriptado = textoAEncriptar;
        for (const element in regla) {
            textoEncriptado = textoEncriptado.replaceAll(regla[element].codigo,regla[element].letra);
        }
        textodesc.value = textoEncriptado;
    } else {
        textodesc.value = 'SOLO SE PERMITEN LETRAS MINUSCULAS! Intentelo nuevamente.';
        return;
    }
}

function copyToClipBoard() {

    var content = document.getElementById('textodesc');
    
    content.select();
    document.execCommand('copy');

    alert("Copiado");
}
// texto de prueba:
//fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober
