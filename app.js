/* Created by Tivotal */

let secHand = document.querySelector(".sec");
let minHand = document.querySelector(".min");
let hourHand = document.querySelector(".hour");

setInterval(() => {
  let date = new Date();
  let hour = date.getHours() * 30;
  let min = date.getMinutes() * 6;
  let sec = date.getSeconds() * 6;

  hourHand.style.transform = `rotateZ(${hour + min / 12}deg)`;
  minHand.style.transform = `rotateZ(${min}deg)`;
  secHand.style.transform = `rotateZ(${sec}deg)`;
});
