var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

var basketOverlay = document.querySelector(".popup-overlay");
var basketWeekend = document.querySelector(".weekend-product__btn");

var basketLink = document.querySelectorAll(".catalog__basket-icon");
var basketPopup = document.querySelector(".popup");
if ( basketLink && basketPopup ) {
  for (var i = 0; i < basketLink.length; i++) {
    basketLink[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      basketPopup.classList.add("popup__show");
      basketOverlay.classList.add("popup-overlay__show");
    });
  }

  basketOverlay.addEventListener("click", function(evt) {
    evt.preventDefault();
    basketPopup.classList.remove("popup__show");
    basketOverlay.classList.remove("popup-overlay__show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (basketPopup.classList.contains("popup__show")) {
        basketPopup.remove("popup__show");
      }
      if (basketOverlay.classList.contains("popup-overlay__show")) {
        basketOverlay.remove("popup-overlay__show");
      }
    }
  });
}


if ( basketWeekend && basketPopup ) {
    basketWeekend.addEventListener("click", function (evt) {
      evt.preventDefault();
      basketPopup.classList.add("popup__show");
      basketOverlay.classList.add("popup-overlay__show");
    });

  basketOverlay.addEventListener("click", function(evt) {
    evt.preventDefault();
    basketPopup.classList.remove("popup__show");
    basketOverlay.classList.remove("popup-overlay__show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (basketPopup.classList.contains("popup__show")) {
        basketPopup.remove("popup__show");
      }
      if (basketOverlay.classList.contains("popup-overlay__show")) {
        basketOverlay.remove("popup-overlay__show");
      }
    }
  });
}
