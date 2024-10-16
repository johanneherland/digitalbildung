document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript is running!"); // Debugging message to check JS execution

    // DOM elements
    const startButton = document.getElementById('startButton');
    const profileSubmit = document.getElementById('profileSubmit');
    const continueButton = document.getElementById('continueButton');
    const restartButton = document.getElementById('restartButton');

    const introSection = document.getElementById('intro');
    const profileSetupSection = document.getElementById('profileSetup');
    const contentFeedSection = document.getElementById('contentFeed');
    const resultSection = document.getElementById('result');
    const bubbleDescription = document.getElementById('bubbleDescription');

    const contentButtons = document.querySelectorAll('#contentButtons button');

    // User profile and selections
    let userChoices = {
        newsSource: '',
        filterUsed: false,
        interactions: []
    };

    // Start button event listener
    startButton.addEventListener('click', function() {
        console.log("Start button clicked!"); // Debugging message
        introSection.classList.add('hidden'); // Hide intro section
        profileSetupSection.classList.remove('hidden'); // Show profile setup section
    });

    // Profile submission event listener
    profileSubmit.addEventListener('click', function() {
        console.log("Profile submitted!"); // Debugging message
        userChoices.newsSource = document.getElementById('newsSource').value; // Get selected news source
        userChoices.filterUsed = document.getElementById('contentFilter').checked; // Get filter usage

        profileSetupSection.classList.add('hidden'); // Hide profile setup section
        contentFeedSection.classList.remove('hidden'); // Show content feed section
    });

    // Content interaction event listeners
    contentButtons.forEach(button => {
        button.addEventListener('click', function() {
            const contentType = this.getAttribute('data-content'); // Get the type of content clicked
            userChoices.interactions.push(contentType); // Store interaction
            this.disabled = true; // Disable button after interaction
            console.log("User clicked content: " + contentType); // Debugging message

            continueButton.classList.remove('hidden'); // Show continue button
        });
    });

    // Continue to results event listener
    continueButton.addEventListener('click', function() {
        console.log("Continue button clicked!"); // Debugging message
        contentFeedSection.classList.add('hidden'); // Hide content feed section
        resultSection.classList.remove('hidden'); // Show results section

        // Generate results based on user choices
        let resultText = "Based on your choices, here's your filter bubble:\n";

        if (userChoices.filterUsed) {
            resultText += "You used content filters to refine your feed. ";
        }

        resultText += `You interacted mainly with ${userChoices.interactions.join(', ')} content. `;

        if (userChoices.newsSource === 'mainstream') {
            resultText += "You prefer mainstream news.";
        } else if (userChoices.newsSource === 'alternative') {
            resultText += "You prefer alternative news.";
        } else if (userChoices.newsSource === 'social') {
            resultText += "You rely on social media for news.";
        }

        bubbleDescription.textContent = resultText; // Display the result text
    });

    // Restart event listener
    restartButton.addEventListener('click', function() {
        console.log("Restart button clicked!"); // Debugging message
        location.reload(); // Reload the page to restart the game
    });
});
