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

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds} ${ampm}`;


    var day = now.getDate()
    var month = now.getMonth()
    var year = now.getFullYear()

    var date = document.getElementById('date')

    date.textContent = `${day} / ${month} / ${year}`
}

setInterval(updateClock, 1000);
updateClock();
