let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Estoy tomando un curso sobre programación en el programa de Tecnolochicas Pro.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
