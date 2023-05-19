window.addEventListener("scroll", function() {
  var akadDetails = document.querySelector(".section1 .quote");
  var position = akadDetails.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (position < windowHeight) {
    akadDetails.classList.add("show");
  }
});


window.addEventListener("scroll", function() {
  var akadDetails = document.querySelector(".section4 .akad-details");
  var position = akadDetails.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (position < windowHeight) {
    akadDetails.classList.add("show");
  }
});


window.addEventListener("scroll", function() {
  var akadDetails = document.querySelector(".section4 .resepsi-details");
  var position = akadDetails.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (position < windowHeight) {
    akadDetails.classList.add("show");
  }
});


window.addEventListener("scroll", function() {
  var akadDetails = document.querySelector(".section5 .decoration-story .circle1");
  var position = akadDetails.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (position < windowHeight) {
    akadDetails.classList.add("show");
  }
});

window.addEventListener("scroll", function() {
  var akadDetails = document.querySelector(".section5 .decoration-story .circle2");
  var position = akadDetails.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (position < windowHeight) {
    akadDetails.classList.add("show");
  }
});

window.addEventListener("scroll", function() {
  var akadDetails = document.querySelector(".section5 .decoration-story .circle3");
  var position = akadDetails.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (position < windowHeight) {
    akadDetails.classList.add("show");
  }
});

window.addEventListener("scroll", function() {
  var akadDetails = document.querySelector(".section5 .decoration-story .line1");
  var position = akadDetails.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (position < windowHeight) {
    akadDetails.classList.add("show");
  }
});

window.addEventListener("scroll", function() {
  var akadDetails = document.querySelector(".section5 .decoration-story .line2");
  var position = akadDetails.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (position < windowHeight) {
    akadDetails.classList.add("show");
  }
});


function showImage(element) {
  var imageURL = element.getAttribute("src");
  var modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = '<span class="close" onclick="closeModal()">&times;</span><img src="' + imageURL + '" class="modal-content">';
  document.body.appendChild(modal);
  document.body.style.overflow = "hidden";
}

function closeModal() {
  var modal = document.querySelector(".modal");
  if (modal) {
    modal.parentNode.removeChild(modal);
    document.body.style.overflow = "auto";
  }
}
