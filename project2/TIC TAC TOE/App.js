let boxes = document.querySelectorAll(".box");
let rest = document.querySelector("#rest");
let newgamebtn = document.querySelector("#new-btn")
let msgcontainer  = document.querySelector(".msg-container")
let msg = document.querySelector("#msg");
let turnO = true;  // player x or y tern 
let count = 0;
 const winpattern =[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
 ];

   boxes.forEach((box)=> {
    box.addEventListener("click", ()=>
    {
    
         if(turnO===true){
            box.innerHTML = "O";
            turnO = false;
            
            }
            else{
                box.innerHTML = "X";
                turnO = true;
         }
         box.disabled = true;
         count++;
         let isWinner = checkwinner();
         if (count === 9 && !isWinner) {
           drawgame();
         }
         
    });
});


const  drawgame = ()=>{
    
        msg.innerText="The Match Is Draw";
        msgcontainer.classList.remove("hide");
        disabledbox();
    };


const disabledbox = ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enabledbox = ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showwinner =(winner) =>{
msg.innerText = `Congratulation, winner is ${winner}` ;
msgcontainer.classList.remove("hide");
disabledbox();
}

const checkwinner = () => {
    // printing the winning pattern 
    for(let pattern of winpattern){
    
    // printing the innertext of the boxes what value is store x OR 0
       let pos1val = boxes[pattern[0]].innerText;
       let pos2val= boxes[pattern[1]].innerText;
       let pos3valu = boxes[pattern[2]].innerText;


       if(pos1val != ""&& pos2val !="" && pos3valu != "" ){
        if(pos1val===pos2val && pos2val===pos3valu){
            console.log("winnner",pos1val);
            
            showwinner(pos1val);
        }
       }
    }
};

  const restgame = () => {
turnO = true;
enabledbox();
msgcontainer.classList.add("hide");
 }

 newgamebtn.addEventListener("click",restgame);
 rest.addEventListener("click",restgame);