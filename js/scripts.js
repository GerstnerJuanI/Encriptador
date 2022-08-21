    let img = document.querySelector('#img-texto');
    let textarea = document.querySelector('#textodesc');
    let boton1 = document.querySelector('#boton1');
    let textoSinEnc = document.getElementById('inputEncrip');
    let textodesc = document.getElementById('textodesc');
window.addEventListener('load', init, false);

function init() {
    img.style.display = 'block';
    textarea.style.display = 'none';

    boton1.addEventListener('click', function (e) {
        e.preventDefault();
        if (img.style.display === 'block' && textarea.style.display === 'none') {
            img.style.display = 'none';
            textarea.style.display = 'block';
        } else {
            img.style.display = 'block';
            textarea.style.display = 'none';
        }
    }, false);

    boton1.addEventListener('click',encriptar,false);
};

function encriptar(e) {
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
            textoEncriptado = textoEncriptado.replaceAll(regla[element].letra,regla[element].codigo);
        }
        textodesc.value = textoEncriptado;
    } else {
        textodesc.value = 'SOLO SE PERMITEN LETRAS MINUSCULAS! Intentelo nuevamente.';
        return;
    }
}
