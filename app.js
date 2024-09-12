const ActivePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {
    if(link.href.includes(`${ActivePage}`)){
        link.classList.add('active');
    }
})

const contactForm = document.getElementById('contact-form')
let email = document.getElementById('send-email');
let name = document.getElementById('send-email');
let messages = document.getElementById('send-email');

if(contactForm && email && name && messages){

    contactForm.addEventListener('submit', (e)=>{
        e.preventDefault();
       
        let formData = {
            email: email.value,
            name: name.value,
            messages: messages.value
        }
    
    fetch('https://127.0.0.1:3000', {
            method: 'POST',  // Ensure this matches what the server expects
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));

        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/');
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.onload = function(){
            console.log(xhr.responseText);

            if(xhr.responseText == 'success'){
                alert('Email sent')
                email.value = '';
                name.value = '';
                subject.value = '';

            }
        }

        xhr.send(JSON.stringify (formData))
        alert('email sent!')
        console.log(formData)
    });

}
