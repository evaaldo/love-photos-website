const btnShowHide = document.getElementById('mostra-produtos')
const mostruario = document.getElementById('mostruario__escondido')

btnShowHide.addEventListener('click', function() {

    showHide()

})

function showHide() {

    if(mostruario.style.display === 'none') {
        mostruario.style.display = 'block'
        btnShowHide.innerHTML = `
        Mostrar menos produtos<br><i class="fa-solid fa-arrow-up"></i>
        `
    } else {
        mostruario.style.display = 'none'
        btnShowHide.innerHTML = `
        Mostrar mais produtos<br><i class="fa-solid fa-arrow-down"></i>
        `
    }

}
