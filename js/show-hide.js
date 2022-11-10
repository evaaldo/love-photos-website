const btnShowHide = document.getElementById('mostra-produtos')
const mostruario = document.getElementById('mostruario__escondido')

btnShowHide.addEventListener('click', function() {

    showHide()

})

function showHide() {

    if(mostruario.style.display === 'none') {
        mostruario.style.display = 'block'
    } else {
        mostruario.style.display = 'none'
    }

}
