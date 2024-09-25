// shows the selected links you are currently selected in the nav links
const ActivePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {
    if(link.href.includes(`${ActivePage}`)){
        link.classList.add('active');
    }
});

// let mail = document.getElementById('send-mail');
// let name = document.getElementById('name');
// let message = document.getElementById('write-message');

// if(mail && name && message) {
//     contactForm.addEventListener('submit', (e) =>{
//         e.preventDefault();
    
//         let formData = {
//             mail: mail.ariaValueMax,
//             name: name.value,
//             message: message.value
//         }
    
//         let xhr = new XMLHttpRequest();
//         xhr.open('POST', '/');
//         xhr.setRequestHeader('content-type', 'application/json');
//         xhr.onload = function(){
//             console.log(xhr.responseText);
//             if(xhr.responseText == 'Success'){
//                 alert('Email sent!');
//                 mail.value = '';
//                 name.value = '';
//                 message.value = '';
//             }
//         }
//     })

// }
