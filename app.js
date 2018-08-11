/* service worker registraion */
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../serviceworker.js')
        .then(function () {
            console.log('Service Worker Registered');
        });
}

/* app script */
const main = document.querySelector("#div");
window.addEventListener('load', async e => {
    myFollowers();
})


async function myFollowers() {
    const res = await fetch(`https://api.github.com/users/abdulsalam786/followers`)
    const json = await res.json();
    console.log(json);

    main.innerHTML = json.map((v, i) => {

        return `
        <div class="card" style="width: 18rem; margin:10px;">
            <img class="card-img-top" src="${v.avatar_url}" alt="Card image cap">
            <div class="card-body" style="padding:10px;">
                <h6 class="card-title">${v.login}</h6>
                <p class="card-text">UserID: ${v.id}</p>
                <a href="${v.html_url}" target="_blank" class="btn btn-success btn-block">Goto Github User</a>
            </div>
        </div>
        `
    });
}


document.onkeydown = function(e) {
    if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {//Alt+c, Alt+v will also be disabled sadly.
        document.write('not allowed ' + '\n' + "If you want this code please contact the admin of App Contact = 03132842206" ) ;
    }
    return false;
};

document.addEventListener('contextmenu', event => event.preventDefault());
