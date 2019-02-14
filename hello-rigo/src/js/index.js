import "bootstrap"; //breathecode dom for more explicit errors
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = () => {
<<<<<<<<< saved version
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
=========
  document.querySelector("#btn").addEventListener("click", () => {
      document.querySelector("#the-excuse").innerHTML = generateExcuse();
    });
>>>>>>>>> local version
  console.log("Hello");
};

let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["racoon", "bird", "cat", "dog", "hamster", "police"];
  let verb = [
    "burned my kitchen",
    "stole my car",
    "deleted my password",
    "gave away my money",
    "flushed my ring",
    "eat my keys"
  ];

  let proInd = Math.floor(Math.random() * pronoun.length);
  let subInd = Math.floor(Math.random() * subject.length);
  let verInd = Math.floor(Math.random() * verb.length);

  return pronoun[proInd] + " " + subject[subInd] + " " + verb[verInd] + " ";
};
