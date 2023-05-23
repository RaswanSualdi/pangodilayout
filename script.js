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

//animasi bride di section 2
document.addEventListener('DOMContentLoaded', function() {
  var textDecGroom = document.querySelector('.text-dec-groom');

  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function animateOnScroll() {
    if (isInViewport(textDecGroom)) {
      textDecGroom.classList.add('animate');
      window.removeEventListener('scroll', animateOnScroll);
    }
  }

  window.addEventListener('scroll', animateOnScroll);
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


//opening parallax

window.addEventListener("scroll", function () {
  var scrollPosition = window.pageYOffset;
  var parallaxElements = document.querySelectorAll(".parallax .opening");
  for (var i = 0; i < parallaxElements.length; i++) {
    parallaxElements[i].style.transform = "translate3d(0, " + scrollPosition * 0.5 + "px, 0)";
  }
});


//menampilkan semua section setelah menekan tombol open
document.addEventListener('DOMContentLoaded', function() {
  var buttonOpen = document.getElementById('button-open');
  var section1 = document.querySelector('.section1');
  var section2 = document.querySelector('.section2');
  var section3 = document.querySelector('.section3');
  var section4 = document.querySelector('.section4');
  var section5 = document.querySelector('.section5');
  var section6 = document.querySelector('.section6');
  var section7 = document.querySelector('.section7');
  var section8 = document.querySelector('.section8');
  var section9 = document.querySelector('.section9');
  var footer = document.querySelector('.footer');

  buttonOpen.addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah perilaku default dari tautan

    // Tampilkan elemen-elemen yang diinginkan
    section1.style.display = 'flex';
    section2.style.display = 'flex';
    section3.style.display = 'flex';
    section4.style.display = 'flex';
    section5.style.display = 'flex';
    section6.style.display = 'flex';
    section7.style.display = 'flex';
    section8.style.display = 'flex';
    section9.style.display = 'flex';
    footer.style.display = 'flex';

     // Tambahkan kelas "show" pada section2
     section2.classList.add('show');

    // Scroll ke elemen section1
    section1.scrollIntoView({ behavior: 'smooth' });
  });
});


//menjalankan audio setelah menekan tombol open 

document.addEventListener('DOMContentLoaded', function() {
  var buttonOpen = document.getElementById('button-open');
  var audio = document.getElementById('myAudio');

  buttonOpen.addEventListener('click', function(event) {
    event.preventDefault();
    audio.play();
  });
});













