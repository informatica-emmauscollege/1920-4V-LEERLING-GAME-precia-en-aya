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
var spelStatus = SPELEN;

var plaatjeAppel; //in deze variabelen stoppen we de functie
var plaatjeCake; // preload() de afbeeldingen

var spelerX = 200; // x-positie van speler
var spelerY = 100; // y-positie van speler

var kogelX = 0;    // x-positie van kogel
var kogelY = 0;    // y-positie van kogel

var vijandenX = [];   // x-positie van vijanden
var vijandenY = [];   // y-positie van vijanden

var score = 0; // aantal behaalde punten





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
    for (var teller = 0; teller < vijandenX.length; teller++) {   
    image(plaatjeAppel, vijandenX[teller], vijandenY[teller], 20, 20); 
    }
};


/**
 * Tekent de kogel of de bal
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenKogel = function(x, y) {


};


/**
 * Tekent de speler
 * @param {number} xcoördinaat
 * @param {number} y y-coördinaat
 */

 
var tekenSpeler = function(x, y) {
  /*fill(173, 205, 255);
  ellipse(mouseX, 600, 50, 50);*/
};

function preload() {
    plaatjeCake = loadImage ("afbeeldingen/cake.png");
    plaatjeAppel = loadImage ("afbeeldingen/appel.png");

}

function tekenScore() {

    fill(255, 172, 94);
    rect(0, 0, 200, 80);

    fill(0, 0, 0);
    textSize (60);
    text(score, 40, 60);
}

/**
 * Updatet globale variabelen met positie van vijand of tegenspeler
 */

var beweegVijand = function() {
     for (var teller = 0; teller < vijandenX.length; teller++) {        
         vijandenY[teller] = vijandenY[teller] + 5;
         if (vijandenY[teller] > 800) {
             vijandenY[teller] = random(0, -1200); // ik weet niet of de getallen kloppen ook bij rij 199!!!!!!!!!
             vijandenX[teller] = random(20, 1200);
         }
    }
};


/**
 * Updatet globale variabelen met positie van kogel of bal
 */
var beweegKogel = function() {

};


/**
 * Kijkt wat de toetsen/muis etc zijn.
 * Updatet globale variabele spelerX en spelerY
 */
var beweegSpeler = function() {

};


/**
 * Zoekt uit of de vijand is geraakt
 * @returns {boolean} true als vijand is geraakt
 */
var checkVijandGeraakt = function() {

  return false;
};


/**
 * Zoekt uit of de speler is geraakt
 * bijvoorbeeld door botsing met vijand
 * @returns {boolean} true als speler is geraakt
 */
var checkSpelerGeraakt = function(x,y) {

    var vijandX = spelerX 
    boolean(vijandX);  //returns false
  return false;
   
  if  (boolean = false)  //dus als de vijand de speler raakt
    PrintIn("GAME OVER");


};


/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function() {
    
  return false;
};

function updateScore () {
    score = score + 50;
}

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  setInterval(updateScore,1000);
  // Kleur de achtergrond blauw, zodat je het kunt zien
  
  // maak 10 keer een nieuwe x en y waarden voor de vijanden'
  // en voeg deze achter aan de array toe
   for (var teller = 0; teller < 3; teller++) {        
     vijandenX.push(random(20, 1200));
     vijandenY.push(random(0, -1200));

    }
   

  
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  switch (spelStatus) {
    case SPELEN:

   background(255, 253, 186);

    image(plaatjeCake, mouseX, 600, 150, 100);
if (mouseX >= 1130) {
    mouseX = 1130; 
}
if (mouseX <= 0){
    mouseX = 0;
}






      beweegVijand();
      beweegKogel();
      beweegSpeler();
      
      if (checkVijandGeraakt()) {
        // punten erbij
        // nieuwe vijand maken
      }
      
      if (checkSpelerGeraakt()) {
        // leven eraf of gezondheid verlagen
        // eventueel: nieuwe speler maken
      }

      tekenVeld();
      tekenVijanden();
      tekenKogel(kogelX, kogelY);
      tekenSpeler(spelerX, spelerY);
      tekenScore();

      if (checkGameOver()) {
        spelStatus = GAMEOVER;
      }
      break;
  }
}
