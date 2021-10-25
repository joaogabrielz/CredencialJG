//----------------Mudar Credencial dinamicamente para outras contas..
const LinksSocialMedia = {
    github:'wesley180320',
   // youtube:'',
    facebook:'Wesley_de_Souza',
    instagram:'wesleyds.souza'
   // twitter:''
}
function changeSocialMediaLinks(){
    for(let li of sociallinks.children) {
        const social = li.getAttribute('class')
      
        li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
    }
}
changeSocialMediaLinks();

//pegar usuario github
function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`
    
    fetch(url).then(response => response.json())
    .then(data => {
        username.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userImage.src = data.avatar_url
        userLogin.textContent = data.login
    })
}
getGitHubProfileInfos();
