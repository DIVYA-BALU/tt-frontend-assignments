const zone1 = document.getElementById("zone1");

function getTime(timeZone, zone) {
    const date = new Date();
    const formattedTime = date.toLocaleTimeString('en-US', { timeZone: `${timeZone}` });
    const zone1 = document.getElementById(zone);
    zone1.textContent = `${formattedTime}`;
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