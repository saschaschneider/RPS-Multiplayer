  var storeChoice;
  var ourChoice;



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
    

   firebase.database().ref().push({
    username1: playerName1,
    username2: playerName2,
    dateAdded: firebase.database.ServerValue.TIMESTAMP

  });

     database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
      // storing the snapshot.val() in a variable for convenience
      var sv = snapshot.val();
    

      if (sv.username1.length > 0 ) {
        $(".userNameP1").val(""); // clearing the username the user put in the form
      $(".fieldsetP1").attr("disabled", "disabled"); //disabling the P1 form, so no additional input can be added
      $(".nameP1").html("Welcome "+sv.username1+ ", you are Player 1"); // Adding personal greating message
      }
      else if (sv.username2.length > 0 ) {
        $(".userNameP2").val(""); // clearing the username the user put in the form
      $(".fieldsetP2").attr("disabled", "disabled"); //disabling the P1 form, so no additional input can be added
      $(".nameP2").html("Welcome "+sv.username2+ ", you are Player 2"); // Adding personal greating message
      }

   })
    
})






    


















  // working RPS Code - don't touch

   document.onkeyup = function(event){
      storeChoice = event.key;
      console.log("store choice" + " " + storeChoice);

       if (storeChoice==="r") {
          ourChoice="rock";
          $(".player1-text").html("Rock")
        } else if (storeChoice==="p") {
          ourChoice="paper";
          $(".player1-text").html("Paper")
        } else if (storeChoice==="s") {
          ourChoice="scissors";
          $(".player1-text").html("Scissors")
          }

        console.log("ourChoice" + " " +ourChoice);

       var gameOptions=["rock","paper","scissors"];

// randomizer for computer options
        var computerChoice=gameOptions[Math.floor(Math.random() * 3)];
        console.log("computer choice " + computerChoice);
        // var ourChoice=gameOptions[Math.floor(Math.random() * 3)];
        // console.log("our choice " + ourChoice);

        if (computerChoice==="rock") {
          computerChoice="rock";
          $(".player2-text").html("Rock")
        } else if (computerChoice==="paper") {
          computerChoice="paper";
          $(".player2-text").html("Paper")
        } else if (computerChoice==="scissors") {
          computerChoice="scissors";
          $(".player2-text").html("Scissors")
          }


// winning condition for computer
        if ((computerChoice==="rock" && ourChoice==="scissors") ||
           (computerChoice==="paper") && (ourChoice==="rock") ||
           (computerChoice==="scissors") && (ourChoice==="paper")) {
          console.log("computer wins");
          $(".outcome-text").html("Computer Wins")

        } 

        else if (computerChoice===ourChoice) {
          console.log("we tie"); // tie conditions
          $(".outcome-text").html("This is a tie")
        } 

        else  {
          console.log("we win"); // losing condition
          $(".outcome-text").html("PLayer 1 wins")
        }
    }
    