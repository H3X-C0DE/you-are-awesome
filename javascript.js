function play() {
  let audio = document.getElementById("audio");
  if (audio.paused) audio.play();
  else audio.pause();
  let element = document.getElementById("crab");
  element.classList.toggle("active");
}

const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded;
  navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
};
