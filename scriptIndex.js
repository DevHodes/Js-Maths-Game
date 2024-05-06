  // Wait for the HTML content to be fully loaded before running JavaScript
  document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the necessary elements from the HTML content
    var successText = document.getElementById("successText");
    var successText2 = document.getElementById("successText2");
    var beginSection = document.getElementById("beginSection");

    // Clear the inner HTML of the elements
    successText.innerHTML = "";
    successText2.innerHTML = "";

    // Define the text for typewriter effect
    var text1 = "Maths Game";
    var text2 = "Once you click on the start button, you will get 3 sums.\n answer the questions until all  are correct.";

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

            // Start the typewriter effect for the second <h2> element immediately
            typeWriter2();
        }
    }

    // Typewriter effect for the second <h2> element
    var j = 0;

    // Function for the typewriter effect of the second <h2> element
    function typeWriter2() {
        // Check if there are more characters to type
        if (j < text2.length) {
            // Check if the current character is a line break
            if (text2.charAt(j) === "\n") {
                // Add a <br> element to the successText2 element
                successText2.innerHTML += "<br>";
            } else {
                // Add the current character to the successText2 element
                successText2.textContent += text2.charAt(j);
            }

            // Increment the character index
            j++;

            // Schedule the next character typing
            setTimeout(typeWriter2, speed);
        } else {
            // Remove the color animation from the second <h2> element
            successText2.style.animation = "none";

            // Show the button after the typewriter effect for the second <h2> element completes
            beginSection.style.display = "block";
        }
    }

    // Start the typewriter effect for the initial <h1> element
    typeWriter1();
});