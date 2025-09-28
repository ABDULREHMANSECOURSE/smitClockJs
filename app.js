var use24 = false;

var toggle = document.getElementById('toggle')

toggle.onclick = timeformate
function timeformate() {
    if (use24 == false) {
        toggle.textContent = "Toggle 12"
        use24 = true
    } else {
        use24 = false
        toggle.textContent = "Toggle 24"
    }
}

function updateClock() {
    var now = new Date();

    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    var ampm = "AM";
    if (!use24) {
        if (hours >= 12) {
            hours = hours - 12;
            ampm = "PM";
        }
        if (hours == 0) {
            hours = 12;
        }
    } else {
        ampm = ""
    }

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds} ${ampm}`;


    var day = now.getDate()
    var month = now.getMonth()
    var year = now.getFullYear()

    var date = document.getElementById('date')

    date.textContent = `${day} | ${month} | ${year}`

}

setInterval(updateClock, 100);
updateClock();
