function redirect() {
    window.location.href = "http://nicolasdeniel.github.io/portfolio";
}

let btns = document.querySelectorAll("#btn"); 
let p = document.querySelectorAll("#p");

for (let i = 0; i < p.length; i++) {
    p[i].style.display = "none";
}

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
        if (p[i].style.display === "none") {
            p[i].style.display = "block";
        } else {
            p[i].style.display = "none";
        }
        })
    }