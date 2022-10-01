function play() {
  let audio = document.getElementById("audio");
  if (audio.paused) audio.play();
  else audio.pause();

  let crabDance = document.getElementById("crab");
  crabDance.classList.toggle("active");

  let swapBackground = document.getElementById("swap");
  swapBackground.classList.toggle("hidden");

  let switchIcon = document.getElementById("crab-icon");
  if (switchIcon.innerHTML == "🦀") switchIcon.innerHTML = "❌";
  else if (switchIcon == "❌") switchIcon.innerHTML = "🦀";
  else {
    switchIcon.innerHTML = "🦀";
  }
}

// copy to clipboard button
function CopyToClip() {
  const copyText = document.getElementById("myInput");

  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  navigator.clipboard.writeText(copyText.value);

  alert("Copied Discord ID " + copyText.value + " to your clipboard!");
}
