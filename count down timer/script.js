document.getElementById('startBtn').addEventListener('click', function() {
    const targetDate = new Date(document.getElementById('targetDate').value);
    const message = document.getElementById('message');

    if (isNaN(targetDate)) {
        message.textContent = "Please select a valid date and time.";
        return;
    }

    message.textContent = "";
    const interval = setInterval(function() {
        const now = new Date().getTime();
        const timeDifference = targetDate - now;

        if (timeDifference <= 0) {
            clearInterval(interval);
            document.getElementById('days').textContent = "00";
            document.getElementById('hours').textContent = "00";
            document.getElementById('minutes').textContent = "00";
            document.getElementById('seconds').textContent = "00";
            message.textContent = "The countdown has ended!";
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
    }, 1000);
});
