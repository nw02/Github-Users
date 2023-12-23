var result = document.getElementById("result");

function GetUser(user) {
    return fetch(`https://api.github.com/users/${user}`)
        .then((data) => data.json())
        .catch((err) => console.log(err))
}

async function ShowUser(user) {
    try {
        let userInfo = await GetUser(user)

        let info = [
            `Account: ${userInfo.login}`,
            `Name: ${userInfo.name}`,
            `Public repositories: ${userInfo.public_repos}`,
            `${userInfo.avatar_url}`
        ]

        result.innerHTML = '';    

        for (var i = 0; i < info.length; i++) {
            if(info[i] != `${userInfo.avatar_url}` ){
                let item = document.createElement("p")
                item.textContent = info[i]
                result.appendChild(item)
            } else{
                console.log(`${userInfo.avatar_url}`)
                let item = document.createElement("img")
                item.src = `${userInfo.avatar_url}`
                result.appendChild(item)
            }
        }
    } catch (err) {
        console.log(`Erro : ${err}`)
    }
}

function ButtonSearch() {
    var userValue = document.getElementById("insertName").value;
    ShowUser(userValue);
    document.getElementById("insertName").value = '';
}