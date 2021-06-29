let day = document.querySelector("#day");
let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");
let endTime = new Date(2021, 6, 31, 23, 59, 59).getTime();//set the counting down date

//update per second
let update = setInterval(function () {
    let now = new Date().getTime();//get today's time
    let distance = endTime - now;//calculate the distance time
    calculate(distance);

    if (distance < 0) {
        clearInterval(update);
        document.querySelector("h1").innerHTML = "TIME OUT"
    }

}, 1000)

function calculate (sec) {
    let d = Math.floor(sec / (1000 * 60 * 60 * 24));
    let h = Math.floor(sec % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let m = Math.floor(sec % (1000 * 60 * 60) / (1000 * 60));
    let s = Math.floor(sec % (1000 * 60) / 1000);

    if (d < 10) {
        d = "00" + d;
    } else if (d < 100) {
        d = "0" + d;
    } else {
        d = d;
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    day.innerHTML = d;
    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;
}