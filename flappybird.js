var bird = document.getElementById("flappyBird");


var birdHeight = 35.078;



var y = 0
var acc = 0.05
var vel = 0
var pressed = false


document.addEventListener('keyup', (e) => {



    if (e.keyCode == 32) {
        vel = -4
    }
})


async function gameLoop() {


    while (true) {
        if (y + birdHeight > window.innerHeight) {
            alert("game over")
        }
        if (y < 0) {
            y = 0
        }



        if (pressed == false) {
            vel += acc * 2
        }


        bird.style.top = y + "px"

        y += vel;
        await sleep(16 + 2 / 3);
    }


}

gameLoop();





function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}