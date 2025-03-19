var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myModal2');

var btns = document.querySelectorAll('.modal-btn');
var btn2 = document.getElementById('modal-btn2');

var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];

if (modal) {
    btns.forEach(btn => {
        btn.onclick = function () {
            modal.style.display = "block";
            document.body.classList.add('no-scroll');
            modal.classList.remove('show');
            setTimeout(() => {
                modal.classList.add('show')
            }, 10);
        }
    });

    if (span) {
        span.onclick = function () {
            closeModal(modal);
        }
    }
}

if (modal2) {
    btn2.onclick = function () {
        modal2.style.display = "block";
        document.body.classList.add('no-scroll');
        modal2.classList.remove('show');
        setTimeout(() => {
            modal2.classList.add('show')
        }, 10);
    }

    if (span2) {
        span2.onclick = function () {
            closeModal(modal2);
        }
    }
}

window.onclick = function(event) {
    if (modal && event.target == modal) {
        closeModal(modal);
    }
    if (modal2 && event.target == modal2) {
        closeModal(modal2);
    }
}

function closeModal(modal) {
    document.body.classList.remove('no-scroll');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 500);
}