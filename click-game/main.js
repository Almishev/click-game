
var coins = 0;
var workers = 0;


function reise(){
    coins++;
    updateCoinsDisplay();
    document.getElementById("check").innerHTML="";
    
}



function addCoins(){
    coins += workers;
    
}

function updateCoinsDisplay(){
    document.getElementById("result").innerHTML=coins;
}

function updateWorkerDisplay(){
    document.getElementById("resultWorkers").innerHTML=workers;
}

function buyWorker(){
    if(coins>=10){
        coins-=10;
        workers++;
        updateWorkerDisplay();
        updateCoinsDisplay();
    
    }
    else{
        document.getElementById("check").innerHTML="No enough money to buy worker";
    }
}

