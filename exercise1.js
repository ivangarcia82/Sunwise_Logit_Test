//DESCOMENTAR CÓDIGO PARA REALIZAR EL EJERCICIO CON NÚMEROS ALEATORIOS

/* const cases = between(1, 10);

let n = [];
let m = [];
for(let i = 0; i<cases; i++){
  n.push(between(1, 10))
  m.push(between(1, 10))

} */

//GENERAR NUMERO ALEATORIO
/* function between(min, max){
  return Math.floor(
    Math.random() * (max-min) + min
  )
} */



//Comentar en caso de querer realizar la operación con números aleatorios
const cases = 4;
let n = [1,2,3,3]
let m = [1,2,1,3]

for (let i = 0; i < cases; i++) {
  if ((n[i] == m[i]) & (n[i] > 1)) {
    if (n[i] % 2 == 0) {
      console.log("L");
    } else {
      console.log("R");
    }
  } else if (n[i] > m[i] && m[i] > 1) {
    if (m[i] % 2 == 0) {
      console.log("U");
    } else {
      console.log("D");
    }
  } else if (m[i] > n[i]) {
    if (n[i] % 2 == 0) {
      console.log("L");
    } else {
      console.log("R");
    }
  } else if (m[i] == 1) {
    if (n[i] == 1) {
      console.log("R");
    } else {
      console.log("D");
    }
  }
}
