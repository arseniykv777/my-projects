var modal = document.getElementById('myModal');
var btn = document.getElementById('myBtn');
var span = document.getElementsByClassName("close")[0];

var modal2 = document.getElementById('myModal2');
var btn2 = document.getElementById('myBtn2');
var span2 = document.getElementsByClassName("close2")[0];

var modal3 = document.getElementById('myModal3');
var btn3 = document.getElementById('myBtn3');
var span3 = document.getElementsByClassName("close3")[0];


btn.onclick = function () {
    modal.style.display = "block";
    document.body.classList.remove('add_scroll');
    document.body.classList.add('no-scroll');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.classList.add('show')
    }, 10)
}

btn2.onclick = function () {
    modal2.style.display = "block";
    document.body.classList.remove('add_scroll');
    document.body.classList.add('no-scroll');
    modal2.classList.remove('show');
    setTimeout(() => {
        modal2.classList.add('show')
    }, 10)
}

btn3.onclick = function () {
    modal3.style.display = "block";
    
    modal3.classList.remove('show');
    setTimeout(() => {
        modal3.classList.add('show')
    }, 10)
    document.body.classList.remove('add_scroll');
    document.body.classList.add('no-scroll');
}

span.onclick = function () {
    document.body.classList.remove('no-scroll');
    document.body.classList.add('add_scroll');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 500)
}

span2.onclick = function () {
    document.body.classList.remove('no-scroll');
    document.body.classList.add('add_scroll');
    modal2.classList.remove('show');
    setTimeout(() => {
        modal2.style.display = 'none';
    }, 500)
}

span3.onclick = function () {
    document.body.classList.remove('no-scroll');
    document.body.classList.add('add_scroll');

    modal3.classList.remove('show');
    setTimeout(() => {
        modal3.style.display = 'none';
    }, 500)
}

window.onclick = function(event) {
    if (event.target == modal || event.target == modal2 || event.target == modal3) {
        
        document.body.classList.add('add_scroll');
        
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 500)

        modal2.classList.remove('show');
        setTimeout(() => {
            modal2.style.display = 'none';
        }, 500)

        modal3.classList.remove('show');
        setTimeout(() => {
            modal3.style.display = 'none';
        }, 500)
    }
}

