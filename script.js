var button = document.getElementById("button-valider");

var pierre = document.getElementById("pierre1").value;
var feuille = document.getElementById("feuille1").value;
var ciseau = document.getElementById("ciseau1").value;



var random = Math.floor(Math.random() *3) +1;

console.log("rand " +random);



var jeu = function(){

var select1 = document.getElementById("nom").value;
console.log("coucou" + select1);

if (random == select1) {
	alert("égal");
} else if ((random == 1 && select1 == 2 )||( random == 2 && select1 == 3) || (random == 3 && select1 == 1)){
	alert("win");
} else if ((random == 1 && select1 == 3 )||( random == 2 && select1 == 1) || (random == 3 && select1 == 2)){
	alert("loose");
}

}

button.addEventListener("click", jeu);








// boutton.addEventListener("click", function(){
// 	jeuGame();
// }, false);