// variaveis da bolhinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 23;
let raio = diametro / 2;

//velocidade da bolhinha
let velocidadeXBolinha = 6;
let velocidadeYBolhinha = 6;

// variaveis da raquete
let xRaquete = 5;
let YRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

// variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;


let colidiu = false;

// placar do jogo
let meusPontos = 0;
let pontosOpenente = 0;

//chance de errar
let chanceDeErrar = 0;

// sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolhinha();
  movimentaBolhinha();
  verificaColisaoBordas();
  mostraRaquete(xRaquete, YRaquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete, YRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
}

function mostraBolhinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolhinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolhinha;
}

function verificaColisaoBordas(){
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  
  if (yBolinha + raio > height || yBolinha - raio < 0 ){
    velocidadeYBolhinha *= -1;
  }
}

function mostraRaquete(x, y){
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function mostraRaqueteOponente(){
  rect(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    YRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    YRaquete += 10;
  }
}

function verifaColisaoComARaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < YRaquete + raqueteAltura && yBolinha + raio > YRaquete){
      velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function colisaoMinhaRaqueteBiblioteca(){
  colidiu = collideRectCircle(xRaquete, YRaquete, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu == true){
    velocidadeXBolinha *= -1;
  }
}

function verificaColisaoRaquete(x, y){
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu == true){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha -yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYOponente
  calculaChanceDeErrar();
}


function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosOpenente, 470, 26)
}

function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 10){
    pontosOpenente += 1;
    ponto.play();
  }
}

function calculaChanceDeErrar(){
  if (pontosOpenente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}

//function bolinhaNaoFicaPresa(){
//    if (xBolinha + raio < 0){
//    console.log('bolinha ficou presa');
//    xBolinha = 300;
//    }
//}