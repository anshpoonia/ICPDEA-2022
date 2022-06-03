const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', () => {
    document.querySelector('.navBarLinks').classList.toggle('open');
    menuButton.classList.toggle('open');
})


const form = document.getElementById('registration-form');

form.addEventListener('submit', ev => submitForm(ev))

function submitForm(e)
{
    e.preventDefault();

    fetch("https://icpdea.herokuapp.com/api/registration", {
        method: 'POST',
        mode: 'no-cors',
        headers: {

            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: document.querySelector('#registration-form .name').value,
            affiliation: document.querySelector('#registration-form .affiliation').value,
            email: document.querySelector('#registration-form .email').value,
            phone: document.querySelector('#registration-form .phone').value,
            country: document.querySelector('#registration-form .country').value,
            address: document.querySelector('#registration-form .address').value,
            isBMU: document.querySelector('#registration-form .belong').value,
            gender: document.querySelector('#registration-form .gender').value,
        })

    })
        .then(res => res.json())
        .then(data => {
            if(data.code === "SUCCESS")
            {
                form.innerHTML = `<p class='content'>Thank you for registering.</p>`
            }
        })
}