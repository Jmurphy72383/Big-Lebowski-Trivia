console.log("Connected!");

var correct = 0;
var incorrect = 0;
var question1 = "What is Kenny Powers' hometown?";
var question2 = "Who owns the BMW dealership in Shelby?";
var question3 = "What is the name of Kennys favorite bar in Shelby?"

$("#header").html("<h1>Kenny Powers Trivia</h1>");
$("#mainContent").html("<button>Start</button>");
$("button").addClass("startButton");

$(".startButton").on('click', function() {
    $("button").remove(".startButton");
    startGame();
    questionNumber1();

})

function startGame() {
    $("#mainContent").html("<h2>Timer: <span></span> </h2>");
    $("h2").addClass("timer");
    $("span").addClass("counter");

   //Sets the timer to count down from 60
    var count = 10, timer = setInterval(function() {
        $(".counter").html(count--);
        if(count == -1) {
            clearInterval(timer);
            $("#mainContent").html("Times Up!");
            endGame();
        }
    }, 1000);

    function endGame() {
   
        $("#mainContent").append("<p>Lets see how you did....</p>");
        $("#bodyContent").html("<h2>Correct Answers: <span></span> </h2>");
        $("#bodyContent").append("<h2>Incorrect Answers: <span></span> </h2>");
        $("span").addClass("correct");
        $(".correct").html(correct);
        $("span").last().addClass("incorrect");
        $(".incorrect").html(incorrect);
    }

    

   
}

function questionNumber1(){
    var question1div = $("<div>");
var q1H2 = $("<h2>").text(question1);
question1div.append(q1H2);
$("#bodyContent").prepend(question1div);
var answer1div = $("<div>");
$("div").addClass("buttonsClass");
var bttn1 = $("<button class='btn1'>").text("Myrtle Beach, SC");
var bttn2 = $("<button class='btn2'>").text("Shelby, NC");
var bttn3 = $("<button class='btn3'>").text("Little Rock, Arkansas");
var bttn4 = $("<button class='btn4'>").text("Daytona Beach, Florida");
answer1div.append(bttn1);
answer1div.append(bttn2);
answer1div.append(bttn3);
answer1div.append(bttn4);
$("#bodyContent").append(answer1div);

$(".btn2").on('click', function() {             //Question1 button click Right Answer
    $("#bodyContent").html("<h2>That is Correct!</h2>");
    correct ++;
    
    $("#bodyContent").append("<button class='nextButton'>Next Question</button>");
    $(".nextButton").on('click', function() {
        
        var question2div = $("<div>");          //Start of Question2
        var q2H2 = $("<h2>").text(question2);
        question2div.append(q2H2);
        $("#bodyContent").html(question2div);
        var answer2div = $("<div>");
        $("div").addClass("buttonsClassb");
        var bttn1b = $("<button class='btn1b'>").text("April Buchannon");
        var bttn2b = $("<button class='btn2b'>").text("Cleg");
        var bttn3b = $("<button class='btn3b'>").text("Ashleigh Schaeffer");
        var bttn4b = $("<button class='btn4b'>").text("Craig Mackworthy");
        answer2div.append(bttn1b);
        answer2div.append(bttn2b);
        answer2div.append(bttn3b);
        answer2div.append(bttn4b);
        $("#bodyContent").append(answer2div);
        $(".btn3b").on('click', function() {   //Question2 button clicks Right Answer.
            $("#bodyContent").html("<h2>That is Correct!</h2>");
            correct ++;
           
           $("#bodyContent").append("<button class='nextButton'>Next Question</button>");
           $(".nextButton").on('click', function() {
           
            var question3div = $("<div>");          //Start of Question3
                var q3H2 = $("<h2>").text(question3);
                question3div.append(q3H2);
                $("#bodyContent").html(question3div);
                var answer3div = $("<div>");
                $("div").addClass("buttonsClassb");
                var bttn1c = $("<button class='btn1c'>").text("Slugs");
                var bttn2c = $("<button class='btn2c'>").text("Shh-Boom Shh-Booms ");
                var bttn3c = $("<button class='btn3c'>").text("Clegs Place");
                var bttn4c = $("<button class='btn4c'>").text("Gentlemans Club");
                answer3div.append(bttn1c);
                answer3div.append(bttn2c);
                answer3div.append(bttn3c);
                answer3div.append(bttn4c);
                    $("#bodyContent").append(answer3div);
        })

    })   
            })
        })
 $(".btn1, .btn3, .btn4").on('click', function() {   //Question1 button clicks Wrong Answer.
    $("#bodyContent").html("<h2>Wrong!</h2>");
    incorrect ++;
    
    $("#bodyContent").append("<button class='nextButton'>Next Question</button>");
    $(".nextButton").on('click', function() {
        
        var question2div = $("<div>");          //Start of Question2
        var q2H2 = $("<h2>").text(question2);
        question2div.append(q2H2);
        $("#bodyContent").html(question2div);
        var answer2div = $("<div>");
        $("div").addClass("buttonsClassb");
        var bttn1b = $("<button class='btn1b'>").text("April Buchannon");
        var bttn2b = $("<button class='btn2b'>").text("Cleg");
        var bttn3b = $("<button class='btn3b'>").text("Ashleigh Schaeffer");
        var bttn4b = $("<button class='btn4b'>").text("Craig Mackworthy");
        answer2div.append(bttn1b);
        answer2div.append(bttn2b);
        answer2div.append(bttn3b);
        answer2div.append(bttn4b);
        $("#bodyContent").append(answer2div);

        $(".btn1b, .btn2b, .btn4b").on('click', function() {   //Question2 button clicks Wrong Answer.
            $("#bodyContent").html("<h2>Wrong!</h2>");
            incorrect ++;
            $("#bodyContent").append("<button class='nextButton'>Next Question</button>");

            $(".nextButton").on('click', function() {
        
                var question3div = $("<div>");          //Start of Question3
                var q3H2 = $("<h2>").text(question3);
                question3div.append(q3H2);
                $("#bodyContent").html(question3div);
                var answer3div = $("<div>");
                $("div").addClass("buttonsClassb");
                var bttn1c = $("<button class='btn1c'>").text("Slugs");
                var bttn2c = $("<button class='btn2c'>").text("Shh-Boom Shh-Booms ");
                var bttn3c = $("<button class='btn3c'>").text("Clegs Place");
                var bttn4c = $("<button class='btn4c'>").text("Gentlemans Club");
                answer3div.append(bttn1c);
                answer3div.append(bttn2c);
                answer3div.append(bttn3c);
                answer3div.append(bttn4c);
                    $("#bodyContent").append(answer3div);
               
                $(".btn1c, .btn3c, .btn4c").on('click', function() {   //Question3 button clicks Wrong Answer.
                $("#bodyContent").html("<h2>Wrong!</h2>");
                incorrect ++;
                $("#bodyContent").append("<button class='nextButton'>Next Question</button>");
            })
                    
            })
        })

    })
    
    
})
    

}