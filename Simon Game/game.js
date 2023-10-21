// // alert("hello")
// var userClickedPattern = [];
// var gamePattern = [];
// var buttonColors = ["green","red","yellow","blue"];
// var level = 0;
// var started = false;
// $(document).on("keydown",function(){
//     if(!started){
//         nextSequence();
//         $("h1").text("Level "+level);
//         started = true;
//     }
    
// });

// function startOver(){
//     level = 0;
//     started = false;
//     gamePattern = [];
// }

// function checkAnswer(currentLevel){
    
//     if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){

//         console.log("Success");

//         if(userClickedPattern.length === gamePattern.length){

//             setTimeout(function(){
//                 nextSequence();
//             },1000);
//         }
//     }else{

//         console.log("Wrong");
//         var audio = new Audio("sounds/wrong.mp3");
//         audio.play();
//         $("body").addClass("game-over");
//         setTimeout(function(){
//             $("body").removeClass("game-over");
//         },200);
//         $("h1").text("Game over, press any key to restart.");
//         startOver();
//     }
// }


// function playSound(color){
//     var audio = new Audio("sounds/"+color+".mp3");
//     audio.play();

// }

// function animatePress(currentColor){
//     $("."+currentColor).addClass("pressed");
//     setTimeout(function(){
//         $("."+currentColor).removeClass("pressed");
//     },100);
// }


// $(".btn").on("click",function(){
    
//     var userChosenColor = this.id;
//     userClickedPattern.push(userChosenColor);
//     playSound(userChosenColor);
//     animatePress(userChosenColor);
//     checkAnswer(userClickedPattern.length-1);
// });



// function nextSequence(){
//     userClickedPattern = [];
//     var randomNumber = Math.floor(Math.random()*4);
//     var randomChosenColor = buttonColors[randomNumber]; 
//     gamePattern.push(randomChosenColor);

//     $("."+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

//     playSound(randomChosenColor);
//     animatePress(randomChosenColor);
//     level++;
//     $("h1").text("Level "+level);
    
// }






// var gamePattern = [];
// var userClickedPattern = [];
// var buttonColors = ["red","green","yellow","blue"];
// var level = 0;
// var started = false;



// $(document).keydown(function(){
//     if(!started){
//         $("h1").text("Level "+ level);
//         nextSequence();
//     }
// });


// $(".btn").click(function(){
//     var chosenColor = this.id;
//     userClickedPattern.push(chosenColor);
//     animatePress(chosenColor);
//     playSound(chosenColor);
//     checkAnswer(userClickedPattern.length-1);
// });

// function startOver(){
//     level = 0;
//     started = false;
//     gamePattern = [];
// }

// function checkAnswer(level){

//     if(userClickedPattern[level] === gamePattern[level]){

//         if(userClickedPattern.length === gamePattern.length){
//             console.log("succes");
//             setTimeout(function(){
//                 nextSequence();
//             },1000);
//         }

//     }else{
//         console.log("Wrong");
//         $("body").addClass("game-over");
//         setTimeout(function(){
//             $("body").removeClass("game-over");
//         },500);
//         $("h1").text("Game over, press any key to restart.");
//         var audio = new Audio("sounds/wrong.mp3");
//         audio.play();
//         startOver();
//     }
    

// }

// function nextSequence(){
//     userClickedPattern = [];
//     var randomNumber = Math.floor(Math.random() * 4);
//     var randomChosenColor = buttonColors[randomNumber];
//     gamePattern.push(randomChosenColor);
//     animatePress(randomChosenColor);
//     playSound(randomChosenColor);
//     level++;
//     $("h1").text("Level "+level);


// }

var colors = ["red", "blue", "yellow", "green"];
var userClickedPattern = [];
var gamePattern = [];
var level = 0;
var started = false;


function animatePress(color){
    $("."+color).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    $("."+color).addClass("pressed");
    setTimeout(function(){
        $("."+color).removeClass("pressed");        
    },100);
}

function makeSound(color){

    var audio = new Audio("sounds/"+color+".mp3");
    audio.play();

}

function resetGame(){

    started = false;
    level = 0;
    gamePattern = [];

}


function checkAnswer(level){

    if(userClickedPattern[level] === gamePattern[level]){

        if(userClickedPattern.length === gamePattern.length){
        
            console.log("Success");
            setTimeout(function(){
                nextSequence();
            },500);

        }

    }else{
        console.log("Wrong");
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        $("h1").text("Game Over!! Press a key to restart again.");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },100);

        resetGame();
    }
}




$(document).keydown(function(){
    if(!started){
        started = true;
        $("h1").text("Level "+ level);
        nextSequence();
    }
});

$(".btn").click(function(){
    var buttonColor = this.id;
    userClickedPattern.push(buttonColor);

    animatePress(buttonColor);
    makeSound(buttonColor);
    checkAnswer(userClickedPattern.length-1);
});


// 
function nextSequence(){
    
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = colors[randomNumber];
    gamePattern.push(randomChosenColor);
    animatePress(randomChosenColor);
    makeSound(randomChosenColor);
    level++;
    $("h1").text("Level " + level);

}

