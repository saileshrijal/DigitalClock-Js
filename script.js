// function that show  current time

function showTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

}

//calling show time fucntions
showTime();


//Showing time in every one second with setInterval() method
setInterval(() => {
    showTime();


}, 1000);