
var correctAnswers = 0;
var incorrectAnswers = 0;
var time = 30;
var intervalId;

function run() {
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    time--;
    $("#time").html("Time Remaining: " + time);
    console.log(time);
    if (time === 0) {
    stop();
    calcAnswers();
    alert("Time's Up! You got " + correctAnswers + " questions correct and " + incorrectAnswers + " questions incorrect");
    };
};
function stop() {
    clearInterval(intervalId);
};

function calcAnswers() {
	var selectedValOne = "";
	var selectedOne = $("input[type='radio'][name='q1']:checked");
	if (selectedOne.length > 0) {
	    selectedValOne = selectedOne.val();
	};
	var selectedValTwo = "";
	var selectedTwo = $("input[type='radio'][name='q2']:checked");
	if (selectedTwo.length > 0) {
	    selectedValTwo = selectedTwo.val();
	};
	var selectedValThree = "";
	var selectedThree = $("input[type='radio'][name='q3']:checked");
	if (selectedThree.length > 0) {
	    selectedValThree = selectedThree.val();
	};
	var selectedValFour = "";
	var selectedFour = $("input[type='radio'][name='q4']:checked");
	if (selectedFour.length > 0) {
	    selectedValFour = selectedFour.val();
	};
	var selectedValFive = "";
	var selectedFive = $("input[type='radio'][name='q5']:checked");
	if (selectedFive.length > 0) {
	    selectedValFive = selectedFive.val();
	if (selectedOne = 1) {
		correctAnswers++;
	} else {
		incorrectAnswers++;
	};
	if (selectedTwo = 2) {
		correctAnswers++;
	} else {
		incorrectAnswers++;
	};
	if (selectedThree = 1) {
		correctAnswers++;
	} else {
		incorrectAnswers++;
	};
	if (selectedFour = 2) {
		correctAnswers++;
	} else {
		incorrectAnswers++;
	};
	if (selectedFive = 3) {
		correctAnswers++;
	} else {
		incorrectAnswers++;
	};

	};
};

run();




