const btnSidebar = document.getElementById('side-bar')
const sidebar = document.getElementById('cabecalho__lista-sidebar')

btnSidebar.addEventListener('click', function() {

    mostraSideBar()

})

function mostraSideBar() {

    if(sidebar.style.display === 'none') {
        sidebar.style.display = 'block'
    } else {
        sidebar.style.display = 'none'
    }

}

