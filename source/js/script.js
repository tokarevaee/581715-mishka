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

var basketLink = document.querySelectorAll(".catalog__basket-icon");
var basketPopup = document.querySelector(".popup");
if ( basketLink && basketPopup ) {
  var basketOutput= document.querySelector(".popup-basket__btn");

  for (var i = 0; i < basketLink.length; i++) {
    basketLink[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      basketPopup.classList.add("popup--show");
    });
  }

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (basketPopup.classList.contains("popup--show")) {
        basketPopup.remove("popup--show");
      }
    }
  });
}
