// shows the selected links you are currently selected in the nav links
const ActivePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {
    if(link.href.includes(`${ActivePage}`)){
        link.classList.add('active');
    }
});

// making the send email work