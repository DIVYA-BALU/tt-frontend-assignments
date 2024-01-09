//timezones based on IST
const timeZones = {
  IST: {
    offsetHours: 0,
    offsetMinutes: 0,
  },
  KST: {
    offsetHours: 3,
    offsetMinutes: 30,
  },
  SGT:{
    offsetHours: 2,
    offsetMinutes: 30,
  }
};

function showTime() {
    const date = new Date();
    const ist = document.getElementById("ist");
    const kst = document.getElementById("kst");
    const sgt = document.getElementById("sgt");
    const istTime = calculateTime(date, timeZones.IST);
    const kstTime = calculateTime(date, timeZones.KST);
    const sgtTime = calculateTime(date, timeZones.SGT);
    ist.textContent = istTime;
    kst.textContent = kstTime;
    sgt.textContent = sgtTime;
}

function calculateTime(date,zone) {
  let hours = date.getHours() + zone.offsetHours;
  let minutes = date.getMinutes() + zone.offsetMinutes;
  let seconds = date.getSeconds();

  // Adjust for minutes exceeding 59
  if (minutes > 59) {
    minutes -= 60;
    hours += 1;
  }

  // Convert hours to 12-hour format
  hours = hours > 11 ? hours - 12 : hours;
  // Determine session (AM/PM)
  const session = hours >= 12 ? "PM" : "AM";
  // Convert 0 to 12 for midnight
  hours = hours === 0 ? 12 : hours;

  return formatTime(hours, minutes, seconds, session);
}

function formatTime(hours, minutes, seconds, session) {
  const formattedHours = hours > 9 ? hours : `0${hours}`;
  const formattedMinutes = minutes > 9 ? minutes : `0${minutes}`;
  const formattedSeconds = seconds > 9 ? seconds : `0${seconds}`;
  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}:${session}`;
}

// showTime();

setInterval(() => {
  showTime();
}, 1000);
