  // Wait for the HTML content to be fully loaded before running JavaScript
  document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the necessary elements from the HTML content
    var successText = document.getElementById("successText");
    var beginSection = document.getElementById("beginSection");

    // Clear the inner HTML of the elements
    successText.innerHTML = "";

    // Define the text for typewriter effect
    var text1 = "congratulations !!! \n You got everything right !!";


    // Typewriter effect for the initial <h1> element
    var i = 0;
    var speed = 100; // Speed of typing (in milliseconds)

 // Start the color animation
 successText.style.animation = "colorAnimation 9s infinite";

    // Function for the typewriter effect of the initial <h1> element
    function typeWriter1() {
        // Check if there are more characters to type
        if (i < text1.length) {
            // Add the current character to the successText element
            successText.textContent += text1.charAt(i);

            // Increment the character index
            i++;

            // Schedule the next character typing
            setTimeout(typeWriter1, speed);
        } else {
            // Start the color animation for the initial <h1> element
            successText.style.animation = "colorAnimation 9s infinite";

            // Show the button after the typewriter effect for the initial <h1> element completes
            beginSection.style.display = "block";
        }
    }

    // Start the typewriter effect for the initial <h1> element
    typeWriter1();
});