/// @ts-check

/// <reference path=".gitpod/p5.global-mode.d.ts" />

"use strict";

/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library
   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */


const UITLEG = 0;
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = UITLEG;


var plaatjeAppel; //in deze variabelen stoppen we de functie
var plaatjeCake; // preload() de afbeeldingen
var plaatjeKers;
var plaatjePeer;
var plaatjeAnanas;

const APPELBREEDTE = 50;
const APPELHOOGTE = 55;
const KERSBREEDTE = 30;
const KERSHOOGTE = 60;
const PEERBREEDTE = 40;
const PEERHOOGTE = 80;
const ANANASBREEDTE = 50;
const ANANASHOOGTE = 110;
const VIJANDDIAMETER = 40;

var spelerX = 200; // x-positie van speler
var spelerY = 100; // y-positie van speler
const SPELERBREEDTE = 150;
const SPELERHOOGTE = 100;

var kogelSnelheid = 16;
var kogelDiameter = 10;

var kogelsX = [];
var kogelsY = [];
 
var vijandenX1 = []; // x-positie van Appel
var vijandenX2 = []; // x-positie van kers
var vijandenX3 = []; // x-positie van peer
var vijandenX4 = []; // x-positie van ananas

var vijandenY1 = []; // y-positie van appel
var vijandenY2 = []; // y-positie van kers
var vijandenY3 = []; // y-positie van peer
var vijandenY4 = []; // y-positie van ananas

var vijandenSnelheid = [];


var score = 0; // aantal behaalde punten


var aantalKersen = 0;


/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */


/**
 * Tekent het speelveld
 */

var tekenVeld = function () {

};

/**
 * Tekent de vijand
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */

var tekenVijanden = function() {
    //plaatjeappel
    for (var teller = 0; teller < vijandenX1.length; teller++) {
      image(plaatjeAppel, vijandenX1[teller], vijandenY1[teller], APPELBREEDTE, APPELHOOGTE);
    }

    //plaatje kers
    for (var teller = 0; teller < vijandenX2.length; teller++) {
      image(plaatjeKers, vijandenX2[teller], vijandenY2[teller], KERSBREEDTE, KERSHOOGTE);
    } 

    //plaatje peer
    for (var teller = 0; teller < vijandenX3.length; teller++) {
      image(plaatjePeer, vijandenX3[teller], vijandenY3[teller], PEERBREEDTE, PEERHOOGTE);
    } 
    
    //plaatje ananas
    for (var teller = 0; teller < vijandenX4.length; teller++) {
      image(plaatjeAnanas, vijandenX4[teller], vijandenY4[teller], ANANASBREEDTE, ANANASHOOGTE);
    } 

};


function verwijderKogel(teller) {
    console.log("verwijder kogel " + teller);
    kogelsX.splice(teller, 1);
    kogelsY.splice(teller, 1)
}

var tekenKogels = function() {


    for (var teller = 0; teller < kogelsX.length; teller++) {
        fill(255, 255, 255);
        ellipse(kogelsX[teller], kogelsY[teller], kogelDiameter, kogelDiameter);
    }
};




/**
 * Tekent de kogel of de bal
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */

/**
 * Tekent de speler
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */


var tekenSpeler = function(x, y) {
      image(plaatjeCake, mouseX, 600, 150, 100);

      if (mouseX >= 1130) {
          mouseX = 1130;
      }

      if (mouseX <= 0){
          mouseX = 0;
      }
};


function tekenScore() {
    fill(255, 172, 94);
    rect(0, 0, 320, 80);
 
    fill(0, 0, 0);
    textSize (45);
    text(score, 145, 55);
    text("score:", 20, 55);

}


/**
 * Updatet globale variabelen met positie van vijand of tegenspeler
 */

 

var beweegVijand = function() {
     for (var teller = 0; teller < vijandenX1.length; teller++) {
         vijandenY1[teller] = vijandenY1[teller] + 5;
         if (vijandenY1[teller] > 800) {
             vijandenY1[teller] = random(0, -1200); 
             vijandenX1[teller] = random(20, 1200);
         }
    }

     for (var teller = 0; teller < vijandenX2.length; teller++) {
         vijandenY2[teller] = vijandenY2[teller] + 10;
         if (vijandenY2[teller] > 800) {
             vijandenY2[teller] = random(0, -1200); 
             vijandenX2[teller] = random(20, 1200);
         }
    }

     for (var teller = 0; teller < vijandenX3.length; teller++) {
         vijandenY3[teller] = vijandenY3[teller] + 5;
         if (vijandenY3[teller] > 800) {
             vijandenY3[teller] = random(0, -1200); 
             vijandenX3[teller] = random(20, 1200);
         }
    }

     for (var teller = 0; teller < vijandenX4.length; teller++) {
         vijandenY4[teller] = vijandenY4[teller] + 5;
         if (vijandenY4[teller] > 800) {
             vijandenY4[teller] = random(0, -1200); 
             vijandenX4[teller] = random(20, 1200);
        }
    }
};

var beweegKogel = function() {
    for (var teller = 0; teller < kogelsX.length; teller++) {
        kogelsY[teller] = kogelsY[teller] - kogelSnelheid;

        
        if (kogelsY[teller] < 0 - kogelDiameter / 2) {
            verwijderKogel(teller);

           
            teller = teller - 1;
        }
    }
};



/**
 * Zoekt uit of de speler is geraakt
 * bijvoorbeeld door botsing met vijand
 * @returns {boolean} true als speler is geraakt
 */




function verwijderVijand(teller) {
    console.log("verwijder vijand " + teller);
    vijandenX1.splice(teller, 1);
    vijandenY1.splice(teller, 1)
    vijandenSnelheid.splice(teller, 1);

}

 

var checkSpelerGeraakt = function() {
    var geraakt = false;

    for (var teller = 0; teller < vijandenX1.length; teller++) {
       if (collideRectRect(mouseX, 620, SPELERBREEDTE, SPELERHOOGTE, vijandenX1[teller], vijandenY1[teller], APPELBREEDTE, APPELHOOGTE)) {
            geraakt = ["appel", teller];
            spelStatus = GAMEOVER
       }
    }

    for (var teller = 0; teller < vijandenX4.length; teller++) {
      if (collideRectRect(mouseX, 620, SPELERBREEDTE, SPELERHOOGTE, vijandenX4[teller], vijandenY4[teller], ANANASBREEDTE, ANANASHOOGTE)) {
            geraakt = ["ananas", teller];
            spelStatus = GAMEOVER
        }
    }

    for (var teller = 0; teller < vijandenX3.length; teller++) {
       if (collideRectRect(mouseX, 620, SPELERBREEDTE, SPELERHOOGTE, vijandenX3[teller], vijandenY3[teller], PEERBREEDTE, PEERHOOGTE)) {
            geraakt = ["peer", teller];
            spelStatus = GAMEOVER
        }
    }

    for (var teller = 0; teller < vijandenX2.length; teller++) {
        if (collideRectRect(mouseX, 620, SPELERBREEDTE, SPELERHOOGTE, vijandenX2[teller], vijandenY2[teller], KERSBREEDTE, KERSHOOGTE)) {
            geraakt = ["kers", teller];
            score = score + 50
        }
    }
    return geraakt;
}


var checkVijandGeraakt = function(teller) {
    var teruggeefWaarde = false;


    for (var teller = 0; teller < kogelsX.length; teller++) {
        if (collideCircleCircle(kogelsX[teller], kogelsY[teller], kogelDiameter,
                                vijandenX1[teller], vijandenY1[teller], VIJANDDIAMETER)) {
            teruggeefWaarde = true;

         
            verwijderKogel(teller);

            
            console.log("Vijand " + teller + " geraakt door kogel " + teller);
        }
    }

    return teruggeefWaarde;
};


function verwijderVijand(teller) {
    console.log("verwijder vijand " + teller);
    vijandenX1.splice(teller, 1);
    vijandenY1.splice(teller, 1)
    vijandenSnelheid.splice(teller, 1);
}
        


/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */

var checkGameOver = function() {
  return false;
};


function updateScore () {
    score = score + 5;
}


/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */

function preload() {
    plaatjeCake = loadImage("afbeeldingen/cake.png");
    plaatjeAppel = loadImage("afbeeldingen/appel.png");
    plaatjeKers = loadImage("afbeeldingen/kers.png");
    plaatjePeer = loadImage("afbeeldingen/peer.png");
    plaatjeAnanas = loadImage("afbeeldingen/ananas.png");


}


function mouseClicked() {
    console.log("mouse clicked");

    kogelsX.push(mouseX);
    kogelsY.push(mouseY);

    console.log(kogelsX);
    console.log(kogelsY);
    if (mouseClicked = true) {
        spelStatus = SPELEN
    }
}


function genereerVijanden() {
   vijandenX1 = [];
   vijandenY1 = [];

   for (var teller = 0; teller < 5; teller++) {
      vijandenX1.push(random(20, 1200));
      vijandenY1.push(random(0, -1200));
    }

    vijandenX2 = [];
    vijandenY2 = [];

    for (var teller = 0; teller < 7; teller++) {
      vijandenX2.push(random(20, 1200));
      vijandenY2.push(random(0, -1200));
    }

    vijandenX3 = [];
    vijandenY3 = [];

    for (var teller = 0; teller < 5; teller++) {
      vijandenX3.push(random(20, 1200));
      vijandenY3.push(random(0, -1200));
    }

    vijandenX4 = [];
    vijandenY4 = [];

    for (var teller = 0; teller < 5; teller++) {
      vijandenX4.push(random(20, 1200));
      vijandenY4.push(random(0, -1200));
    }
}


function setup() {
  createCanvas(1280, 720);

  setInterval(updateScore,1000);

  genereerVijanden();
}


var resetSpel = function() {
    score = 0;
    genereerVijanden();
}

 
var restart = function() {
    fill(255, 0, 0);  
    rect(470, 370, 300, 100);

    fill(0, 0, 0);
    textSize(50);
    text("restart", 550, 440);  

  if(mouseX > 470 && mouseX < 770 && mouseY > 370 && mouseY < 470 && mouseIsPressed) { // als je op opnieuw spelen klikt
    spelStatus = SPELEN; 

    resetSpel();
  }
}

 

/*function mouseClicked () {
    if (mouseClicked = true) {
        spelStatus = SPELEN
    }

}*/

/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */

function draw() {
switch (spelStatus) {
    case UITLEG:

      var mijnVar = 0;

      background(136, 255, 122);


      fill(0, 0, 0);
      textSize(40);
      text("klik om te starten", 470, 370, 500, 50);

      textSize(50);
      text("Spelregels:", 20, 20, 500, 50);

      textSize(35);
      text("- Schuif met je muis om de taart te bewegen", 20, 80, 500, 50);
      text("- Pak de kersen", 20, 140, 800, 50);
      text("- Schiet en ontwijk de andere fruitsoorten", 20, 200, 800, 50);

 
      if (mouseClicked === true) {
          console.log("mouseClicked");
          spelStatus = SPELEN;
      }

  break;
    case SPELEN:
      background(255, 253, 186);

      

 

      beweegVijand();

 


var teruggeefwaarde = checkVijandGeraakt();
if (teruggeefwaarde !== false) {
    if (teruggeefwaarde[0] === "geraakt door kogel") {
           vijandenX1.splice(geraakt[1], 1);
          vijandenY1.splice(geraakt[1], 1);
        } 

}

var geraakt = checkSpelerGeraakt();
    if (geraakt !== false) {

        if(geraakt[0] === "appel") {
          vijandenX1.splice(geraakt[1], 1);
          vijandenY1.splice(geraakt[1], 1);
        } 

        else if(geraakt[0] === "kers") {
          vijandenX2.splice(geraakt[1], 1);
          vijandenY2.splice(geraakt[1], 1);
        } 

        else if(geraakt[0] === "peer") {
          vijandenX3.splice(geraakt[1], 1);
          vijandenY3.splice(geraakt[1], 1);
        }

        else if(geraakt[0] === "ananas") {
          vijandenX4.splice(geraakt[1], 1);
          vijandenY4.splice(geraakt[1], 1);
        }
      }

    tekenVeld();
    tekenVijanden();

 
tekenKogels();
 for (var teller = 0; teller < kogelsX.length; teller++) {
      kogelsY[teller] = kogelsY[teller] - 5;

    if (kogelsY[teller] < 0 - kogelDiameter / 2) {
         verwijderKogel(teller);
         teller = teller - 1;
        }

    }

      

      tekenVijanden();



      tekenSpeler(spelerX, spelerY);
      tekenScore();

 


    

      if (checkGameOver()) {
        spelStatus = GAMEOVER;
      }

    break;

      case GAMEOVER:
      background(255, 80, 64);  
      fill(0, 0, 0); // kleur is zwart
      textSize(50);
      text("Jammer, probeer het nog eens!", 300, 350);

      restart();

    break;
  }
}

 