// Ensure HTML (questions) have been answered before running JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // Add event listener to the submit button
  document.getElementById("submitBut").addEventListener("click", checkAnswer);

  // Function to check the answers
  function checkAnswer() {
    // Disable the submit button
    document.getElementById("submitBut").disabled = true;

    // Show the loader
    var result = document.getElementById("result");
    result.innerHTML =
      '<div class="bouncing-loader">' + "<div></div>".repeat(3) + "</div>";

    // Simulate a delay using setTimeout
    setTimeout(function () {
      // Get the answers
      var problem1 = document.getElementById("problem1").value;
      var problem2 = document.getElementById("problem2").value;
      var problem3 = document.getElementById("problem3").value;

      // Initial score
      var score = 0;

      // Answers
      var answers = ["4", "35", "7"];

      // Check Problem 1
      if (problem1 === answers[0]) {
        score++;
        document.getElementById("problem1").className = "correct";
      } else {
        document.getElementById("problem1").className = "incorrect";
      }

      // Check Problem 2
      if (problem2 === answers[1]) {
        score++;
        document.getElementById("problem2").className = "correct";
      } else {
        document.getElementById("problem2").className = "incorrect";
      }

      // Check Problem 3
      if (problem3 === answers[2]) {
        score++;
        document.getElementById("problem3").className = "correct";
      } else {
        document.getElementById("problem3").className = "incorrect";
      }

      // Display the score
      document.getElementById("score").innerHTML = "Score: " + score + "/3";

      // Display the result
      var result = document.getElementById("result");
      var errorMsg = document.getElementById("error-msg");

      // Check for possibilities

      // If any question is unanswered
      if (problem1 === "" || problem2 === "" || problem3 === "") {
        errorMsg.innerHTML = "Please answer all questions.";
        result.innerHTML = "";

        // If everything is correct
      } else if (score === 3) {
        result.innerHTML = "You got all the answers correct!";
        errorMsg.innerHTML = "";
        // Redirect to success page
        window.location.href = "success2.html";

        // If 0, 1, or 2 answers are correct
      } else {
        result.innerHTML =
          "You got " + score + " out of 3 correct. Keep trying!";
        errorMsg.innerHTML = "";
      }

      // Enable the submit button
      document.getElementById("submitBut").disabled = false;
    }, 2000);
  }
});
