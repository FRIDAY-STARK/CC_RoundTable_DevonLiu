let mic;
let timer = 60;
let fontBold,fontRegular;
let homepage;
let scene = 'menu';
let jellyfish;
let stationary,leftAni,rightAni;
let bgm;
let headphone,door,telephone,inkjet,note,house,candle1,switch1,switch2,pad,cpu,torch1,torch2,candle2,diary,book;//shake;
let images = [];
let chat;
let xpos, ypos;
let cam;
let arcadeF =[];
let arcadeN =[];
let bulb=[];
let siren;
// 0 background_music, 1 phone_call, 2 note_light, 3 bookTXT
//4 noteTXT, 5 notebook, 6 diaryTXT,  7 access_denied, 8 access_granted; 9 pauses
let narrative=[];

function preload(){
    allSprites.collider = 'none';
  
  fontBold = loadFont('data/font/pixelBold.ttf');
  fontReg = loadFont('data/font/pixelReg.ttf');
  
  stationary = loadAni('data/animation/stationary/jf_1.png', 6);
  leftAni = loadAni('data/animation/left/left_1.png',2);
  rightAni = loadAni('data/animation/right/right_1.png',2);
  //shake = loadAni('shake_1.png',2);
  candle2 = loadImage('data/image/candle_1.png');
  
  bgm = loadSound('data/audio/bgm.mp3'); //credit:Genshin Impact OST - Mondstadt
  
  for(let i=0;i<7;i++){
    arcadeF[i] = loadImage('data/image/arcadeF_'+i+'.png');
    arcadeN[i] = loadImage('data/image/arcadeN_'+i+'.png');    
  }
  
  for(let i=0;i<2;i++){
    bulb[i] = loadImage('data/image/bulb'+i+'.png'); 
  }
  
  for(let i=0;i<15;i+=1){
    let m = i+1;
    images[i] = loadImage('data/image/'+m+'.png');  
  }
  siren = loadImage('data/image/Devon.png');
  
  for(let i=0;i<10;i++){
  narrative[i] = loadStrings('data/text/'+i+'.txt');
  }
}

 function setup(){
   frameRate(60);
  // let cnv = 
   createCanvas(800, 800);
  
  headphone = images[0];
  door = images[1];
  telephone = images[2];
  inkjet = images[3];
  note = images[4];
  house = images[5];
  switch1 =images[6];
  switch2 = images[7];
  pad = images[8];
  cpu = images[9];
  candle1 = images[10];
  torch1 = images[11];
  torch2 = images[12];
   diary = images[13];
   book = images[14];
   
   homepage = new startPage();
   
   stationary.frameDelay=10;
   leftAni.frameDelay =10;
   rightAni.frameDelay =10;
  // shake.frameDelay =10;
   candle2.frameDelay = 10;
//   candle2.resize(300,300);
   
   xpos = width/2;
   ypos = height/2;
   jellyfish = new Sprite(xpos,ypos);
   jellyfish.addAni('stationary',stationary);
   jellyfish.addAni('left',leftAni);
   jellyfish.addAni('right',rightAni);
   
   cam = new CAMERA();
   
   
}

function draw(){
  //background(0);
  
  
  

  
  if (scene == 'menu'){
    jellyfish.visible =true;
    homepage.menu();
    
    
    if (keyboard.presses('I')||kb.presses('i')) {
      scene ='instructions'; //switch to instructions page
    } 
    if (kb.presses('ENTER')) {
      scene = 'scene1'; //start, officially
    }
  }
  
  if(scene == 'instructions'){
      homepage.instructions();
    
    if (kb.presses('M')||kb.presses('m')) {
      scene ='menu'; //switch back to the menu
    } 
  }
  if(scene == 'scene1'){
  cam.camOn();
  cam.chatbox();
  cam.IN();
  }
  
  if(scene == 'final'){
    
    jellyfish.visible =false;
    imageMode(CORNER);
    image(siren, 0,0,800,800);
    textAlign(CENTER);
    noStroke();
    fill(0);
    textFont(fontBold);
    textSize(50);
    text('THANK YOU!', width/2-400, height/2+200,400);
    // if(kb.presses('M')||kb.presses('m')){
    //  scene = 'menu';
    // }  
    
  }
  
  
  
  //countdown();
  
}



