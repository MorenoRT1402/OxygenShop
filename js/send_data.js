function sendData(formData) {
    const api = 'https://jsonplaceholder.typicode.com/';
    const apiPost = `${api}posts`;

    fetch(apiPost, {
        method: 'POST',
        header: {
            'Content-Type': 'applications/json'
        },
        body: JSON.stringify(formData)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Datos enviados correctamente');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error al enviar los datos');
        });
}

form.addEventListener('submit', event => {
    event.preventDefault();

    if(!validateForm(event)) return;

    const name = event.target.elements["name"];
    const email = event.target.elements["email"];
    const formData = { name : name.value, email : email.value };
    sendData(formData);
})
