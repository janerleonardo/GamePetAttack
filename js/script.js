function startGame() {
    let btnChoosePetPlayer = document.getElementById('btn-choose-pet')
    btnChoosePetPlayer.addEventListener('click',choosePlayerPet) 
}
function choosePlayerPet () {

    if(document.getElementById('elephat').checked){
        alert(" Chose Elephat")
    } else if(document.getElementById('whale').checked){
        alert(" Chose Whale")
    } else if(document.getElementById('eagle').checked){
        alert(" Chose Eagle")
    } else{
        alert("NOT CHOSE")
    }
    
}



window.addEventListener('load', startGame)
