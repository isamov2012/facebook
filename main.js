const database = [
  {
    username: "Isam",
    password: "12",
  },
  {
    username: "Tanya",
    password: "123",
  },
  {
    username: "Melika",
    password: "1234",
  },
];
const newsfeed = [
  {
    username: "Melika",
    timeline: "We were at the pool today!",
  },
  {
    username: "Adam",
    timeline: "I poobed many times today!",
  },
  {
    username: "Tanya",
    timeline: "I burned the food today ",
  },
];
const usernamePrompt = prompt("Your username?");
const passwordPrompt = prompt("Your password?");
function isUsernameValid(user, pass) {
  for (let i = 0; i < database.length; i++) {
    if (user === database[i].username && pass === database[i].password) {
      return true;
    }
  }
  return false;
}
function signIn(user, pass) {
  if (isUsernameValid(user, pass)) {
    alert("check out the browsers dev console.");
    console.log(newsfeed);
  } else {
    alert("wrong username and/or password!");
  }
}
signIn(usernamePrompt, passwordPrompt);
document.getElementsByClassName("listElement")[
  Math.floor(Math.random() * 2.5)
].style.backgroundColor = "red";
document.querySelector("li").getAttribute("listElement");
