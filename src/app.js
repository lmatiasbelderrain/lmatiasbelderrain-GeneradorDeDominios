/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our", "my"];
  let adj = ["great", "big", "small", "white"];
  let noun = ["jogger", "racoon", "dog"];

  // dominios
  for (let i = 0; i < pronoun.length; i++) {
    for (let b = 0; b < adj.length; b++) {
      for (let c = 0; c < noun.length; c++) {
        console.log(pronoun[i] + adj[b] + noun[c] + ".com.uy");
      }
    }
  }
};
