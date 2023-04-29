const userInfo = JSON.parse(localStorage.getItem('Github:User'))
const userRepos = JSON.parse(localStorage.getItem('Github:UserRepos'))

// console.log(userInfo);
// console.log(userRepos);

const renderProfileUser = user => {
    const userContainer = document.querySelector('.user__container')
    const figure = document.createElement('figure')
    const imgUser = document.createElement('img')
    const nameUser = document.createElement('p')

    imgUser.src = user.avatar_url
    imgUser.alt = user.name
    nameUser.innerText = user.name
    nameUser.classList = 'user__name'

    userContainer.append(figure, nameUser)
    figure.appendChild(imgUser)

    buttonLogout()
}
const renderAllRepository = listRepos => {
    const repositoryList = document.querySelector('.repository__list')
    repositoryList.innerHTML = ' '
    // console.log(listRepos);
    listRepos.forEach(itemRepos => {
        repositoryList.appendChild(createItemListRepository(itemRepos))
    });
}
const createItemListRepository = itemRepos => {
    const itemLi = document.createElement('li')
    const repositoryTitle = document.createElement('h3')
    const repositoryDescription = document.createElement('p')

    repositoryTitle.innerText = itemRepos.name

    if(itemRepos.description){
        repositoryDescription.innerText = itemRepos.description
    }else{
        repositoryDescription.innerText = 'Sem descrição'
    }
    itemLi.classList = 'repository__item'
    repositoryTitle.classList = 'repository__title'
    repositoryDescription.classList = 'repository__description'

    itemLi.append(repositoryTitle, repositoryDescription, createButtonLink(itemRepos))

    return itemLi
}
const createButtonLink = itemRepos => {
    const buttonReposLink = document.createElement('button')
    buttonReposLink.classList = 'repository__button'
    buttonReposLink.innerText = 'Repositório'
    buttonReposLink.addEventListener('click', ()=> {
        open(itemRepos.html_url, '_blank')
    })
    return buttonReposLink
}
const buttonLogout = () => {
    const btnLogout = document.querySelector('.button__change-profile')

    btnLogout.addEventListener('click', () =>{
        localStorage.clear()
        location.replace('../../index.html')
    })
}

const calcScrollValue = () => {
    const scrollProgress = document.querySelector('#progress')
    // const progressValue = document.querySelector('#progress__value')
    const pos = document.documentElement.scrollTop
    const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrollValue = Math.round((pos * 100) / calcHeight)

    if(pos > 100){
        scrollProgress.style.display = 'flex'
    }else{
        scrollProgress.style.display = 'none'
    }
    scrollProgress.addEventListener('click', () =>{
        document.documentElement.scrollTop = 0
    })
    scrollProgress.style.background = 
    `conic-gradient(#d6336c ${scrollValue}%, #212529 ${scrollValue}%)`
}
onscroll = calcScrollValue
onload = calcScrollValue



renderProfileUser(userInfo)
renderAllRepository(userRepos)