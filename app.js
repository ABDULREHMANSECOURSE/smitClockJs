function updateClock() {
    var now = new Date();

    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    var ampm = "AM";
    if (hours >= 12) {
        hours = hours - 12;
        ampm = "PM";
    }
    if (hours == 0) {
        hours = 12;
    }

    // 2-digit format
    hours = String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");

    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
}

setInterval(updateClock, 1000);
updateClock();
