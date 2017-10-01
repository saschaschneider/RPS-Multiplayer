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


$("#myForm").submit(function username(e) {
    e.preventDefault()

    playerName = $(".userName").val().trim();
    console.log("playerName = " + playerName);

   firebase.database().ref().push({
    username: playerName,
    dateAdded: firebase.database.ServerValue.TIMESTAMP

    
  });
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
    