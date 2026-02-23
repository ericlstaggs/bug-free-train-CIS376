document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    function onScroll() {
        const scrollPos = window.scrollY || document.documentElement.scrollTop; 
        sections.forEach(section => {
            if (scrollPos >= section.offsetTop - 60 && scrollPos < section.offsetTop + section.offsetHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === section.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    fetch('../footer.html').then(response => {
        if(!response.ok) {
            throw new Error('File not Found@es');
        }        return response.text();
    }).then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
    }).catch(error => {
        console.error('Error loading footer:', error);
    }   );
    }
});    