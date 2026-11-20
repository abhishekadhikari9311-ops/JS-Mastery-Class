//  event emitter challenge time

//  login  logout purchase profile-update

const { EventEmitter } = require("events");
const events = new EventEmitter();

let eventsCount = {
  login: 0,
  logout: 0,
  purchase: 0,
  "profile-update": 0,
};

events.on("login", () => {
  eventsCount.login += 1;
  console.log("you are logged in");
});

events.on("logout", () => {
  eventsCount.logout += 1;
  console.log("you are logged out");
});

events.on("purchase", () => {
  eventsCount.purchase += 1;
  console.log("you had purchased");
});

events.on("profile-update", () => {
  eventsCount["profile-update"]++;
  console.log("you had updated your profile");
});

events.on("summary", () => {
  console.log(eventsCount);
});

events.emit("login");
events.emit("logout");
events.emit("purchase");
events.emit("profile-update");
events.emit("summary");
