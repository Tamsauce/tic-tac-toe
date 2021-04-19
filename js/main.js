// Create box that has 9 boxes 
// Two players - one that is a bot
// indication for X and an indication for 0 
//taking turns choosing x and 0s
//need something to happen when get 3 in a row 
//account for H,V and D wins 
//draw if no one wins
//clear board to start over
//keep score for more games 


//need 2 players and 1 board



let activePlayer = 0


let boxes = {
  box1: document.getElementById('box1'),
  box2: document.getElementById('box2'),
  box3: document.getElementById('box3'),
  box4: document.getElementById('box4'),
  box5: document.getElementById('box5'),
  box6: document.getElementById('box6'),
  box7: document.getElementById('box7'),
  box8: document.getElementById('box8'),
  box9: document.getElementById('box9')
}

for(box in boxes){
boxes[box].addEventListener('click',addText)

function addText(evt){ 
  if (evt.target.innerText === "x" || evt.target.innerText === "o"){
      alert ("Eeewwwwwww cheater, cheater, pumpkin eater!!")
   }else if (activePlayer === 0){
      evt.target.innerText = "x"
      activePlayer = 1
    }else if (activePlayer === 1){
      evt.target.innerText = "o"
      activePlayer = 0
    }

  }  
  
}

document.querySelector('#win').addEventListener('click',checkWin)

for(box in boxes){
  boxes[box].addEventListener('click',checkWin)

function checkWin(){
    if ((box1.innerText === "x" && box2.innerText === "x" && box3.innerText === "x") || //hor
        (box4.innerText === "x" && box5.innerText === "x" && box6.innerText === "x") || //hor
        (box7.innerText === "x" && box8.innerText === "x" && box9.innerText === "x") || //hor
        (box1.innerText === "x" && box4.innerText === "x" && box7.innerText === "x") || //vert
        (box2.innerText === "x" && box5.innerText === "x" && box8.innerText === "x") || //vert
        (box3.innerText === "x" && box6.innerText === "x" && box9.innerText === "x") || //vert 
        (box1.innerText === "x" && box5.innerText === "x" && box9.innerText === "x") || //diag
        (box3.innerText === "x" && box5.innerText === "x" && box7.innerText === "x") || //diag
    
        (box1.innerText === "o" && box2.innerText === "o" && box3.innerText === "o") || //hor
        (box4.innerText === "o" && box5.innerText === "o" && box6.innerText === "o") || //hor
        (box7.innerText === "o" && box8.innerText === "o" && box9.innerText === "o") || //hor
        (box1.innerText === "o" && box4.innerText === "o" && box7.innerText === "o") || //vert
        (box2.innerText === "o" && box5.innerText === "o" && box8.innerText === "o") || //vert
        (box3.innerText === "o" && box6.innerText === "o" && box9.innerText === "o") || //vert 
        (box1.innerText === "o" && box5.innerText === "o" && box9.innerText === "o") || //diag
        (box3.innerText === "o" && box5.innerText === "o" && box7.innerText === "o")){  //diag
          document.querySelector('#result').innerText = "Winner"
          console.log("winner")
    // }else{
    //   document.querySelector('#result').innerText = "Draw, play again?"
    //   console.log("nope")

        }
      }
}
    


  document.querySelector('#start').addEventListener('click',refresh)
  function refresh(){
    window.location.reload()

  }









  let d = "dtring" 
  let f =  "dt==st"

  concat(d+f)





















