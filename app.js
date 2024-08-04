document.getElementById('start-button').addEventListener('click', function() {
    const targetDateInput = document.getElementById('target-date').value;
    const targetDate = new Date(targetDateInput);

    if (isNaN(targetDate.getTime())) {
        alert("Please enter a valid date and time.");
        return;
    }

    function updateCountdown() {
        const now = new Date();
        const timeDifference = targetDate - now;

        if (timeDifference <= 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').style.display = 'none';
            document.getElementById('message').textContent = 'Time is up!';
            return;
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown(); // Initial call
    const countdownInterval = setInterval(updateCountdown, 1000);
});
