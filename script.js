const colorBoard = document.querySelectorAll('.color');
function addClass(event){
    for (let index = 0; index < colorBoard.length; index +=1){
        colorBoard[index].classList.remove('selected');

}
    event.target.classList.add('selected');
}
for ( let index = 0 ; index < colorBoard.length; index +=1){
    colorBoard[index].addEventListener('click' , addClass)
}

//ref : fiz com ajuda da Sheila Nakashima Turma 19 tribo A


//function clearBoard(){
//    const pixelBoard = document.getElementById('pixel-board')
//    const clearButton = document.getElementById('clear-board')
//    for (let index = 0 ; index < pixelBoard.length; index +=1){
//        const clear =document.querySelectorAll('.pixel');
//        clear[index].style.backgroundColor = 'white'
//        
//}   clearButton.addEventListener('click' , clearBoard) 



let clearBoard = document.getElementById('clear-board')
clearBoard.addEventListener('click' , clear);

function clear (){
  let pixelBoard = document.getElementsByClassName('pixel')
  for (let index = 0; index < pixelBoard.length ; index += 1) {
    let pixels  = pixelBoard[index]
    pixels.style.backgroundColor = 'white'
  }
}
