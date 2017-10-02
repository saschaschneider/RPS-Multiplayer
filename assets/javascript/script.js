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


$("#myFormP1, #myFormP2").submit(function username(e) {
            e.preventDefault()

            playerName1 = $(".userNameP1").val().trim();
            playerName2 = $(".userNameP2").val().trim();
            
            console.log("Did we press ButtonP1 Start= " +playerName1.length);
            console.log("Did we press ButtonP2 Start= " +playerName2.length);

            if (playerName1.length > 0) {
              buttonpressedP1 = true;
              $(".fieldsetP1").attr("disabled", "disabled"); //disabling the P1 form, so no additional input can be added
              $(".nameP1").html("Welcome "+playerName1+ ", you are Player 1"); // Adding personal greating message
              $(".userNameP1").attr("placeholder","");

            } 
            
            if (playerName2.length > 0) {
              buttonpressedP2 = true;
              $(".fieldsetP2").attr("disabled", "disabled"); //disabling the P1 form, so no additional input can be added
              $(".nameP2").html("Welcome "+playerName2+ ", you are Player 2"); // Adding personal greating message
              $(".userNameP2").attr("placeholder","");

              }
             

            if (buttonpressedP1 === true && buttonpressedP2 === true){

             var pushedRef = firebase.database().ref().push({
                 username1: playerName1,
                 username2: playerName2,
                 dateAdded: firebase.database.ServerValue.TIMESTAMP

           })
          $(".userNameP1").val(""); // clearing the username the user put in the form
          $(".userNameP2").val(""); // clearing the username the user put in the form

           }
      })

 
$(".cardgroupP1, .cardgroupP2").on('click', ".btn", function button() {

    if ($(this).attr("class") === "btn btn-primary p1") {
        choiceP1 = $(this).val();
        // firebase.database().ref().push({
        // choiceP1: choiceP1  });
        choiceP1Pressed = true;
        console.log("P1 selected = " + choiceP1);

    } if ($(this).attr("class") === "btn btn-primary p2") {

        choiceP2 = $(this).val();
        console.log("P2 selected = " + choiceP2);
        choiceP2Pressed = true;
        // firebase.database().ref().push({
        // choiceP2: choiceP2  });
    }

  if (choiceP1Pressed === true && choiceP2Pressed === true)
                 {
                  console.log("P1 selected End= " + choiceP1);
                  console.log("P2 selected End= " + choiceP2);
              
          if (choiceP1.length > 1 && choiceP2.length > 1){

              if (
                  (choiceP1 === "Rock" && choiceP2 === "Scissors") ||
                  (choiceP1 === "Paper") && (choiceP2 === "Rock") ||
                  (choiceP1 === "Scissors") && (choiceP2 === "Paper"))
                  { 
                  console.log("P1 wins");
                  $(".outcome-text").html("Player 1 Wins") 
                  scoreP1 = scoreP1 +1;
                  choiceP1 = "";
                  choiceP2 = "";
                  } 
                  else if (choiceP1 === choiceP2)
                  {
                  console.log("we tie"); // tie conditions
                  $(".outcome-text").html("This is a tie")
                  choiceP1 = "";
                  choiceP2 = "";
                  gamesTie = gamesTie +1;
                  }
                  else
                  {
                  console.log("p2 wins"); // losing condition
                  $(".outcome-text").html("PLayer 2 wins")
                  scoreP2 = scoreP2 +1;
                  choiceP1 = "";
                  choiceP2 = "";
                  }
   }
       gameScore = scoreP1 + " / " + scoreP2;
       games = (scoreP1 + scoreP2 + gamesTie);
      $(".cardScore").html("Score: " +gameScore);
      $(".gameCount").html("Games Played: " +games);


     

 }})


    




  //   console.log("pushedRef = " +pushedRef.key);
  //   var url123 = "https://rps-multiplayer-e165f.firebaseio.com/" +pushedRef.key; 
  //   console.log("pushedRefURL = " +url123);

  // var db = firebase.database();
  // console.log("firebase.database =" + firebase.database());
  // // db.ref(+pushedRef.key).update({username2: "Player2" });
  // db.ref(pushedRef.key).update({username2: "LatestTest"});
  
   // var pushedRef = firebase.database().ref('/customers').push({ email: email });
   // console.log("pushedRef = " +pushedRef.key);


  


// // winning condition for computer
//         if ((choiceP1==="Rock" && choiceP2==="Scissors") ||
//            (choiceP1==="Paper") && (choiceP2==="Rock") ||
//            (choiceP1==="Scissors") && (choiceP2==="Paper")) {
//           console.log("P1 wins");
//           $(".outcome-text").html("Computer Wins")

//         } 

//         else if (choiceP1===choiceP2) {
//           console.log("we tie"); // tie conditions
//           $(".outcome-text").html("This is a tie")
//         } 

//         else  {
//           console.log("p2 wins"); // losing condition
//           $(".outcome-text").html("PLayer 1 wins")
//         }
//     })
    




















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