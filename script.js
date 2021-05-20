(function(){"use strict";

    let secondsSpentElement = document.getElementById("seconds-spent");
    let millisecondsSpentElement = document.getElementById("milliseconds-spent");

    requestAnimationFrame(function updateTimeSpent(){
        let timeNow = performance.now();

        secondsSpentElement.value = round(timeNow/1000);
        millisecondsSpentElement.value = round(timeNow);

        requestAnimationFrame(updateTimeSpent);
    });
    let performance = window.performance, round = Math.round;
})();
function refreshPage(){
    window.location.reload();
}

/*NB: Shortcoming of this method: It ignore times that a user switches to different tabs,
* goes idle, minimizes the browser, etc.
* performance.now() is used for showing the milliseconds the user have elapsed since he first navigated to the page. better than
* Date.now(), which measures clock time.
*
* requestAnimationFrame??
* use strict?? */