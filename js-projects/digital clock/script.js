function updateTime(timezone, elementId) {
    const timeFormat = { timeZone: timezone, 
        hour: 'numeric', 
        minute: 'numeric', 
        second: 'numeric' 
    };

    const time = new Date().toLocaleString('en-US', timeFormat);
    document.getElementById(elementId).innerText = `${timezone}: ${time}`;
}
  
setInterval(() => {
    updateTime('Asia/Kolkata', 'india');
    updateTime('Asia/Singapore', 'singapore'); 
    updateTime('America/New_York', 'america'); 
    updateTime('Australia/Sydney', 'australia'); 
}, 1000); 
  


