document.addEventListener('DOMContentLoaded', function() {
    const asterisksElement = document.getElementById('asterisks');
    const message = "hadshi li kn3rf ndir akheti ";
    let delay = 0;

    for (let i = 0; i < message.length; i++) {
        const span = document.createElement('span');
        span.textContent = message[i];
        span.style.animation = `fadeIn 0.5s ${delay}s forwards`;
        asterisksElement.appendChild(span);
        delay += 0.1;
    }
});