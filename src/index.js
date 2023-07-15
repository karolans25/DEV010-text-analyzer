import analyzer from './analyzer.js';

//const textArea = document.querySelector("#msg");
const textArea = document.getElementsByName("user-input")[0];
const resetBut = document.getElementById('reset-button');
const characterCount = document.querySelector('[data-testid="character-count"]');
const characterNoSpacesCount = document.querySelector('[data-testid="character-no-spaces-count"]');
const wordCount = document.querySelector('[data-testid="word-count"]');
const numberCount = document.querySelector('[data-testid="number-count"]');
const numberSum = document.querySelector('[data-testid="number-sum"]');
const wordLengthAverage = document.querySelector('[data-testid="word-length-average"]');

function iniciar(){
  textArea.value = '';
  ejecutar('');
  //const text = textArea.value;
  //ejecutar(text);
  //textArea.value = 'Lorem ipsum dolor sit amet,  ! consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  //textArea.value = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  //textArea.value = 'Si tengo 8 manzanas y compro 2 más, ¿cúantas manzanas tengo en total?';
  //textArea.value = 'Calcular la suma de 1.65 más 0.15 y más 1.10';
  //textArea.value = 'Esto no es un número: 41u0003jot';
}


function ejecutar(text){
  characterCount.textContent = `Caracteres: ${analyzer.getCharacterCount(text)}`;
  characterNoSpacesCount.textContent = `Caracteres Sin Espacios: ${analyzer.getCharacterCountExcludingSpaces(text)}`;
  wordCount.textContent = `Palabras: ${analyzer.getWordCount(text)}`;
  numberCount.textContent = `Números: ${analyzer.getNumberCount(text)}`;
  numberSum.textContent = `Suma números: ${analyzer.getNumberSum(text)}`;
  wordLengthAverage.textContent = `Promedio Longitud: ${analyzer.getAverageWordLength(text)}`;
}

resetBut.addEventListener('click', function() {
  textArea.value = '';
  ejecutar('');
});
textArea.addEventListener('keyup', (event) => {
  ejecutar(event.target.value);
});

iniciar();
