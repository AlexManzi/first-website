window.addEventListener('scroll', function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0 )
    });

const projects = document.getElementById('projects');
function clickAlert() {
  alert("Whoops, I haven't completed my bootcamp yet! Check back in a few months for a full showcase of my work.");
}
projects.addEventListener('click', clickAlert);