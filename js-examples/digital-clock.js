function addTime(digitalClock, region) {
  const americaTime = new Date().toLocaleString("en-AU", { timeZone: region }).split(",")[1];
  digitalClock.innerText = `${digitalClock.innerText} \n Current time in ${region.split("/")[1].replace("_", " ")} :  ${americaTime}`;
}

const regions = ["Asia/Kolkata", "America/New_York", "Asia/Bangkok"];
const divEl = document.createElement("div");
document.body.appendChild(divEl);

const refreshClock = setInterval(() => {
  divEl.innerText = "";

  for (let i = 0; i < regions.length; i++) {
    addTime(divEl, regions[i]);
  }

}, 1000);
