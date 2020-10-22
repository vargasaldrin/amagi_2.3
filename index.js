userForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch('https://httpbin.org/post', {
        method: 'POST',
        body: formData
    })
        .then(resp => resp.json())
        .then(json => console.log(json))
        .catch(err => console.error(err));

    message.style.opacity = 1;
});