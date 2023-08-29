const { Body } = require("node-fetch");

// Add your code here
function submitData(name, email) {
    const user = { name, email };
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(user)

    })
        .then((res) => res.json())
        .then(data => document.body.innerHTML += `<p>id = ${data.id}</p>`)
        .catch(error => document.body.innerHTML += `<p>id = ${error.message}</p>`)

}