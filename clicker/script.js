window.onload = function(){
var numberElement = document.getElementById("number")
var numberValue = 0
var numberAddA = 1

var addOne = document.getElementById("addOne")
addOne.addEventListener ("click", function(){
numberValue += numberAddA
numberElement.innerText = numberValue
if (numberValue == 100){
alertify({
title:"Congrats!!!",
text: "Yay! Vous avez atteint le niveau 1 ! Combien de temps cela vous a-t-il pris? Commentaire!"
})
}
if (numberValue == 1000){
alertify({
title:"Congrats!!!",
text: "Yay! Vous avez atteint Lvl 2!"
})
}
if (numberValue == 10000){
alertify({
title:"Congrats!!!",
text: "Yay! Vous avez atteint Lvl 3!"
})
}
if (numberValue == 100000){
alertify({
title:"Congrats!!!",
text: "Yay! Vous avez atteint Lvl 4!"
})
}
if (numberValue == 1000000){
alertify({
title:"Congrats!!!",
text: "Yay! Vous avez atteint Lvl 5!"
})
}
})

var firstBoostAElement = document.getElementById ("firstBoostA")



var firstBoostAPrice = 10
var firstBoostAPriceStatement = "Atteindre " + firstBoostAPrice + " pour augmenter le nombre de chaque clic."
var firstBoostAPlus = 0
firstBoostAElement.addEventListener ("click", function(){


if (numberValue >= firstBoostAPrice){
numberValue = numberValue - firstBoostAPrice
numberElement.innerText = numberValue
firstBoostAPlus ++
firstBoostAPrice = firstBoostAPrice*2
firstBoostAPriceStatement = "Atteindre " + firstBoostAPrice + " pour augmenter le nombre de chaque clic."
firstBoostA.innerText = firstBoostAPriceStatement 


numberAddA ++

}

})


//

var firstBoostB = document.getElementById ("firstBoostB")
var numberAddB = 0
var firstBoostBPrice = 30
firstBoostB.addEventListener ("click", function(){
if (numberValue >= firstBoostBPrice){
numberValue = numberValue - firstBoostBPrice
numberElement.innerText = numberValue
firstBoostBPrice = firstBoostBPrice * 2
firstBoostB.innerText = ("Atteindre "+firstBoostBPrice+"pour ajouter des travailleurs chaque seconde")
numberAddB ++
setInterval(function(){

numberValue += numberAddB
numberElement.innerText = numberValue

}, 1000)
}

})




}
