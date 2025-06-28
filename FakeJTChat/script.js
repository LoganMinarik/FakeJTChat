let messages = [];
let timerInterval;
let currentTime = 0;

function addMessage() {
    const username = document.getElementById('username').value;
    const message = document.getElementById('message').value;
    const time = parseInt(document.getElementById('time').value);

    if (username && message && !isNaN(time)) {
        messages.push({ username, message, time });
        displayMessages();
        document.getElementById('message').value = ''; // Clear the message input after adding
    }
}

function displayMessages() {
    const chatArea = document.getElementById('chat-area');
    chatArea.innerHTML = ''; // Clear previous messages

    messages.forEach(msg => {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');

        const timestampSpan = document.createElement('span');
        timestampSpan.classList.add('timestamp');
        timestampSpan.textContent = formatTime(msg.time); // Display trigger time
        messageDiv.appendChild(timestampSpan);

        const usernameSpan = document.createElement('span');
        usernameSpan.classList.add('username');
        usernameSpan.textContent = msg.username + ": ";
        messageDiv.appendChild(usernameSpan);

        const textSpan = document.createElement('span');
        textSpan.textContent = msg.message;
        messageDiv.appendChild(textSpan);

        chatArea.appendChild(messageDiv);
    });
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return minutes + ":" + (remainingSeconds < 10 ? "0" : "") + remainingSeconds;
}

function startTimer() {
    currentTime = 0;
    displayTimer();
    timerInterval = setInterval(checkMessages, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function checkMessages() {
    currentTime++;
    displayTimer();

    messages.forEach(msg => {
        if (msg.time === currentTime) {
            displayChatMessage(msg);
        }
    });
}

function displayChatMessage(msg) {
    const chatArea = document.getElementById('live-chat-messages'); // Target the live chat area
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');

    const usernameSpan = document.createElement('span');
    usernameSpan.classList.add('username');
    usernameSpan.textContent = msg.username + ": ";
    messageDiv.appendChild(usernameSpan);

    const textSpan = document.createElement('span');
    textSpan.textContent = msg.message;
    messageDiv.appendChild(textSpan);

    chatArea.appendChild(messageDiv); 
    chatArea.scrollTop = chatArea.scrollHeight; // Auto-scroll to the bottom
}

function displayTimer() {
    document.getElementById('timer').textContent = `Timer: ${currentTime} seconds`;
}