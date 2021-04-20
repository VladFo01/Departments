function getTimeRemaining(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date());
  let minutes = Math.floor((t / 1000 / 60) % 60);
  let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  let seconds = Math.floor((t / 1000) % 60);
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
 
function initializeClock(endtime) {
  let daysTenSpan = document.querySelectorAll('.day-ten');
  let daysOneSpan = document.querySelectorAll('.day-one');
  let hoursTenSpan = document.querySelectorAll('.hour-ten');
  let hoursOneSpan = document.querySelectorAll('.hour-one');
  let minutesTenSpan = document.querySelectorAll('.minute-ten');
  let minutesOneSpan = document.querySelectorAll('.minute-one');
  let secondsTenSpan = document.querySelectorAll('.second-ten');
  let secondsOneSpan = document.querySelectorAll('.second-one');
 
  function updateClock() {
    let t = getTimeRemaining(endtime);
    
    let dayOne = t.days % 10;
    let dayTen = (t.days % 100 - dayOne)/10;

    let hourOne = t.hours % 10;
    let hourTen = (t.hours % 100 - hourOne)/10;

    let minuteOne = t.minutes % 10;
    let minuteTen = (t.minutes % 100 - minuteOne)/10;

    let secondOne = t.seconds % 10;
    let secondTen = (t.seconds % 100 - secondOne)/10;
    

    for(let i=0;i<2;i++){
      daysTenSpan[i].innerHTML = dayTen;
      daysOneSpan[i].innerHTML = dayOne;
      hoursTenSpan[i].innerHTML = hourTen;
      hoursOneSpan[i].innerHTML = hourOne;
      minutesTenSpan[i].innerHTML = minuteTen;
      minutesOneSpan[i].innerHTML = minuteOne;
      secondsTenSpan[i].innerHTML = secondTen;
      secondsOneSpan[i].innerHTML = secondOne;
    }

 
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }
 
  updateClock();
  let timeinterval = setInterval(updateClock, 1000);
}
 
let deadline = new Date(Date.parse(new Date()) + 2 * 24 * 60 * 60 * 1000 + 4 * 60 * 60 * 1000 + 30 * 60 * 1000);
initializeClock(deadline);