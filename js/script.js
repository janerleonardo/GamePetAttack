let attackPlayer = ""
let attackRandomEnemy = ""

function startGame() {
    let btnChoosePetPlayer = document.getElementById('btn-choose-pet')
    btnChoosePetPlayer.addEventListener('click',choosePlayerPet) 

    let btnFire =document.getElementById("btn-choose-fire")
    let btnWater =document.getElementById("btn-choose-water")
    let btnLand = document.getElementById("btn-choose-land")

    btnFire.addEventListener('click',attackFire)
    btnWater.addEventListener('click',attackWater)
    btnLand.addEventListener('click',attackLand)
}
function attackEnemy(){
    let numAttackEnemy = randomNum(1,3)
    switch(numAttackEnemy) {
        case 1:
            attackRandomEnemy = "Fire 🔥"
            break
        case 2:
            attackRandomEnemy = "Water 💧"
            break
        case 3:
            attackRandomEnemy = "Land 🌱"
            break
        default:
            console.log("Sorry attack no valid")
            
    }
    
    showToPeelPet()


}
function peelPet(){
    let result = ""
    if (attackPlayer == attackRandomEnemy ){
        result = "Die 😐 "
    } else if ((attackPlayer.includes("Fire") && attackRandomEnemy.includes("Land")) || (attackPlayer.includes("Water") && attackRandomEnemy.includes("Fire")) || (attackPlayer.includes("Land") && attackRandomEnemy.includes("Water"))){
        result = "Win 😀"
    } else {
        result = "Lose 😔"
    }
    return result
}
function showToPeelPet(){
    let tabParagraph = document.createElement('p')
    let newContent  = document.createTextNode("Your pet attack with " + attackPlayer + ", the enemy pet attack with "+ attackRandomEnemy + ", Your "+ peelPet())
    tabParagraph.appendChild(newContent)
    document.getElementById('messages').appendChild(tabParagraph)
}

function attackFire(){
    attackPlayer = "Fire 🔥"
    attackEnemy()
}
function attackWater(){
    attackPlayer = "Water 💧"
    attackEnemy()
}

function attackLand(){
    attackPlayer = "Land 🌱"
    attackEnemy()
}
function randomNum(min, max) {
    return Math.floor( Math.random() * (max - min + 1) + min);
}
function choosePetEnemy(){
    let numPet = randomNum(1,3)
    let namePetEnemy = ""

    switch(numPet) {
        case 1:
            namePetEnemy = "Elephat"
            break
        case 2:
            namePetEnemy = "Whale"
            break
        case 3:
            namePetEnemy = "Eagle"
            break
        default:
            console.log("Sorry pet no valid")
            
    }
    setnamePetAttack("name-enemy",namePetEnemy)
}


function setnamePetAttack(id,namePet){
    document.getElementById(id).innerHTML =  namePet
}
function choosePlayerPet () {
    let namePet = ""
    if(document.getElementById('elephat').checked){
        namePet = "Elephat"
    } else if(document.getElementById('whale').checked){
        namePet = "Whale"
    } else if(document.getElementById('eagle').checked){
        namePet = "Eagle"
    } else{
        alert("NOT CHOSE")
    }

    if (namePet != "") {
        setnamePetAttack("name-pet",namePet)
        choosePetEnemy()
    }  

}



window.addEventListener('load', startGame)
