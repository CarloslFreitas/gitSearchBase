
const getUserProfileGitHub = async (userName) =>{
    const userProfile = await fetch(`https://api.github.com/users/${userName}`, {
        method: 'GET'
    })
    .then((response) => {
        if(response.ok){
            getUserRepositoryGitHub(userName)
            return response.json()
        }else{
            throw new Error('Algo de errado')
        }
    })
    .catch((error) =>{ 
        console.error(error);
    })
    // return userProfile
    localStorage.setItem('Github:User', JSON.stringify(userProfile)) 
}
const getUserRepositoryGitHub = async (userName) => {
    const userRepositorys = await fetch(`https://api.github.com/users/${userName}/repos`, {
        method: 'GET'
    })
    .then(response => response.json() )
    localStorage.setItem('Github:UserRepos', JSON.stringify(userRepositorys)) 
    // return userRepositorys
}
const catchValueInput = () => {
    const button = document.querySelector('.button__search')
    const input = document.querySelector('#inputSearch')
    let userFind = ''
    
    button.addEventListener('click', () => {
        userFind = input.value  
        input.value = ''
        console.log(userFind)
        location.replace('/gitSearchBase_CarloslFreitas/src/pages/profile.html')
    })
    return userFind
}

const userReturned = await getUserProfileGitHub('CarloslFreitas')
// const repositorysReturned = await getUserRepositoryGitHub('CarloslFreitas')
catchValueInput()


