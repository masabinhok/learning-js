let secondId;

document.querySelector(".start").addEventListener("click", () => {
  let millisecond = 0;
  let second = 0;
  let minute = 0;
  let hour = 0;

  msId = setInterval(() => {
    millisecond++;
    if (millisecond === 100) {
      millisecond=0;
      second++;
      if (second === 60) {
        second = 0;
        minute++;
        if (minute === 60) {
          minute = 0;
          hour++;
          if (hour === 24) {
            hour = 0;
          }
        }
      }
    }
    const formattedmilliSecond = millisecond;
    const formattedSecond = second < 10 ? "0" + second : second;
    const formattedMinute = minute < 10 ? "0" + minute : minute;
    const formattedHour = hour < 10 ? "0" + hour : hour;

    document.querySelector(".millisecond").innerHTML = formattedmilliSecond;
    document.querySelector(".second").innerHTML = formattedSecond;
    document.querySelector(".minute").innerHTML = formattedMinute;
    document.querySelector(".hour").innerHTML = formattedHour;
  }, 10);
});

document.querySelector(".stop").addEventListener("click", () => {
  clearInterval(msId);
});
