const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', () => {
    document.querySelector('.navBarLinks').classList.toggle('open');
    menuButton.classList.toggle('open');
})

loadData()

async function loadData()
{
    const res = await fetch('https://icpdea.herokuapp.com/api/candidates',
        {
            method: 'GET',
            headers: {
                "Accept": "application/json"
            }
        })
    const data = await res.json()
    const listHolder = document.querySelector('#participantsList');

    let content = "<table><tr><th>Name</th><th>Affiliation</th><th>Email</th></tr>"

    data.forEach(value => {

        const name = value.name;
        const affiliation = value.affiliation;
        const email = value.email;

        const temp = `<tr><td>${name}</td><td>${affiliation}</td><td>${email}</td></tr>`;
        content = content + temp;
    });

    content = content + "</table>"
    listHolder.innerHTML = content;
}