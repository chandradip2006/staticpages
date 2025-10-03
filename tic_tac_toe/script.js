const check=Array(9).fill(null);
let turn='X'

function winner(){
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (check[a] && check[a] === check[b] && check[a] === check[c]) {
            return check[a];
        }
    }
    return null;
}

function handle(el){
    // console.log(el);
    if(el.innerText!==''){
        return;
    }
    const id=Number(el.id);
    if(turn==='X'){
        check[id]='X';
        el.innerText='X';
        turn='O';
    }
    else{
        check[id]='O';
        el.innerText='O';
        turn='X';
    }

    const checkWinner = winner();
    if(checkWinner){
        setTimeout(() => {
            document.write(`${checkWinner} is the winner!!!`);
        }, 100);
        // document.write(`${checkWinner} is the winner`);
        // location.reload();
    }
    else{
        if(!check.some(cell => cell === null)) {
            setTimeout(() => {
                
            document.write('It is a draw!!!!');} , 100)
            // location.reload();
        }
    }
    
    // console.log(check);
}