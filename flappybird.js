console.log("hello world");

var bird=document.getElementById("flappyBird");

var t=0;
var time=-1000;
var actualTime=0;


// while(0==0){

// console.log("anything");

// // t=new Date().getMilliseconds();
// // if(t==0){
// // time+=1000
// // console.log("anything")
// // }
// // actualTime=time+t
// //sleep(16 +2/3)
// sleep(2000);
// }

// await sleep(2000);
// console.log("flappy bird");

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
var y=0
var acc=0.05
var vel=0
var pressed=false

document.addEventListener('keyup', (e) => { 

 

    if (e.keyCode == 32){
pressed=true
vel-=10
    }
}  ) 

// document.addEventListener('keyup', (e) => { 

 

//     //if (e.keyCode == 32){
//         console.log("not pressed")
// pressed=false
//    // }
// }  ) 

async function gameLoop() {
    // for (let i = 0; i < 5; i++) {
        // console.log(`Waiting ${i} seconds...`);
        while(true){
if(pressed=true){
    vel+=acc
}
if(pressed=false){
    vel-=acc*50
}
            
            
            // if(keyPressed("space")){
            //     vel -=acc
            // } else{
             
            // }
            
            bird.style.top=y+"px"
////console.log("something")
 //console.log(bird.style.top);
y +=vel;
            await sleep(16 +2/3);
        }
        
    // }
    //console.log('Done');
}

gameLoop();

// for(var i=0;i<400; i++){
//     console.log("lines of code");
// }



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}