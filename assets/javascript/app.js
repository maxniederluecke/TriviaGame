
var correctAnswers = 0;
var incorrectAnswers = 0;
var selectedValOne = "";
var selectedOne = $("input[type='radio'][name='q1']:checked");
if (selectedOne.length > 0) {
    selectedValOne = selectedOne.val();
};
var selectedValTwo = "";
var selectedTwo = $("input[type='radio'][name='q1']:checked");
if (selectedTwo.length > 0) {
    selectedValTwo = selectedTwo.val();
};
var selectedValThree = "";
var selectedThree = $("input[type='radio'][name='q1']:checked");
if (selectedThree.length > 0) {
    selectedValThree = selectedThree.val();
};
var selectedValFour = "";
var selectedFour = $("input[type='radio'][name='q1']:checked");
if (selectedFour.length > 0) {
    selectedValFour = selectedFour.val();
};
var selectedValFive = "";
var selectedFive = $("input[type='radio'][name='q1']:checked");
if (selectedFive.length > 0) {
    selectedValFive = selectedFive.val();
};

console.log(selectedValOne);
console.log(selectedOne.value);

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
    alert("Time Up!");
    };
};
function stop() {
    clearInterval(intervalId);
};

run();




