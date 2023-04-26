
const getUserProfileGitHub = async (userName) =>{
    const userProfile = await fetch(`https://api.github.com/users/${userName}`, {
        method: 'GET'
    })
    .then((response) => {
        if(response.ok){
            return response.json()
        }else{
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
    .then((response) => {
        if(response.ok){
            return response.json()
        }else{
            throw new Error('Algo de errado')
        }
    })
    .catch((error) => {
        console.error(error);
    })
    return userRepositorys
}

const userReturned = await getUserProfileGitHub('CarloslFreitas')
const repositorysReturned = await getUserRepositoryGitHub('CarloslFreitas')

console.log(userReturned)
console.log(repositorysReturned)
