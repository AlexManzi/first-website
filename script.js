window.addEventListener('scroll', function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0 )
    });

function addEventListener() {
    const projects = document.getElementById('projects');

function clickAlert() {
  alert("Whoops, there doesn't seem to be anything here yet! Check back soon!");
}

projects.addEventListener('click', clickAlert);
}
