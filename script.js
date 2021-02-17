const toggleBtn = document.querySelectorAll('.faq-toggle')


toggleBtn.forEach(el => {
    el.addEventListener('click', () => {
        el.parentNode.classList.toggle('active');
    })
});


