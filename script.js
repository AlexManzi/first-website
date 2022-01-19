window.addEventListener('scroll', function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0 )
    });

const projects = document.getElementById('projects');
input.addEventListener('click', function() {
    alert("Whoops, there's nothing here yet!")
});

function addingEventListener() {
    const projects = document.getElementById('projects');

function clickAlert() {
  alert("Whoops, there's nothing here yet!");
}

projects.addEventListener('click', clickAlert);
}