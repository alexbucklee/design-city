var arrowRight = document.querySelector(".arrow--right");
var arrowLeft = document.querySelector(".arrow--left");
var position = 0;
var kitchens = document.querySelector(".tab-nav__tab--kitchens");
var cupboards = document.querySelector(".tab-nav__tab--cupboards");
var living = document.querySelector(".tab-nav__tab--living");
var office = document.querySelector(".tab-nav__tab--office");
var wardrobe = document.querySelector(".tab-nav__tab--wardrobe");
var lobby = document.querySelector(".tab-nav__tab--lobby");

function hideArrows() {
  var slides = document.querySelectorAll(".gallery > .gallery__item");
  var amount = slides.length - 4;
  if (amount <= 0) {
    document.querySelector(".arrows-wrapper--right").style.display = "none";
    document.querySelector(".arrows-wrapper--left").style.display = "none";
  } else {
    document.querySelector(".arrows-wrapper--right").style.display = "block";
    document.querySelector(".arrows-wrapper--left").style.display = "block";
  }
}

kitchens.addEventListener("click", function(evt) {
  document.querySelector(".tab-nav__tab--current").classList.remove("tab-nav__tab--current");
  kitchens.classList.add("tab-nav__tab--current");
  document.querySelector(".gallery").style.display = "none";
  document.querySelector(".gallery").classList.remove("gallery");
  document.querySelector(".gallery--kitchens").classList.add("gallery");
  document.querySelector(".gallery--kitchens").style.display = "flex";
  hideArrows();
});

cupboards.addEventListener("click", function(evt) {
  document.querySelector(".tab-nav__tab--current").classList.remove("tab-nav__tab--current");
  cupboards.classList.add("tab-nav__tab--current");
  document.querySelector(".gallery").style.display = "none";
  document.querySelector(".gallery").classList.remove("gallery");
  document.querySelector(".gallery--cupboards").classList.add("gallery");
  document.querySelector(".gallery--cupboards").style.display = "flex";
  hideArrows();
});

living.addEventListener("click", function(evt) {
  document.querySelector(".tab-nav__tab--current").classList.remove("tab-nav__tab--current");
  living.classList.add("tab-nav__tab--current");
  document.querySelector(".gallery").style.display = "none";
  document.querySelector(".gallery").classList.remove("gallery");
  document.querySelector(".gallery--living").classList.add("gallery");
  document.querySelector(".gallery--living").style.display = "flex";
  hideArrows();
});

office.addEventListener("click", function(evt) {
  document.querySelector(".tab-nav__tab--current").classList.remove("tab-nav__tab--current");
  office.classList.add("tab-nav__tab--current");
  document.querySelector(".gallery").style.display = "none";
  document.querySelector(".gallery").classList.remove("gallery");
  document.querySelector(".gallery--office").classList.add("gallery");
  document.querySelector(".gallery--office").style.display = "flex";
  hideArrows();
});

wardrobe.addEventListener("click", function(evt) {
  document.querySelector(".tab-nav__tab--current").classList.remove("tab-nav__tab--current");
  wardrobe.classList.add("tab-nav__tab--current");
  document.querySelector(".gallery").style.display = "none";
  document.querySelector(".gallery").classList.remove("gallery");
  document.querySelector(".gallery--wardrobe").classList.add("gallery");
  document.querySelector(".gallery--wardrobe").style.display = "flex";
  hideArrows();
});

lobby.addEventListener("click", function(evt) {
  document.querySelector(".tab-nav__tab--current").classList.remove("tab-nav__tab--current");
  lobby.classList.add("tab-nav__tab--current");
  document.querySelector(".gallery").style.display = "none";
  document.querySelector(".gallery").classList.remove("gallery");
  document.querySelector(".gallery--lobby").classList.add("gallery");
  document.querySelector(".gallery--lobby").style.display = "flex";
  hideArrows();
});

arrowRight.addEventListener("click", function (evt) {
  evt.preventDefault();
  var gallery = document.querySelector(".gallery");
  var slides = document.querySelectorAll(".gallery > .gallery__item");
  var amount = slides.length - 4;
  if (amount < 0) {
    amount = 0;
  }
  var endPoint = -(amount * 284);
  function hideRight() {
    if (position == endPoint) {
      position = 284;
    }
  }
  hideRight();
  position = position - 284;
  gallery.style.transform = "translateX(" +position+ "px)";
});

arrowLeft.addEventListener("click", function (evt) {
  evt.preventDefault();
  var gallery = document.querySelector(".gallery");
  var slides = document.querySelectorAll(".gallery > .gallery__item");
  var amount = slides.length - 4;
  if (amount < 0) {
    amount = 0;
  }
  var endPoint = -(amount * 284);
  function hideLeft() {
    if (position == 0) {
      position = endPoint - 284;
    }
  }
  hideLeft();
  position = position + 284;
  gallery.style.transform = "translateX(" +position+ "px)";
});

document.querySelector(".portfolio__kitchen-1").addEventListener("click", function (evt) {
  evt.preventDefault();
  document.querySelector(".modal").style.display = "block";
})

document.querySelector(".modal__overlay").addEventListener("click", function (evt) {
  evt.preventDefault();
  document.querySelector(".modal").style.display = "none";
})
