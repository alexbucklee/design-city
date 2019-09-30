var arrowRight = document.querySelector(".arrow--right");
var arrowLeft = document.querySelector(".arrow--left");
var position = 0;

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

document.querySelector(".tab-nav__list").addEventListener("click", function(evt) {
  if (event.target.className == "tab-nav__tab") {
    var dataTab = event.target.getAttribute("data-tab");
    document.querySelector(".tab-nav__tab--current").classList.remove("tab-nav__tab--current");
    event.target.classList.add("tab-nav__tab--current");
    var tabBody = document.querySelectorAll(".portfolio__gallery");
    for (var i = 0; i < tabBody.length; i++) {
      if (dataTab == i) {
        document.querySelector(".portfolio__gallery-wrapper").scrollTo(0, 0);
        tabBody[i].style.display = "flex";
        tabBody[i].classList.add("gallery");
        hideArrows();
      } else {
        tabBody[i].style.display = "none";
        tabBody[i].classList.remove("gallery");
      }
    }
  }
})

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

// document.querySelector(".welcome__button--desktop").addEventListener("click", function (evt) {
//   evt.preventDefault();
//   document.querySelector("#portfolio").scrollIntoView();
// })
//
// document.querySelector(".welcome__button--mobile").addEventListener("click", function (evt) {
//   evt.preventDefault();
//   document.querySelector("#portfolio").scrollIntoView();
// })

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener("click", function(evt) {
    event.preventDefault();
    const blockID = anchor.getAttribute("href");
    document.querySelector("" + blockID).scrollIntoView();
  })
}
