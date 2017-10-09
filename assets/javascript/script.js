var buttonpressedP1 = false;
var buttonpressedP2 = false;
var choiceP1Pressed = false;
var choiceP2Pressed = false;
var choiceP1;
var choiceP2;
var GameScore;
var scoreP1;
var scoreP2;
scoreP1 = 0;
scoreP2 = 0;
var games;
var gamesTie;
games = 0;
gamesTie = 0;
var key;
var playerName1;
var playerName2;
var pushedRef;
var playerName1Text = false;
var playerName2Text = false;
 var p1Button;

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDRp4UdWueWFKg3Z61f8GjujC3cwucpRZ0",
    authDomain: "rps-multiplayer-e165f.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-e165f.firebaseio.com",
    projectId: "rps-multiplayer-e165f",
    storageBucket: "",
    messagingSenderId: "74935383626"
};
firebase.initializeApp(config);

var database = firebase.database();

var activateForm = $("#myFormP1, #myFormP2").submit(function username(e) {
    e.preventDefault()

    playerName1 = $(".userNameP1Input").val().trim();

    playerName2 = $(".userNameP2Input").val().trim();

    pushedRef = firebase.database().ref('/Users/' + rM1).update({
        username1: playerName1,
        username2: playerName2

    })

})


function reset() {
    firebase.database().ref('/Users/' + rM1).update({
            p1Button: "enable",
            p2Button: "enable",
            buttonColor: "blue",
            anotherGame: false

})}

var dataStuff = firebase.database().ref('Users/' + rM1);
dataStuff.on('value', function(snapshot) {

    var buttonColor = snapshot.val().buttonColor;
    var anotherGame = snapshot.val().anotherGame;

  })

 
var record = firebase.database();

var rM1 = 22;
console.log(rM1);
var dataStuff = firebase.database().ref('Users/' + rM1);
dataStuff.on('value', function(snapshot) {

    console.log("This is the first name " + snapshot.val().username1);
    console.log("This is the first LOCAL name " + playerName1);

    console.log("This is the second name " + snapshot.val().username2);

    playerName1 = snapshot.val().username1;
    playerName2 = snapshot.val().username2;

    if (playerName1 != null && playerName1 != "" && playerName2 != null && playerName2 != "") {

        console.log("Player here is player dort = " + playerName1);

        $(".fieldsetP1").attr("disabled", "disabled"); //disabling the P1 form, so no additional input can be added
        $(".nameP1").html("Welcome " + playerName1); // Adding personal greating message
        $(".userNameP1Input").attr("placeholder", "");

        $("button").removeAttr("disabled");

        $(".fieldsetP2").attr("disabled", "disabled"); //disabling the P1 form, so no additional input can be added
        $(".nameP2").html("Welcome " + playerName2); // Adding personal greating message
        $(".userNameP2Input").attr("placeholder", "");

        
    } else if (playerName1 == null || playerName1 === "") {
        console.log("Player 1 has no defined name");

        $(".usernameP1Form").attr("class", "bg-danger");
        $(".userNameP1Input").html("Please enter your name");

        activateForm
        
        if (playerName2 == null || playerName2 === "") {
            console.log("Player 2 has ALSO no defined name");

            activateForm
            
            $(".usernameP2Form").attr("class", "bg-danger");
            $(".userNameP2Input").html("Please enter your name");

        }

    } else if (playerName2 == null || playerName2 === "") {
        console.log("Player 2 has no defined name");

        activateForm
        
        $(".usernameP2Form").attr("class", "bg-danger");
        $(".userNameP2Input").html("Please enter your name");


        if (playerName1 == null || playerName1 === "") {
            console.log("Player 1 has ALSO no defined name");

            activateForm
            
            $(".usernameP1Form").attr("class", "bg-danger");
            $(".userNameP1Input").html("Please enter your name");

        }
    } else { activateForm}

});


$(".cardgroupP1, .cardgroupP2").on('click', ".btn", function button() {

    if ($(this).attr("id") === "p1") {
        choiceP1 = $(this).val();
        // $(this).removeAttr("class", "btn-primary");




        $(this).attr("class", "btn btn-warning");
        $(".p1").attr("disabled", "disabled");

        record.ref('/Users/' + rM1).update({ choiceP1: choiceP1 });

        // firebase.database().ref().push({
        // choiceP1: choiceP1  });
        choiceP1PressedLocal = true;
        record.ref('/Users/' + rM1).update({ choiceP1Pressed: choiceP1PressedLocal });

        $(this).attr("class", "btn btn-warning");

        console.log("P1 selected = " + choiceP1);

    }
    if ($(this).attr("id") === "p2") {

        choiceP2 = $(this).val();

        $(this).attr("class", "btn btn-warning");

        $(".p2").attr("disabled", "disabled");

        record.ref('/Users/' + rM1).update({ choiceP2: choiceP2 });



        console.log("P2 selected = " + choiceP2);
        choiceP2PressedLocal = true;
        record.ref('/Users/' + rM1).update({ choiceP2Pressed: choiceP2PressedLocal });

        // firebase.database().ref().push({
        // choiceP2: choiceP2  });
    }
    var dataStuff = firebase.database().ref('Users/' + rM1);
    dataStuff.on('value', function(snapshot) {

        choiceP1Pressed = snapshot.val().choiceP1Pressed;
        choiceP2Pressed = snapshot.val().choiceP2Pressed;

    })


    if (choiceP1Pressed === true && choiceP2Pressed === true) {
        console.log("P1 selected End= " + choiceP1);
        console.log("P2 selected End= " + choiceP2);

        var dataStuff = firebase.database().ref('Users/' + rM1);
        dataStuff.on('value', function(snapshot) {

            choiceP1 = snapshot.val().choiceP1;
            choiceP2 = snapshot.val().choiceP2;

            
        })


        if (choiceP1.length > 1 && choiceP2.length > 1) {

            if (
                (choiceP1 === "Rock" && choiceP2 === "Scissors") ||
                (choiceP1 === "Paper") && (choiceP2 === "Rock") ||
                (choiceP1 === "Scissors") && (choiceP2 === "Paper")) {
                console.log("P1 wins");

                record.ref('/Users/' + rM1).update({ winner: "Player 1 Wins" });
                dataStuff.on('value', function(snapshot) { winner = snapshot.val().winner;})

                $(".outcome-text").html(winner);

                scoreP1 = scoreP1 + 1;
                choiceP1 = "";
                choiceP2 = "";

                record.ref('/Users/' + rM1).update({ choiceP1Pressed: false });
                record.ref('/Users/' + rM1).update({ choiceP2Pressed: false });

                $(".startGame").html("Play another round");

            } else if (choiceP1 === choiceP2) {
                console.log("we tie"); // tie conditions

                record.ref('/Users/' + rM1).update({ winner: "This is a tie" });
                dataStuff.on('value', function(snapshot) { winner = snapshot.val().winner;})

                $(".outcome-text").html(winner);
                
                choiceP1 = "";
                choiceP2 = "";
                record.ref('/Users/' + rM1).update({ choiceP1Pressed: false });
                record.ref('/Users/' + rM1).update({ choiceP2Pressed: false });

                $(".startGame").html("Play another round");

            } else {
                console.log("p2 wins"); // losing condition
                record.ref('/Users/' + rM1).update({ winner: "PLayer 2 wins" });
                dataStuff.on('value', function(snapshot) { winner = snapshot.val().winner;})

                $(".outcome-text").html(winner);

                scoreP2 = scoreP2 + 1;
                choiceP1 = "";
                choiceP2 = "";
                record.ref('/Users/' + rM1).update({ choiceP1Pressed: false });
                record.ref('/Users/' + rM1).update({ choiceP2Pressed: false });

                $(".startGame").html("Play another round");

            }
        }
        gameScoreData = scoreP1 + " / " + scoreP2;
        gamesData = (scoreP1 + scoreP2 + gamesTie);

        pushedRef = firebase.database().ref('/Users/' + rM1).update({
            gameScore: gameScoreData,
            games: gamesData,
            buttonColor: "yellow"

        })

         dataStuff.on('value', function(snapshot) {

            gameScore = snapshot.val().gameScore;
            games = snapshot.val().games;
            buttonColor = snapshot.val().buttonColor;

        })

        $(".cardScore").html("Score: " + gameScore);
        $(".gameCount").html("Games Played: " + games);

                   }

    })



     




  // working RPS Code - don't touch

//    document.onkeyup = function(event){
//       storeChoice = event.key;
//       console.log("store choice" + " " + storeChoice);

//        if (storeChoice==="r") {
//           ourChoice="rock";
//           $(".player1-text").html("Rock")
//         } else if (storeChoice==="p") {
//           ourChoice="paper";
//           $(".player1-text").html("Paper")
//         } else if (storeChoice==="s") {
//           ourChoice="scissors";
//           $(".player1-text").html("Scissors")
//           }

//         console.log("ourChoice" + " " +ourChoice);

//        var gameOptions=["rock","paper","scissors"];

// // randomizer for computer options
//         var computerChoice=gameOptions[Math.floor(Math.random() * 3)];
//         console.log("computer choice " + computerChoice);
//         // var ourChoice=gameOptions[Math.floor(Math.random() * 3)];
//         // console.log("our choice " + ourChoice);

//         if (computerChoice==="rock") {
//           computerChoice="rock";
//           $(".player2-text").html("Rock")
//         } else if (computerChoice==="paper") {
//           computerChoice="paper";
//           $(".player2-text").html("Paper")
//         } else if (computerChoice==="scissors") {
//           computerChoice="scissors";
//           $(".player2-text").html("Scissors")
//           }


// // winning condition for computer
//         if ((computerChoice==="rock" && ourChoice==="scissors") ||
//            (computerChoice==="paper") && (ourChoice==="rock") ||
//            (computerChoice==="scissors") && (ourChoice==="paper")) {
//           console.log("computer wins");
//           $(".outcome-text").html("Computer Wins")

//         } 

//         else if (computerChoice===ourChoice) {
//           console.log("we tie"); // tie conditions
//           $(".outcome-text").html("This is a tie")
//         } 

//         else  {
//           console.log("we win"); // losing condition
//           $(".outcome-text").html("PLayer 1 wins")
//         }
//     }
//     