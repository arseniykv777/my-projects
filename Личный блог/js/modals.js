var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');

var btns = document.querySelectorAll('.modal-btn');
var btn2 = document.getElementById('modal-btn2');
var btn3 = document.getElementById('modal-btn3');

var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];


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

if (modal3) {
    btn3.onclick = function () {
        modal3.style.display = 'flex';
        document.body.classList.add('no-scroll');
        modal3.classList.remove('show');
        setTimeout(() => {
            modal3.classList.add('show')
        }, 10);
    }

    if (span3) {
        span3.onclick = function () {
            closeModal(modal3);
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
    if (modal3 && event.target == modal3) {
        closeModal(modal3);
    }
}

function closeModal(modal) {
    document.body.classList.remove('no-scroll');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 500);
}