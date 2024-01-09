
function getTime(timeZone, zone) {
    const date = new Date();
    const formattedTime = date.toLocaleString('en-US', { timeZone: `${timeZone}` });
    const zoneId = document.getElementById(zone);
    zoneId.textContent = formattedTime;
}


function updateClocks() {
    const timeZones = ['America/New_York', 'Europe/London', 'Asia/Taipei'];

    timeZones.forEach((timeZone, index) => {
        getTime(timeZone, `zone${index + 1}`);
    });
}

setInterval(() => {
    updateClocks()
}, 1000);