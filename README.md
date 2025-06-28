# FakeJTChat

## Overview
FakeJTChat is a simple web-based chat simulator that mimics the functionality of a Twitch chat interface. It allows users to add pre-made messages with associated usernames and trigger times, and it features a timer to display live messages.

## Project Structure
The project consists of the following files:

- `index.html`: The main HTML file that contains the structure of the chat interface, including the layout for the chat area, controls for adding messages, and a timer display. It links to the external JavaScript and CSS files.
  
- `script.js`: This JavaScript file manages chat messages, handles the timer functionality, and updates the chat display. Key functions include:
  - `addMessage`: Adds a new message to the list.
  - `displayMessages`: Displays all pre-made messages in the chat area.
  - `startTimer`: Starts the timer for displaying live messages.
  - `stopTimer`: Stops the timer.
  - `checkMessages`: Checks for messages to display at the specified times.

- `style.css`: This CSS file contains styles for the chat interface, including styles for the body, container, chat area, controls, messages, usernames, and timestamps. It defines the visual appearance to match a Twitch-like theme.

## Usage
1. Open `index.html` in a web browser.
2. Enter a username and message in the provided input fields.
3. Set a trigger time in seconds for when the message should appear in the live chat.
4. Click "Add Message" to add the message to the list.
5. Start the timer by clicking "Start Timer" to see messages appear in the live chat area at the specified times.
6. Use "Stop Timer" to halt the timer.

## License
This project is open-source and available for anyone to use and modify.