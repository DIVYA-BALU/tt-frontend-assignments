const body = document.getElementById('body');
function updateTime() {
    const zones = ['Asia/Seoul', 'America/New_York', 'Europe/London'];
    zones.forEach((timeZone, index) => {
        getTime(timeZone, index);
    });
}
function getTime(timeZone, index) {
    const date = new Date();
    const time = date.toLocaleString('en-US', { timeZone: `${timeZone}` });
    const divBox = document.getElementById(`${index}`);
    divBox.innerText = `${timeZone}:${time}`;
}
setInterval(() => {
    updateTime();
}, 1000);

