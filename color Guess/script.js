function generateRandom(min , max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRGB(){
    const red=generateRandom(0 , 255);
    const green= generateRandom(0 , 255);
    const blue=generateRandom(0 , 255);

    return `rgb(${red}, ${green}, ${blue})`;
}

const head=document.getElementById('color-coder');
const body = document.querySelector('body');
const scoreBox=document.getElementById('score');
const maxScore=document.getElementById('max-score');

let colorBox=document.getElementById('color-box');
function startGame(){
    // head.innerText=generateRGB();
    // body.style.backgroundColor=head.innerText;

    let pos=generateRandom(0 , 5);
    let color;
    let score=Number(window.localStorage.getItem('score')??0);
    let maxscore=Number(window.localStorage.getItem('max-score')??0);
    maxScore.innerHTML=maxscore;
    scoreBox.innerHTML=score;

    for(let i=0;i<6;i++){
        const div=document.createElement('div');
        div.addEventListener('click' , (el)=>{
            if((el.target.style.backgroundColor)===head.innerText){
                score=score+1;
                // console.log('true');
                

            }
            else{
                score=0;
                // console.log('false');
            }
            scoreBox.innerHTML=Number(score)??0;
            maxscore=Math.max(score , maxscore);
            window.localStorage.setItem('max-score',maxscore);
            maxScore.innerHTML=Number(window.localStorage.getItem('max-score'))??0;
            

            window.localStorage.setItem('score' , score);

            setTimeout(()=>window.location.reload(), 500);

            // console.log(el.target.style.backgroundColor)

        })

        if(i===pos){
            color=generateRGB();
            div.style.backgroundColor=color;
        }
        else{
            div.style.backgroundColor=generateRGB();
        }

        

        colorBox.appendChild(div);

    }

    head.innerText=color;
}

window.addEventListener('load' , startGame);
