const form = document.getElementById("guestForm");

form.addEventListener("submit", async function (event) {
    event.preventDefault();
    // get message from frontend
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData);
    console.log(formValues);
    // send the message to the API
    const response = await fetch("https://collab-journal-server.onrender.com/messages", {
        method: "POST",
        headers:{
        "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
    });
    const json = await response.json();
    console.log(json);
    // Refresh the message list
    await getMessages();

    // Clear the form fields
    form.reset();
});

async function getMessages() {
    // Clear existing messages
    const messageContainer = document.getElementById("messageContainer");
    messageContainer.innerHTML = '';
    
    // get messages from db with API
    const response = await fetch("https://collab-journal-server.onrender.com/messages");
    const messages = await response.json();
    

    
    // Function to shuffle an array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Shuffle the messages array
    shuffleArray(messages);

    // Define an array of your six colors
    const colors = ['#4E937A', '#FAC748', '#A2708A', '#BCCCE0', '#2D848A', '#408F95'];

    // Function to shuffle an array (Fisher-Yates shuffle)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Shuffle the colors array
    shuffleArray(colors);

    // Append messages to the container
    messages.slice(0, 6).forEach(function(message, index) {
        const messageDiv = document.createElement("div");
        messageDiv.className = "message-item";

        messageDiv.style.backgroundColor = colors[index];

        const messageText = document.createElement("span");
        messageText.textContent = message.firstName + ": " + message.message;

        messageDiv.appendChild(messageText);
        document.getElementById("messageContainer").appendChild(messageDiv);
    });
}

getMessages();