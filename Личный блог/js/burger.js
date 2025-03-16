document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.sidebar').classList.toggle('open');
    document.querySelector('body').classList.toggle('no-scroll');
})