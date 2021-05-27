document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'left',
      hoverEnabled: false
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {
        popout: true
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
});

let body = document.getElementById('body');
let menu = document.getElementById('menu');

lightDark.addEventListener("click", changeLight);

function changeLight (e){
    e.preventDefault();
    let dark = document.querySelectorAll(".dark");
    let light = document.querySelectorAll(".light");
    if (body.classList.contains("dark")) {
        menu.style.color = "#f8f9fa"; 
        for (i=0; i<dark.length; i++){
            dark[i].classList.add("light")
            dark[i].classList.remove("dark")
        }
        for (i=0; i<light.length; i++){
            light[i].classList.add("dark")
            light[i].classList.remove("light")
        }
    } else {
        let dark = document.querySelectorAll(".dark");
        let light = document.querySelectorAll(".light");
        menu.style.color = "#212529";
        for (i=0; i<light.length; i++){
            light[i].classList.add("dark")
            light[i].classList.remove("light")
        }
        for (i=0; i<dark.length; i++){
            dark[i].classList.add("light")
            dark[i].classList.remove("dark")
        }
    }
}