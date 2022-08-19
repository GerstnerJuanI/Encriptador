window.addEventListener('load', init, false);
function init() {
    let img = document.querySelector('#img-texto');
    let textarea = document.querySelector('#textodesc');
    img.style.display= 'block';
    textarea.style.display = 'none';
    let boton = document.querySelector('#boton1');
    boton.addEventListener('click', function (e) {
        if(img.style.display === 'block' && textarea.style.display === 'none'){
            img.style.display = 'none';
            textarea.style.display = 'block';
        }else{
            img.style.display= 'block';
            textarea.style.display= 'none';
        }
    }, false);
}