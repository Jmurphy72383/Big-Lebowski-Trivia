console.log("connected!");

var correct = 0;
var incorrect = 0;
var question1 = "What is The Dude's First Name?";
var question2 = "What Religion is Walter?";
var question3 = "What is The Dude's Drink of Choice?";
var question4 = "Why Does Walter Pull a Gun on Smokey?";
var question5 = "Who Pee'd on The Dude's Rug?";
var question6 = "Why Can't Walter Bowl on Sundays?";
var question7 = "Who Does Nobody Fuck With?"

$(".startButton").on("mouseover", function() {
    
})

$(".startButton").on("click", function() {
    $(".startButton").remove();
    $("h1").remove();
    $("body").css({
        background: "white",
        textAlign: "center"
    })
    startGame();
    questionOne();
})

function questionOne() {
    var question1div = $("<div>");
    var q1H2 = $("<h2>").text(question1);
    question1div.append(q1H2);
    $("#bodyContent").prepend(question1div);
    var answer1div = $("<div>");
    $("div").addClass("buttonsClass");
    var bttn1 = $("<button class='btn1'>").text("Donnie");
    var bttn2 = $("<button class='btn2'>").text("Jackie");
    var bttn3 = $("<button class='btn3'>").text("Jeffrey");
    var bttn4 = $("<button class='btn4'>").text("Larry");
    var nextBtn = $("<button class='nextBtn'>").text("Next Question");
    answer1div.append(bttn1);
    answer1div.append(bttn2);
    answer1div.append(bttn3);
    answer1div.append(bttn4);
    $("#bodyContent").append(answer1div);

    //Correct Answer Button Click
    $(".btn3").on("click", function() {
        $("#bodyContent").html("<h2>That is Correct!</h2>");
        correct++;
        //$("#dudeness").get(0).play();
        $("#bodyContent").append(nextBtn);
        $(".nextBtn").on("click", function() {
            $(".nextBtn").remove();
            $("#bodyContent").html("");
            questionTwo();
        })
    })
    //Incorrect Answer Button Click
    $(".btn1, .btn2, .btn4").on("click", function() {
        $("#bodyContent").html("<h2>That is Incorrect!</h2>")
        incorrect++;
        $("#bodyContent").append(nextBtn);
        $(".nextBtn").on("click", function() {
            $(".nextBtn").remove();
            $("#bodyContent").html("");
            questionTwo();
        })
    })
}

function questionTwo() {
    var question1div = $("<div>");
    var q1H2 = $("<h2>").text(question2);
    question1div.append(q1H2);
    $("#bodyContent").prepend(question1div);
    var answer1div = $("<div>");
    $("div").addClass("buttonsClass");
    var bttn1 = $("<button class='btn1'>").text("Protestant");
    var bttn2 = $("<button class='btn2'>").text("Jewish");
    var bttn3 = $("<button class='btn3'>").text("Mormon");
    var bttn4 = $("<button class='btn4'>").text("Catholic");
    var nextBtn = $("<button class='nextBtn'>").text("Next Question");
    answer1div.append(bttn1);
    answer1div.append(bttn2);
    answer1div.append(bttn3);
    answer1div.append(bttn4);
    $("#bodyContent").append(answer1div);

    //Correct Answer Button Click
    $(".btn2").on("click", function() {
        $("#bodyContent").html("<h2>That is Correct!</h2>");
        correct++;
        $("#bodyContent").append(nextBtn);
        $(".nextBtn").on("click", function() {
            $(".nextBtn").remove();
            $("#bodyContent").html("");
            questionThree();
        })
    })
    //Incorrect Answer Button Click
    $(".btn1, .btn3, .btn4").on("click", function() {
        $("#bodyContent").html("<h2>That is Incorrect!</h2>")
        incorrect++;
        $("#bodyContent").append(nextBtn);
        $(".nextBtn").on("click", function() {
            $(".nextBtn").remove();
            $("#bodyContent").html("");
            questionThree();
        })
    })
}

function questionThree() {
    var question1div = $("<div>");
    var imageCorrect = $("<img>");
    imageCorrect.attr("src", "assets/images/Beverage.gif");
    imageCorrect.attr("alt", "White Russian");
    var q1H2 = $("<h2>").text(question3);
    question1div.append(q1H2);
    $("#bodyContent").prepend(question1div);
    var answer1div = $("<div>");
    $("div").addClass("buttonsClass");
    var bttn1 = $("<button class='btn1'>").text("White Russian");
    var bttn2 = $("<button class='btn2'>").text("Old Fashioned");
    var bttn3 = $("<button class='btn3'>").text("Scotch");
    var bttn4 = $("<button class='btn4'>").text("PBR");
    var nextBtn = $("<button class='nextBtn'>").text("Next Question");
    answer1div.append(bttn1);
    answer1div.append(bttn2);
    answer1div.append(bttn3);
    answer1div.append(bttn4);
    $("#bodyContent").append(answer1div);

    //Correct Answer Button Click
    $(".btn1").on("click", function() {
        $("#bodyContent").html("<h2>That is Correct!</h2>");
        correct++;
        $("#beverage").get(0).play();
        $("#bodyContent").append(imageCorrect);
        $("#bodyContent").append(nextBtn);
        $(".nextBtn").on("click", function() {
            $(".nextBtn").remove();
            $("#bodyContent").html("");
            questionFour();
        })
    })
    //Incorrect Answer Button Click
    $(".btn2, .btn3, .btn4").on("click", function() {
        $("#bodyContent").html("<h2>That is Incorrect!</h2>")
        incorrect++;
        $("#bodyContent").append(nextBtn);
        $(".nextBtn").on("click", function() {
            $(".nextBtn").remove();
            $("#bodyContent").html("");
            questionFour();
        })
    })
}

function questionFour() {
    var question1div = $("<div>");
    var imageCorrect4 = $("<img>");
    imageCorrect4.attr("src", "assets/images/WalterRules.gif");
    imageCorrect4.attr("alt", "Rules");
    var q1H2 = $("<h2>").text(question4);
    question1div.append(q1H2);
    $("#bodyContent").prepend(question1div);
    var answer1div = $("<div>");
    $("div").addClass("buttonsClass");
    var bttn1 = $("<button class='btn1'>").text("He Bowled With Walters Ball");
    var bttn2 = $("<button class='btn2'>").text("He Wouldnt Mark His Score Zero");
    var bttn3 = $("<button class='btn3'>").text("He Threatened The Dude");
    var bttn4 = $("<button class='btn4'>").text("Walter Was Having a 'Nam Flashback");
    var nextBtn = $("<button class='nextBtn'>").text("Next Question");
    answer1div.append(bttn1);
    answer1div.append(bttn2);
    answer1div.append(bttn3);
    answer1div.append(bttn4);
    $("#bodyContent").append(answer1div);

    //Correct Answer Button Click
    $(".btn2").on("click", function() {
        $("#bodyContent").html("<h2>That is Correct!</h2>");
        correct++;
        $("#rules").get(0).play();
        $("#bodyContent").append(imageCorrect4);
        $("#bodyContent").append(nextBtn);
        $(".nextBtn").on("click", function() {
            $(".nextBtn").remove();
            $("#bodyContent").html("");
            questionFive();
        })
    })
    //Incorrect Answer Button Click
    $(".btn1, .btn3, .btn4").on("click", function() {
        $("#bodyContent").html("<h2>That is Incorrect!</h2>")
        incorrect++;
        $("#bodyContent").append(nextBtn);
        $(".nextBtn").on("click", function() {
            $(".nextBtn").remove();
            $("#bodyContent").html("");
            questionFive();
        })
    })
}

function questionFive() {
    var question1div = $("<div>");
    var q1H2 = $("<h2>").text(question5);
    question1div.append(q1H2);
    $("#bodyContent").prepend(question1div);
    var answer1div = $("<div>");
    $("div").addClass("buttonsClass");
    var bttn1 = $("<button class='btn1'>").text("The Nihilists");
    var bttn2 = $("<button class='btn2'>").text("Donnie");
    var bttn3 = $("<button class='btn3'>").text("Jackie Treehorn");
    var bttn4 = $("<button class='btn4'>").text("Woo");
    var nextBtn = $("<button class='nextBtn'>").text("Next Question");
    answer1div.append(bttn1);
    answer1div.append(bttn2);
    answer1div.append(bttn3);
    answer1div.append(bttn4);
    $("#bodyContent").append(answer1div);

    //Correct Answer Button Click
    $(".btn4").on("click", function() {
        $("#bodyContent").html("<h2>That is Correct!</h2>");
        correct++;
        $("#rug").get(0).play();
        $("#bodyContent").append(nextBtn);
        $(".nextBtn").on("click", function() {
            $(".nextBtn").remove();
            $("#bodyContent").html("");
            questionSix();
        })
    })
    //Incorrect Answer Button Click
    $(".btn1, .btn2, .btn3").on("click", function() {
        $("#bodyContent").html("<h2>That is Incorrect!</h2>")
        incorrect++;
        $("#bodyContent").append(nextBtn);
        $(".nextBtn").on("click", function() {
            $(".nextBtn").remove();
            $("#bodyContent").html("");
            questionSix();
        })
    })
}

function questionSix() {
    var question1div = $("<div>");
    var q1H2 = $("<h2>").text(question6);
    question1div.append(q1H2);
    $("#bodyContent").prepend(question1div);
    var answer1div = $("<div>");
    $("div").addClass("buttonsClass");
    var bttn1 = $("<button class='btn1'>").text("He Has to Go to Church");
    var bttn2 = $("<button class='btn2'>").text("He Has to Watch his Ex-wife's Dog");
    var bttn3 = $("<button class='btn3'>").text("He Has to Find The Dude a Toe by 3 o'clock");
    var bttn4 = $("<button class='btn4'>").text("Shomer Fucking Shabbos");
    var nextBtn = $("<button class='nextBtn'>").text("Next Question");
    answer1div.append(bttn1);
    answer1div.append(bttn2);
    answer1div.append(bttn3);
    answer1div.append(bttn4);
    $("#bodyContent").append(answer1div);

    //Correct Answer Button Click
    $(".btn4").on("click", function() {
        $("#bodyContent").html("<h2>That is Correct!</h2>");
        correct++;
        $("#bodyContent").append(nextBtn);
        $(".nextBtn").on("click", function() {
            $(".nextBtn").remove();
            $("#bodyContent").html("");
            questionSeven();
        })
    })
    //Incorrect Answer Button Click
    $(".btn1, .btn2, .btn3").on("click", function() {
        $("#bodyContent").html("<h2>That is Incorrect!</h2>")
        incorrect++;
        $("#bodyContent").append(nextBtn);
        $(".nextBtn").on("click", function() {
            $(".nextBtn").remove();
            $("#bodyContent").html("");
            questionSeven();
        })
    })
}

function questionSeven() {
    var question1div = $("<div>");
    var q1H2 = $("<h2>").text(question7);
    question1div.append(q1H2);
    $("#bodyContent").prepend(question1div);
    var answer1div = $("<div>");
    $("div").addClass("buttonsClass");
    var bttn1 = $("<button class='btn1'>").text("The Jesus");
    var bttn2 = $("<button class='btn2'>").text("The Big Lebowski");
    var bttn3 = $("<button class='btn3'>").text("The Nihilists");
    var bttn4 = $("<button class='btn4'>").text("Bunny Lebowski");
    var nextBtn = $("<button class='nextBtn'>").text("End Game");
    answer1div.append(bttn1);
    answer1div.append(bttn2);
    answer1div.append(bttn3);
    answer1div.append(bttn4);
    $("#bodyContent").append(answer1div);

    //Correct Answer Button Click
    $(".btn1").on("click", function() {
        $("#bodyContent").html("<h2>That is Correct!</h2>");
        correct++;
        $("#jesus").get(0).play();
        $("#bodyContent").append(nextBtn);
        $(".nextBtn").on("click", function() {
            $(".nextBtn").remove();
            $("#bodyContent").html("");
            endGame();
        })
    })
    //Incorrect Answer Button Click
    $(".btn2, .btn3, .btn4").on("click", function() {
        $("#bodyContent").html("<h2>That is Incorrect!</h2>")
        incorrect++;
        $("#bodyContent").append(nextBtn);
        $(".nextBtn").on("click", function() {
            $(".nextBtn").remove();
            $("#bodyContent").html("");
            endGame();
        })
    })
}




//Start Game function for after the start button is clicked
function startGame() {
    $("#mainContent").html("<h2>Timer: <span></span> </h2>");
    $("h2").addClass("timer");
    $("span").addClass("counter");
    //$("#introSong").get(0).play();

   //Sets the timer to count down from 60
    var count = 90, timer = setInterval(function() {
        $(".counter").html(count--);
        if(count == -1) {
            clearInterval(timer);
            $("#mainContent").html("Times Up!");
            endGame();
        }
    }, 1000);
}

//End Game function for when the timer runs out
function endGame() {
    $("#mainContent").html("Thats It!");
    $("#mainContent").append("<p>Lets see how you did....</p>");
    $("#bodyContent").html("<h2>Correct Answers: <span></span> </h2>");
    $("#bodyContent").append("<h2>Incorrect Answers: <span></span> </h2>");
    $("span").addClass("correct");
    $(".correct").html(correct);
    $("span").last().addClass("incorrect");
    $(".incorrect").html(incorrect);
}




