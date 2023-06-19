let Blackjack={
    'you':{'scorespan':'#yourblackjack-result','div':'.your-card','score':0},
    'dealer':{'scorespan':'#dealerblackjack-result','div':'.dealer-card','score':0},
    'card':['2','3','4','5','6','7','8','9','10','A','J','K','Q'],
    'cardsMap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'J':10,'K':11,'Q':12,'A':[1,11]},
    'win':'0',
    'loss':'0',
    'drew':'0',
    'isStand':false,
    'isover':false,
}

document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackhit);

document.querySelector('#blackjack-stand-button').addEventListener('click',blackjackstand);

document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackdeal);


const YOU=Blackjack['you'];
const DEALER=Blackjack['dealer'];

let hitsound=new Audio('sound/swish.m4a');
let winsound=new Audio('sound/cash.mp3');
let losssound=new Audio('sound/aww.mp3');

function blackjackhit(){
    if(Blackjack['isStand']=== false){
        let card=randomcard();
        console.log(card);
        storecard(card,YOU);
        updatescore(card,YOU);
        showscore(YOU);
        console.log(YOU['score']);
    }
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}
async function blackjackstand(){
    Blackjack['isStand']=true;
    while(DEALER['score']<16 && Blackjack['isStand']===true){
        let card=randomcard();
        storecard(card,DEALER);
        updatescore(card,DEALER);
        showscore(DEALER);
        await sleep(1000);
    }
        Blackjack['isover']=true;
        let winner=computewinner();
        showresult(winner);
}

function randomcard(){
    let ran=Math.floor(Math.random()*Blackjack['card'].length);
    return Blackjack['card'][ran];
} 

function storecard(card,activeplayer){
    if(activeplayer['score']<21){
    let img=document.createElement('img');
    img.src=`images/${card}.png`;
    img.height="120";
    img.width="100";
    img.style.margin="1rem";
    document.querySelector(activeplayer['div']).appendChild(img);
    hitsound.play();
    }
}

function updatescore(card,activeplayer){
    if(card === 'A'){
        // if adding 11 keep me below 21
        if(activeplayer['score']+Blackjack['cardsMap'][card][1]<=21){
            activeplayer['score']+=Blackjack['cardsMap'][card][1];
            console.log(card);
            console.log(Blackjack['cardsMap'][card]); 
        }else{
            activeplayer['score']+=Blackjack['cardsMap'][card][0];
            console.log(card);
            console.log(Blackjack['cardsMap'][card]);
        }
    }else{
        activeplayer['score']+=Blackjack['cardsMap'][card];
        console.log(card);
        console.log(Blackjack['cardsMap'][card]);
    }
}

function showscore(activeplayer){
    if(activeplayer['score']>21){
        document.querySelector(activeplayer['scorespan']).textContent='Bust!';
        document.querySelector(activeplayer['scorespan']).style.color='red';
        console.log(activeplayer['score']);
    }else{
        document.querySelector(activeplayer['scorespan']).textContent=activeplayer['score'];
        console.log(activeplayer['score']);
    }
}


function blackjackdeal(){
    if(Blackjack['isover']===true){
        Blackjack['isStand']=false;
        let dealerimage=document.querySelector('.dealer-card').querySelectorAll('img');
        let yourimage=document.querySelector('.your-card').querySelectorAll('img');

        for(let i=0;i<yourimage.length;i++){
            yourimage[i].remove();
        }
        for(let i=0;i<dealerimage.length;i++){
            dealerimage[i].remove(); 
        }
        DEALER['score']=0;
        YOU['score']=0;

        document.querySelector('#yourblackjack-result').textContent=0;
        document.querySelector('#dealerblackjack-result').textContent=0;
    
        document.querySelector('#yourblackjack-result').style.color='#946634';
        document.querySelector('#dealerblackjack-result').style.color='#946634';

        document.querySelector('#play').textContent="Let's play";
        document.querySelector('#play').style.color='#946634';
        Blackjack['isover']=true;
    }
}

 function computewinner(){
    let winner;
    if(YOU['score']<=21){
        if(YOU['score']>DEALER['score'] || DEALER['score']>21){
            Blackjack['win']++;
            winner=YOU;
        }else if(YOU['score']<DEALER['score']){
            Blackjack['loss']++;
            winner=DEALER;
        }else if(YOU['score']===DEALER['score']){
            Blackjack['drew']++;
        }
    }else if(YOU['score']>21 && DEALER['score']<=21){
        Blackjack['loss']++;
        winner=DEALER;
    }else if(YOU['score']>21 && DEALER['score']>21){
        Blackjack['drew']++;
    }
    return winner;
}

 function showresult(winner){

    if(Blackjack['isover']===true){
        let message,messagecolor;
        if(winner===YOU){
            document.querySelector('#win').textContent=Blackjack['win'];
            message='YOU WIN!';
            messagecolor='green';
            winsound.play();
        }else if(winner===DEALER){
            document.querySelector('#loss').textContent=Blackjack['loss'];
            message='YOU LOSS!'; 
            messagecolor='red'; 
            losssound.play();
        }else{
            document.querySelector('#drew').textContent=Blackjack['drew'];
            message='You DREW!';
            messagecolor='#946634';
        }
        document.querySelector('#play').textContent=message;
        document.querySelector('#play').style.color=messagecolor;
    }
}