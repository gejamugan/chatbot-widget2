document.addEventListener("DOMContentLoaded", () => {
    const messagesContainer = document.getElementById("chatbot-messages");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");

    const appendMessage = (message, sender) => {
        const messageElement = document.createElement("div");
        messageElement.className = `message ${sender}`;
        messageElement.textContent = message;
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    };

    const sendMessage = () => {
        const message = userInput.value;
        if (message.trim()) {
            appendMessage(message, "user");
            userInput.value = "";

            // Simulate bot response
            setTimeout(() => {
                const botResponse = getBotResponse(message);
                appendMessage(botResponse, "bot");
            }, 1000);
        }
    };

    const getBotResponse = (userMessage) => {
        // Simple example of bot responses
        const responses = {
            "hi": "Hello!",
            "how are you?": "I'm a bot, I'm always good!",
            "bye": "Goodbye!"
        };
        return responses[userMessage.toLowerCase()] || "I don't understand that.";
    };

    sendButton.addEventListener("click", sendMessage);

    userInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});
