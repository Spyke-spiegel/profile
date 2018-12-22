// Setting up the Variables
window.onload=function(){
var bars = document.getElementById("nav-action");
var nav = document.getElementById("nav");


//setting up the listener
bars.addEventListener("click", barClicked, false);


//setting up the clicked Effect
function barClicked() {
  bars.classList.toggle('active');
  nav.classList.toggle('visible');
}


// var figure = $(".video").hover(playVideo, hideVideo);

// function playVideo(e) {
//   $('video', this).get(0).play();
// }

// function hideVideo(e) {
//   $('video', this).get(0).load();
// }

}