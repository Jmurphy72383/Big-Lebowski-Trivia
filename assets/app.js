console.log("connected!");

var correct = 0;
var incorrect = 0;
var question1 = "What is The Dude's First Name?";
var question2 = "What Happened to Donnie's Final Remains?";
var question3 = "What is The Dude's Drink of Choice?";
var question4 = "Why Does Walter Pull a Gun on Smokey?";
var question5 = "Who Pee'd on The Dude's Rug?";
var question6 = "Why Can't Walter Bowl on Sundays?";
var question7 = "Who Does Nobody Fuck With?"

$(".startButton").on("click", function() {
    $(".startButton").remove();
    $("h1").remove();
    $("h3").remove();
    
    startGame();
    questionOne();
})

function questionOne() {
    $("body").css({
        backgroundImage: "url('assets/images/theDude.png')",
        textAlign: "center"
    })
    var question1div = $("<div>");
    var imageCorrect1 = $("<img>");
    imageCorrect1.attr("src", "assets/images/imTheDude.gif");
    imageCorrect1.attr("alt", "Rules");
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
        $("#aggression").get(0).play();
        $("#bodyContent").append(imageCorrect1);
        $("#bodyContent").append(nextBtn);
        $(".nextBtn").on("click", function() {
            $(".nextBtn").remove();
            $("#bodyContent").html("");
            questionTwo();
        })
    })
    //Incorrect Answer Button Click
    $(".btn1, .btn2, .btn4").on("click", function() {
        $("#bodyContent").html("<h2>That is Incorrect!<br>The Dude's first name is Jeffrey.</h2>")
        incorrect++;
        $("#aggression").get(0).play();
        $("#bodyContent").append(imageCorrect1);
        $("#bodyContent").append(nextBtn);
        $(".nextBtn").on("click", function() {
            $(".nextBtn").remove();
            $("#bodyContent").html("");
            questionTwo();
        })
    })
}

function questionTwo() {
    $("body").css({
        backgroundImage: "url('assets/images/walter8.jpg')",
        textAlign: "center"
    })
    var question1div = $("<div>");
    var imageCorrect2 = $("<img>");
    imageCorrect2.attr("src", "assets/images/sweetPrince.gif");
    imageCorrect2.attr("alt", "Sweet Prince");
    var q1H2 = $("<h2>").text(question2);
    question1div.append(q1H2);
    $("#bodyContent").prepend(question1div);
    var answer1div = $("<div>");
    $("div").addClass("buttonsClass");
    var bttn1 = $("<button class='btn1'>").text("Donated to Science");
    var bttn2 = $("<button class='btn2'>").text("Burried Beneath the Bowling Alley");
    var bttn3 = $("<button class='btn3'>").text("Ashes were put into a Coffee Can and Spread");
    var bttn4 = $("<button class='btn4'>").text("Donnie Faked his Death to get out of Bowling");
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
        $("#sweet").get(0).play();
        $("#bodyContent").append(imageCorrect2);
        $("#bodyContent").append(nextBtn);
        $(".nextBtn").on("click", function() {
            $(".nextBtn").remove();
            $("#bodyContent").html("");
            questionThree();
        })
    })
    //Incorrect Answer Button Click
    $(".btn1, .btn2, .btn4").on("click", function() {
        $("#bodyContent").html("<h2>That is Incorrect!<br>His Remains were Spread from a Folgers Can.</h2>")
        incorrect++;
        $("#sweet").get(0).play();
        $("#bodyContent").append(imageCorrect2);
        $("#bodyContent").append(nextBtn);
        $(".nextBtn").on("click", function() {
            $(".nextBtn").remove();
            $("#bodyContent").html("");
            questionThree();
        })
    })
}

function questionThree() {
    $("body").css({
        backgroundImage: "url('assets/images/dudeDrink.jpg')",
        textAlign: "center"
    })
    var question1div = $("<div>");
    var imageCorrect3 = $("<img>");
    imageCorrect3.attr("src", "assets/images/Beverage.gif");
    imageCorrect3.attr("alt", "White Russian");
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
        $("#bodyContent").append(imageCorrect3);
        $("#bodyContent").append(nextBtn);
        $(".nextBtn").on("click", function() {
            $(".nextBtn").remove();
            $("#bodyContent").html("");
            questionFour();
        })
    })
    //Incorrect Answer Button Click
    $(".btn2, .btn3, .btn4").on("click", function() {
        $("#bodyContent").html("<h2>That is Incorrect!<br>The Dude is fond of White Russians/Caucasians.</h2>")
        incorrect++;
        $("#beverage").get(0).play();
        $("#bodyContent").append(imageCorrect3);
        $("#bodyContent").append(nextBtn);
        $(".nextBtn").on("click", function() {
            $(".nextBtn").remove();
            $("#bodyContent").html("");
            questionFour();
        })
    })
}

function questionFour() {
    $("body").css({
        backgroundImage: "url('assets/images/markItZero.jpg')",
        textAlign: "center"
    })
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
        $("#bodyContent").html("<h2>That is Incorrect!<br>He Wouldnt Mark his Score Zero After Commiting a Foul.</h2>")
        incorrect++;
        $("#rules").get(0).play();
        $("#bodyContent").append(imageCorrect4);
        $("#bodyContent").append(nextBtn);
        $(".nextBtn").on("click", function() {
            $(".nextBtn").remove();
            $("#bodyContent").html("");
            questionFive();
        })
    })
}

function questionFive() {
    $("body").css({
        backgroundImage: "url('assets/images/dudeRug2.jpg')",
        textAlign: "center",
        objectFit: "contain",
        color: "white"
    })
    var question1div = $("<div>");
    var imageCorrect5 = $("<img>");
    imageCorrect5.attr("src", "assets/images/Woo.gif");
    imageCorrect5.attr("alt", "Woo");
    imageCorrect5.addClass("wooPee");
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
        $("#bodyContent").append(imageCorrect5);
        $("#bodyContent").append(nextBtn);
        $(".nextBtn").on("click", function() {
            $(".nextBtn").remove();
            $("#bodyContent").html("");
            questionSix();
        })
    })
    //Incorrect Answer Button Click
    $(".btn1, .btn2, .btn3").on("click", function() {
        $("#bodyContent").html("<h2>That is Incorrect!<br>Woo Pee'd on his Rug.</h2>")
        incorrect++;
        $("#rug").get(0).play();
        $("#bodyContent").append(imageCorrect5);
        $("#bodyContent").append(nextBtn);
        $(".nextBtn").on("click", function() {
            $(".nextBtn").remove();
            $("#bodyContent").html("");
            questionSix();
        })
    })
}

function questionSix() {
    $("body").css({
        backgroundImage: "url('assets/images/walter8.jpg')",
        textAlign: "center",
        color: "black"
    })
    var question1div = $("<div>");
    var imageCorrect6 = $("<img>");
    imageCorrect6.attr("src", "assets/images/shabbos.gif");
    imageCorrect6.attr("alt", "Shomer Shabbos");
    var q1H2 = $("<h2>").text(question6);
    question1div.append(q1H2);
    $("#bodyContent").prepend(question1div);
    var answer1div = $("<div>");
    $("div").addClass("buttonsClass");
    var bttn1 = $("<button class='btn1'>").text("He Has to Go to Church");
    var bttn2 = $("<button class='btn2'>").text("He Has to Watch his Ex-wife's Dog");
    var bttn3 = $("<button class='btn3'>").text("He Has to Find The Dude a Toe by 3 o'clock");
    var bttn4 = $("<button class='btn4'>").text("Shomer Shabbos");
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
        $("#life").get(0).play();
        $("#bodyContent").append(imageCorrect6);
        $("#bodyContent").append(nextBtn);
        $(".nextBtn").on("click", function() {
            $(".nextBtn").remove();
            $("#bodyContent").html("");
            questionSeven();
        })
    })
    //Incorrect Answer Button Click
    $(".btn1, .btn2, .btn3").on("click", function() {
        $("#bodyContent").html("<h2>That is Incorrect!<br>He is Shomer Shabbos!</h2>")
        incorrect++;
        $("#life").get(0).play();
        $("#bodyContent").append(imageCorrect6);
        $("#bodyContent").append(nextBtn);
        $(".nextBtn").on("click", function() {
            $(".nextBtn").remove();
            $("#bodyContent").html("");
            questionSeven();
        })
    })
}

function questionSeven() {
    $("body").css({
        backgroundImage: "url('assets/images/faces2.jpg')",
        textAlign: "center",
        color: "white"
    })
    var question1div = $("<div>");
    var imageCorrect7 = $("<img>");
    imageCorrect7.attr("src", "assets/images/jesus.gif");
    imageCorrect7.attr("alt", "Jesus");
    imageCorrect7.addClass("wooPee");
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
    $("button").css({
        color: "yellow"
    })

    //Correct Answer Button Click
    $(".btn1").on("click", function() {
        $("body").css({
            backgroundImage: "url('assets/images/theJesus2.png')",
            textAlign: "center",
            color: "black"
        })
        $("#bodyContent").html("<h2>That is Correct!</h2>");
        correct++;
        $("#jesus").get(0).play();
        $("#bodyContent").append(imageCorrect7);
        $("#bodyContent").append(nextBtn);
        $(".nextBtn").on("click", function() {
            $(".nextBtn").remove();
            $("#bodyContent").html("");
            endGame();
        })
    })
    //Incorrect Answer Button Click
    $(".btn2, .btn3, .btn4").on("click", function() {
        $("body").css({
            backgroundImage: "url('assets/images/theJesus2.png')",
            textAlign: "center",
            color: "black"
        })
        $("#bodyContent").html("<h2>That is Incorrect!<br>Nobody Fucks with The Jesus.</h2>")
        incorrect++;
        $("#jesus").get(0).play();
        $("#bodyContent").append(imageCorrect7);
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
    $("body").css({
        background: "black",
        textAlign: "center",
        color: "white"
    })
    $("#mainContent").html("<h2>Thats It!</h2>");
    $("h2").addClass("ending");
    $("#mainContent").append("<h2>Lets see how you did....</h2>");
    $("#bodyContent").html("<h2>Correct Answers: <span></span> </h2>");
    $("#bodyContent").append("<h2>Incorrect Answers: <span></span> </h2>");
    $("#bodyContent").append("<h2>Now Heres Some Random Lebowski Facts....</h2>")
    $("span").addClass("correct");
    $(".correct").html(correct);
    $("span").last().addClass("incorrect");
    $(".incorrect").html(incorrect);
    var newFactsImg = $("<img>");
    newFactsImg.addClass("factsImg");
    newFactsImg.attr("src", "assets/images/facts.jpg");
    newFactsImg.attr("alt", "Lebowski Facts");
    $("#bodyContent").append(newFactsImg); 
    $(".factsImg").css({
        objectFit: "cover",
        overflow: "auto",
        width: "900px",
        height: "5000px"
    })
}




