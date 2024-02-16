let resultDiv = document.querySelector("#result");
let Boxes = document.querySelectorAll(".box");
console.log(Boxes);//getting output in list
let messageBox = document.querySelector("#message");
let playAgain = document.getElementById("play");
let result = [
    [1,2,3],
    [4,5,6], //vertical,horizontl,diagonal
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
];
for (eachBox of Boxes){
    eachBox.addEventListener("click",PlayerChances);
    // console.log(eachBox);
}
let hasAnyPlayerWonOrNot = false;
let xBox = [];
let oBox = [];
let countClicked=0;
function PlayerChances(event){
    // console.log(event)
    let Id = Number(event.target.id);//number will convert id from string to number
    countClicked+=1;
    let EachBoxThatNeedsAppendment = Boxes[Id-1];//because index starts from zero.(boxes output will be in form of list because we used query selector all)
    let CreatedPTag=document.createElement("p");
    CreatedPTag.style.color="#FAB201";
    EachBoxThatNeedsAppendment.appendChild(CreatedPTag);//it should follow the same styling for the upcoming p tag also
    EachBoxThatNeedsAppendment.style.pointerEvents="none";

    if (countClicked%2==0){
        CreatedPTag.innerText="X";
        xBox.push(Id);
        Result("X",xBox);
    }
    else{
        CreatedPTag.innerText="O";
        oBox.push(Id);
        Result("O",oBox);
    }

    if (countClicked==9 && hasAnyPlayerWonOrNot==false){
        resultDiv.style.visibility="visible";
        messageBox.innerText="Match is draw";
    }
}

function Result(PlayerPlaying,PlayersArray)
{
    for (let i=0;i<8;i++){
        let count=0;
        for(let j=0;j<3;j++){//length of each list in winning outcome is 3
            if(PlayersArray.includes(result[i][j])===true){
                count+=1;
            }
        }
    
    

        if (count==3){         hasAnyPlayerWonOrNot=true;
         resultDiv.style.visibility="visible";
         messageBox.innerText=PlayerPlaying+" Has Won The Match"
    }
}
}

playAgain.addEventListener("click",function(){
    location.reload();
})
