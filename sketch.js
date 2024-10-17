// açâo

// velozes e furiossos,+18anos, açâo e aventura, suspense,corrida

let campoIdade;

function setup() { 
  createCanvas(450, 400);
 campoIdade = createInput("15");
}

  function draw() {
  background(220);
  let idade = campoIdade.value();
  let recomendacao = gerarecomendacao(idade);
text(recomendacao, width/2, height/2);
}

function gerarecomendacao(idade){
      if (idade >= 18){
         if (idade >= 18){
          return "velozes e furiosos"
      }else {
   return "velozes e furiosos";        
} 
      }else {
   return "velozes e furiosos";
 }
 }

