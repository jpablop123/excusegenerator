/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let generadorexcusa = document.getElementById("excuse");
  function excusegenerator() {
    let who = ["The dog", "My grandma", "His turtle", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "the keys", "the car"];
    let when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying",
    ];
    console.log("onload");
    let fraserandom = Math.random() * 3;
    console.log(Math.floor(fraserandom));
    let whoIndx = Math.floor(fraserandom);
    let actionIndx = Math.floor(fraserandom);
    let whatIndx = Math.floor(fraserandom);
    let whenIndx = Math.floor(fraserandom);
    return (
      who[whoIndx] +
      "" +
      action[actionIndx] +
      "" +
      what[whatIndx] +
      "" +
      when[whenIndx]
    );
  }
  generadorexcusa.innerHTML = excusegenerator();
};
