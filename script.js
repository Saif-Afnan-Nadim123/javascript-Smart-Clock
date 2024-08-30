function Mytime() {
    const myDate = new Date();
    const min = (myDate.getMinutes() < 10) ? "0" + myDate.getMinutes() : myDate.getMinutes();
    const sec = (myDate.getSeconds() < 10) ? "0" + myDate.getSeconds() : myDate.getSeconds();
    const M = (myDate.getHours() >= 12) ? 'pm' : 'am';

    let hr;
    if (myDate.getHours() == 0) {
        hr = 12;
    } else if (myDate.getHours() > 12) {
        hr = myDate.getHours() - 12;
    } else {
        hr = myDate.getHours();
    }

    const currentTime = hr + ":" + min + ":" + sec;
    document.getElementsByClassName('hour')[0].innerHTML = currentTime + " " + M;

    const myDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const myMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const day = myDate.getDate();

    const currentDate = myDay[myDate.getDay()] + ", " + myMonth[myDate.getMonth()] + " " + day;
    document.getElementsByClassName('day')[0].innerHTML = currentDate;
}

Mytime();
setInterval(Mytime, 1000);
