const bodyEle = document.querySelector(".body-tag");
const outerDivEle = document.createElement("div");
outerDivEle.className = "outer-div";

const dateDivEle = document.createElement("div");
dateDivEle.className = "date-div";
const timeDivEle = document.createElement("div");
timeDivEle.className = "time-div";

const tokyoDateDivEle = document.createElement("div");
tokyoDateDivEle.className = "tokyo-date-div";
const tokyoTimeDivEle = document.createElement("div");
tokyoTimeDivEle.className = "tokyo-time-div";

const londonDateDivEle = document.createElement("div");
londonDateDivEle.className = "london-date-div"
const londonTimeDivEle = document.createElement("div");
londonTimeDivEle.className = "london-time-div";


function currentTime() {
    let date = new Date();
    let todayDate = date.getDate();
    let todayMonth = date.getMonth() + 1;
    let todayYear = date.getFullYear();
    let session = "AM";

    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hour === 0) {
        hour = 12;
    }

    if (hour > 12) {
        hour = hour - 12;
        session = "PM";
    }

    const dateUpdate = todayDate + "/" + todayMonth + "/" + todayYear;
    const timeUpdate = hour + ":" + minutes + ":" + seconds + " " + session;
    dateDivEle.textContent = `IST Date : ${dateUpdate}`;
    timeDivEle.textContent = `IST Time : ${timeUpdate}`;

    const tokyoDate = date.toLocaleString("en-US", { timeZone: "Asia/Tokyo" });
    tokyoDateDivEle.textContent = `Tokyo Date : ${tokyoDate.substring(0, 8)}`;
    tokyoTimeDivEle.textContent = `Tokyo Time : ${tokyoDate.substring(10)}`;

    const londonDate = date.toLocaleString("en-US", { timeZone: "Europe/London" });
    londonDateDivEle.textContent = `London Date : ${londonDate.substring(0, 8)}`;
    londonTimeDivEle.textContent = `London Time : ${londonDate.substring(10)}`;
    
    outerDivEle.appendChild(dateDivEle);
    outerDivEle.appendChild(timeDivEle);
    outerDivEle.appendChild(tokyoDateDivEle);
    outerDivEle.appendChild(tokyoTimeDivEle);
    outerDivEle.appendChild(londonDateDivEle);
    outerDivEle.appendChild(londonTimeDivEle);
    bodyEle.appendChild(outerDivEle);
}

setInterval(function () {
    currentTime()
}, 1000);