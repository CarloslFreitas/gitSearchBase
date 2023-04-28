const buttonBackToSearch = () => {
    const button = document.querySelector('.button__new-search')
    button.addEventListener('click', () =>{
        localStorage.clear()
        location.replace('../../index.html')
    })
}
buttonBackToSearch()