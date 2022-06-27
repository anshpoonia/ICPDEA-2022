const form = document.getElementById('registration-form');

form.addEventListener('submit', ev => submitForm(ev))


async function submitForm(e)
{
    document.querySelector('#button').disabled = true;
    e.preventDefault();

    const a = await fetch("https://icpdea.herokuapp.com/api/registration", {
        method: 'POST',
        headers: {

            'Content-Type': 'text/plain'
        },
        body: JSON.stringify({
            name: document.querySelector('#registration-form .name').value,
            affiliation: document.querySelector('#registration-form .affiliation').value,
            designation: document.querySelector("#registration-form .designation").value,
            email: document.querySelector('#registration-form .email').value,
            phone: document.querySelector('#registration-form .phone').value,
            country: document.querySelector('#registration-form .country').value,
            address: document.querySelector('#registration-form .address').value,
            isBMU: document.querySelector('#registration-form .belong').value,
            gender: document.querySelector('#registration-form .gender').value,
        })

    })

    form.innerHTML = `<p class='content'>Thank you for registering. You will get conformation of your registration in 2-3 days after payment of registration fees has been paid.<br>You can pay registration fee by <a href="https://maitri.bmu.edu.in/asd_EventPublicUserMaster.htm?eventID=5">clicking here</a> </p>`
}