const dino = document.querySelector(".dino");
const background = document.querySelector(".background");
let position = 0;

let isJumping = false;
function handleKeyUp (event){
    if(event.keyCode === 32){
        if(!isJumping){
            jump();
        }
    }
}

function jump (){
    
    
    isJumping = true;
    
    let upInterval = setInterval(() => {
        if(position >= 150) {
            clearInterval(upInterval);

            // descendo
        let downInterval = setInterval(() => {
            if(position <= 0){
                    clearInterval(downInterval);
                    isJumping = false;
            } else {
                position -= 20;
                dino.style.bottom = position + 'px';
                }
            }, 20);
            
        }else {
            //subindo
            position += 20;
            dino.style.bottom = position + 'px';
             
        }
        
    }, 20); 
} 

function createCactus(){
    const cactus = document.createElement('div');
    let cactusPosition = 1500;
    let randomTime = Math.random() * 6000;


    cactus.classList.add('cactus');
    cactus.style.left = cactusPosition + 'px';
    background.appendChild(cactus);
    let leftInterval = setInterval(() => {
        if(cactusPosition < -60 ){
            clearInterval(leftInterval);
            cactus.removeChild(cactus);
        } else if(position < 60 && cactusPosition > 0 && cactusPosition < 60){
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
        } else {
        cactusPosition -= 10;
        cactus.style.left = cactusPosition + 'px';
        };
    }, 15);

    setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener("keyup", handleKeyUp)