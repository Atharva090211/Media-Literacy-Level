function submitQuiz() {
    var totalScore = 0;

    // Loop through each question box
    for (var i = 1; i <= 7; i++) {
        // Get the selected option for each question
        var selectedOption = document.querySelector('#question-box' + i + ' .selected');
        
        // If an option is selected, add its value to the total score
        if (selectedOption) {
            // Retrieve the value from the data-value attribute
            totalScore += parseInt(selectedOption.dataset.value);
        } else {
            // If no option is selected, assume a neutral response (value = 3)
            totalScore += 3;
        }
    }

    // Determine the result category based on the total score
    var result;
    if (totalScore >= 35) {
        result = "Very Good";
    } else if (totalScore >= 28) {
        result = "Good";
    } else if (totalScore >= 21) {
        result = "Average";
    } else if (totalScore >= 14) {
        result = "Poor";
    } else {
        result = "Very Poor";
    }

    // Display the result to the user
    alert("Your result category is: " + result);
}

function selectOption(option) {
    // Remove 'selected' class from all options in the same question box
    var questionBox = option.closest('.question-box');
    var circles = questionBox.querySelectorAll('.option-circle');
    circles.forEach(function(circle) {
        circle.classList.remove('selected');
    });

    // Add 'selected' class to the clicked option
    option.classList.add('selected');
}


function selectOption(option) {
    // Remove 'selected' class from all options in the same question box
    var questionBox = option.closest('.question-box');
    var circles = questionBox.querySelectorAll('.option-circle');
    circles.forEach(function(circle) {
        circle.classList.remove('selected');
    });

    // Add 'selected' class to the clicked option
    option.classList.add('selected');
}

function clearForm() {
    // Get all input fields in the form
    var inputFields = document.querySelectorAll('input[type="text"], input[type="email"], input[type="number"]');
    
    // Loop through each input field and reset its value
    inputFields.forEach(function(input) {
        input.value = '';
    });
    
    // Get all option circles in the quiz questions
    var optionCircles = document.querySelectorAll('.option-circle');
    
    // Loop through each option circle and remove the 'selected' class
    optionCircles.forEach(function(circle) {
        circle.classList.remove('selected');
    });
}
