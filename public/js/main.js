// Initialize Firebase
var config = {
    apiKey: "AIzaSyA_jMasg5G4S2FPIM60ObYZMwzayiAhOmU",
    authDomain: "jogodaacentuacao.firebaseapp.com",
    databaseURL: "https://jogodaacentuacao.firebaseio.com",
    storageBucket: "jogodaacentuacao.appspot.com",
};
firebase.initializeApp(config);

puzzles = [{
    value:""
},{
    value:""
}];
puzzle = puzzles[Math.floor(Math.random()*puzzles.length)];

window.onload = function() {

}
