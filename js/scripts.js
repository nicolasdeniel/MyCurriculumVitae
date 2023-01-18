
function redirect() {
    window.location.href = "http://nicolasdeniel.github.io/portfolio";
}



document.getElementById("btn-expand-marvel").addEventListener('click', function() {
    document.getElementById("desc-text-marvel").style.display = "block";
})

document.getElementById("btn-expand-fcc").addEventListener('click', function() {
    document.getElementById("desc-text-fcc").style.display = "block";
})

document.getElementById("btn-expand-obc").addEventListener('click', function() {
    document.getElementById("desc-text-obc").style.display = "block";
})

document.getElementById("btn-expand-ap").addEventListener('click', function() {
    document.getElementById("desc-text-ap").style.display = "block";
})