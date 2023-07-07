let verb = document.getElementById("verb-value");
let tempo = document.getElementById("tempo-value");
let pronoun = document.getElementById("pronoun-value");

let verb_list = [
  "TER",
  "ESTAR",
  "SER",
  "IR",
  "FAZER",
  "QUERER",
  "DIZER",
  "TRAZER",
  "VIR",
  "DAR",
  "VER",
  "POR",
  "SABER",
  "PODER",
  "SAIR",
  "HAVER",
];

let tempo_list = [
  "Presente",
  "Pretérito Imperfeito",
  "Pretérito Perfeito",
  "Futuro Simples",
  "Condicional",
  "Presente do Subjuntivo",
  "Imperfeito do Subjuntivo",
  "Futuro do Subjuntivo",
];
let pronoun_list = ["eu", "você", "ele", "ela", "nós", "eles", "elas"];

function assign(choices, target) {
  target.textContent = choices[Math.floor(Math.random() * choices.length)];
}

function new_set() {
  assign(verb_list, verb);
  assign(tempo_list, tempo);
  assign(pronoun_list, pronoun);
}
