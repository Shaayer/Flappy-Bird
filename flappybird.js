var bird = document.getElementById("flappyBird");
var screenX=screen.width
var screenY=screen.height
var pipesListX=[]
var pipesListY=[]
var pipes=[]
var lastPipe=0//how far away the last pipe was so the game is possible. Must be greater than some number to allow new pipe to spawn
var topPipes=[]
var gap=280
var shownScore=0


var birdHeight = 35.078;

var r=Math.random()*9+1
r=Math.floor(r)
if(r==10){
    r=9
}
var back="Background"+r
back+=".png"
back="url('"+back+"')"
var body=document.getElementById("body")
body.style.backgroundImage = back

var y = 0
var acc = 0.05
var vel = 0
var pressed = false
var bottomPipe=document.getElementById("bottomPipe")
var score=document.getElementById("score")
document.addEventListener('keyup', (e) => {



    if (e.keyCode == 32) {
        vel = -4
    }
})


async function gameLoop() {


    while (true) {
        if(lastPipe>=500){
            r=Math.random()*100
            if(r<=75){
                createPipe(pipes)
                pipesListX.push(screenX)
                var r=Math.random()*screenY
                console.log(screenY)
                if(r>screenY-400){
                    r=screenY-400
                }
                if(r<200){
                    r=200
                }
                pipesListY.push(r)
                createPipeTop(topPipes)
                lastPipe=0
            }
        }
        changePipes(pipesListX)
        // console.log(bottomPipesListX.length)
        for(var i=0;i<pipesListX.length;i++){
            pipeDraw(pipesListX,pipesListY,i)
        }

        if (y + birdHeight > window.innerHeight) {
            alert("game over Score: " +shownScore)
        }
        if (y < 0) {
            y = 0
        }



        if (pressed == false) {
            vel += acc * 2
        }


        bird.style.top = y + "px"
        hit()

        score.textContent=shownScore
        y += vel;
        await sleep(16 + 2 / 3);

        
    }


}

gameLoop();


function pipeDraw(xList,yList,num){
    pipes[num].style.top=yList[num]+"px"
    pipes[num].style.left=xList[num]+"px"
    topPipes[num].style.left=xList[num]+"px"
    topPipes[num].style.top=yList[num]-1000+"px"
    // console.log(q.style.top)
    // console.log(q.style.left)
}

function changePipes(List){
    for(var i=0; i<List.length;i++){
        List[i]-=3
    }
    lastPipe+=3
}

function hit(){
    
    for(let i=0;i<pipes.length;i++){
        var styleStr=pipes[i].style.left
        var left=""
        for(let y=0;y<styleStr.length;y++){
            if(styleStr[y] != "p" && styleStr[y] != "x"){
                left+=styleStr[y]
            }
        }
        left=Number(left)

        
        

        
        var bottom=pipesListY[i]-gap

        var top=pipesListY[i]

        
        

        if(left<50 && left>0){
            console.log(top)
            console.log(bottom)
            console.log("y: ",y)
            if(y>top){
                alert("game over Score: "+shownScore)
            } else if(y<bottom){
                alert("game over Score: " +shownScore)
            } else{
                shownScore+=1/16
            }
        }
    }
}

function createPipe(list){
    var pipe=document.createElement("img")
    pipe.src="pipe.png"
    pipe.style.position="absolute"
    pipe.style.width="100px"
    pipe.style.height="auto"
    document.getElementById('body').appendChild(pipe);
    list.push(pipe)
}

function createPipeTop(list){
    var pipe=document.createElement("img")
    pipe.src="pipe.png"
    pipe.style.position="absolute"
    pipe.style.width="100px"
    pipe.style.height="auto"
    pipe.style.transform= "scaleY(-1)"
    document.getElementById('body').appendChild(pipe);
    list.push(pipe)
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}