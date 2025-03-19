var modal = document.getElementById('myModal');
var btns = document.querySelectorAll('.modal-btn')
var span = document.getElementsByClassName("close")[0];

btns.forEach(btn => {
    btn.onclick = function () {
        modal.style.display = "block";
        document.body.classList.remove('add_scroll');
        document.body.classList.add('no-scroll');
        modal.classList.remove('show');
        setTimeout(() => {
            modal.classList.add('show')
        }, 10)
    }
})

span.onclick = function () {
    document.body.classList.remove('no-scroll');
    document.body.classList.add('add_scroll');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 500)
}

window.onclick = function(event) {
    if (event.target == modal) {
        document.body.classList.add('add_scroll');
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 500)
    }
}