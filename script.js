// Countdown Timer
const countdownDate = new Date("Nov 11, 2024 00:00:00").getTime();
const timerElement = document.getElementById("timer");
function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    if (distance <= 0) {
        timerElement.innerHTML = "It's Vidhi's Birthday!";
} else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}
setInterval(updateCountdown, 1000);



