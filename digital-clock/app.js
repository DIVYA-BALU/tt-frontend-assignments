const clockEl = document.createElement('h1');
const dateEl = document.createElement('p');

let intervalId;

function checkFormat(value)
{
    return (value < 10) ? `0${value}` : value;
}

function generateDate(date) {
    const dayMonthYear = date.split('/');
    const month = parseInt(dayMonthYear[0]);
    const day = parseInt(dayMonthYear[1]);
    const year = parseInt(dayMonthYear[2]);
    return `${checkFormat(day)}-${checkFormat(month)}-${year}`;
}

function updateTime(selectedTimezone) {

    const formattedTime = new Date().toLocaleTimeString("en-US", { timeZone: selectedTimezone });
    const date = new Date().toLocaleDateString("en-US", { timeZone: selectedTimezone });
    clockEl.textContent = `${formattedTime}`;
    dateEl.textContent = generateDate(date);
    document.body.appendChild(clockEl);
    document.body.appendChild(dateEl);
}

function displayTime(selectedTimezone) {

    if (intervalId) {
        clearInterval(intervalId);
    }

    intervalId = setInterval(() => {
        updateTime(selectedTimezone);
    }, 1000);
}

const timeZones = [
    {
        value: '',
        label: 'Select Region'
    },
    {
        value: 'Asia/Kolkata',
        label: 'Asia/Kolkata'
    },
    {
        value: 'America/New_York',
        label: 'America/New_York'
    },
    {
        value: 'Europe/London',
        label: 'Europe/London'
    },
    {
        value: 'Asia/Tokyo',
        label: 'Asia/Tokyo'
    },
    {
        value: 'Australia/Sydney',
        label: 'Australia/Sydney'
    },
    {
        value: 'Africa/Cairo',
        label: 'Africa/Cairo'
    },
    {
        value: 'Pacific/Honolulu',
        label: 'Pacific/Honolulu'
    },
    {
        value: 'America/Los_Angeles',
        label: 'America/Los_Angeles'
    },
    {
        value: 'Europe/Paris',
        label: 'Europe/Paris'
    },
    {
        value: 'Asia/Dubai',
        label: 'Asia/Dubai'
    },
    {
        value: 'Australia/Melbourne',
        label: 'Australia/Melbourne'
    },
    {
        value: 'Asia/Shanghai',
        label: 'Asia/Shanghai'
    },
    {
        value: 'Europe/Berlin',
        label: 'Europe/Berlin'
    },
    {
        value: 'America/Chicago',
        label: 'America/Chicago'
    },
    {
        value: 'Africa/Johannesburg',
        label: 'Africa/Johannesburg'
    },
    {
        value: 'Pacific/Auckland',
        label: 'Pacific/Auckland'
    }
];


const formEl = document.createElement('form');
const labelEl = document.createElement('label');
labelEl.textContent = 'Select Timezone:';
formEl.appendChild(labelEl);
createSelect();



function createSelect() {
    const selectEl = document.createElement('select');
    selectEl.id = 'timezoneSelect';
    selectEl.addEventListener('change', () => displayTime(selectEl.value));

    timeZones.forEach(timeZone => {
        const optionEl = document.createElement('option');
        optionEl.value = timeZone.value;
        optionEl.textContent = timeZone.label;
        selectEl.appendChild(optionEl);
    });
    formEl.appendChild(selectEl);
    document.body.appendChild(formEl);
}
