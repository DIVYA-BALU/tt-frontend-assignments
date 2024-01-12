const body = document.getElementById('body');
function updateTime() {
    const zones = ['Asia/Seoul', 'America/New_York', 'Europe/London'];
    zones.forEach((timeZone, index) => {
        getTime(timeZone, index);
    });
}
function getTime(timeZone, index) {
    const p = document.createElement('p');
    setInterval(() => {
        const date = new Date();
        const time = date.toLocaleString('en-US', { timeZone: `${timeZone}` });
        p.innerText = `${timeZone}:${time}`;
    }, 1000);
    body.appendChild(p);
}
updateTime();


