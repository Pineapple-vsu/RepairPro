function open_burger(){
    document.getElementById('menuContent').style.display="flex";
}
function close_burger(){
    document.getElementById('menuContent').style.display="none";
}

//
const textElement = document.getElementById("cost_result");
const button = document.getElementById("calculate");
const form = document.getElementById("cost_form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const rooms = document.getElementById("rooms").value.trim();
  const square = document.getElementById("square").value.trim();

  if (rooms !== "" && square !== "") {
    textElement.textContent = "330 BYN";
  } else {
    alert("Пожалуйста, заполните все поля!");
  }
});

//
const send_agree = document.getElementById("send_agree");
const button_agree = document.getElementById("agree");
const form_agree = document.getElementById("contacts");

form_agree.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const number = document.getElementById("number").value.trim();

  if (name !== "" && number !== "") {
    send_agree.style.display = "flex";
    form_agree.style.display = "none";
  } else {
    alert("Пожалуйста, заполните все поля!");
  }
});

// slider
const swiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 3,
  centeredSlides: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
   0: {
        slidesPerView: 1, 
    },
    360: {
        slidesPerView: 1, 
    },
    700: {
        slidesPerView: 2, 
    },
    1000: {
        slidesPerView: 3, 
    },
},
});
