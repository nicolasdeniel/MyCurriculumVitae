function redirect() {
    window.location.href = "http://nicolasdeniel.github.io/portfolio";
}



// document.getElementById("btn-expand-marvel").addEventListener('click', function() {
//     document.getElementById("desc-text-marvel").style.display = "block";
// })

// document.getElementById("btn-expand-fcc").addEventListener('click', function() {
//     document.getElementById("desc-text-fcc").style.display = "block";
// })

// document.getElementById("btn-expand-obc").addEventListener('click', function() {
//     document.getElementById("desc-text-obc").style.display = "block";
// })

// document.getElementById("btn-expand-ap").addEventListener('click', function() {
//     document.getElementById("desc-text-ap").style.display = "block";
// })

// let btns = document.querySelectorAll("#btn");
// for (let i = 0; i < btns.lenght; i++) {
//     btns[i].addEventListener("click", function() {
//         let p = document.querySelectorAll("#p");
//         if (!p[i].className) {
//             p[i].classList.toggle("active");
//             p[i].style.display = "none";
//         } else {
//             p[i].classList.remove("active");
//             p[i].style.display = "block";
//         }
//     })
// }

let btns = document.querySelectorAll("#btn"); 
let p = document.querySelectorAll("#p");

for (let i = 0; i < p.length; i++) {
    p[i].style.display = "none";
}

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
        if (p[i].style.display = "none") {
            p[i].style.display = "block";
        } else {
            p[i].style.display = "none";
        }
        })
    }