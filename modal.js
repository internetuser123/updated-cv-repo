const ebModal = document.getElementById('myModal');


const ebBtn = document.getElementById("mySizeChart");


const ebSpan = document.getElementsByClassName("close")[0];


ebBtn.onclick = function() {
    ebModal.style.display = "block";
}

ebSpan.onclick = function() {
    ebModal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == ebModal) {
        ebModal.style.display = "none";
    }
}