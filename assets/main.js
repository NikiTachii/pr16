"use strict";
let callPhone = document.querySelector(".callPhone");
let triggers = document.querySelector(".triggers");

let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callPhone.classList.add("show");
      } else {
        callPhone.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.5,
  }
);

observer.observe(triggers);
