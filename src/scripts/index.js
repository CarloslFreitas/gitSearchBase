
const getUserProfileGitHub = async (userName) =>{
    const userProfile = await fetch(`https://api.github.com/users/${userName}`, {
        method: 'GET'
    })
    .then(async (res) => {
        if(res.ok){
            const response = await res.json()
            await getUserRepositoryGitHub(userName)
            localStorage.setItem('Github:User', JSON.stringify(response)) 
            location.href ='/gitSearchBase_CarloslFreitas/src/pages/profile.html'
            return response
        }
        else{
            location.replace('/gitSearchBase_CarloslFreitas/src/pages/error.html')
            throw new Error('Algo de errado')
        }
    })
    .catch((error) =>{ 
        console.error(error);
    })

    return userProfile
}
const getUserRepositoryGitHub = async (userName) => {
    const userRepositorys = await fetch(`https://api.github.com/users/${userName}/repos`, {
        method: 'GET'
    })
    .then(response => response.json() )
    localStorage.setItem('Github:UserRepos', JSON.stringify(userRepositorys)) 
}
const catchUserInput = () => {
    const button = document.querySelector('.button__search')
    const input = document.querySelector('#inputSearch')
    const divLoader = document.querySelector('.Loader-imgs__container')
  
    button.addEventListener('click', async () => {
        divLoader.classList.remove('hidden')
        const userName = input.value

        localStorage.setItem('UserTyped', userName)
        await getUserProfileGitHub(userName)
        divLoader.classList.add('hidden')
    })
}
catchUserInput()
