function play() {
  let audio = document.getElementById("audio");
  if (audio.paused) audio.play();
  else audio.pause();

  let crabDance = document.getElementById("crab");
  crabDance.classList.toggle("active");

  let swapBackground = document.getElementById("swap");
  swapBackground.classList.toggle("hidden");
}

const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded;
  navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
};
