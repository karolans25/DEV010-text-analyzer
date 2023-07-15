const analyzer = {
  getWordCount: (text) => {
    return getWords(text).length;
  },
  getCharacterCount: (text) => {
    if(typeof text === 'string'){
      return text.length
    } else {
      throw new TypeError("Valor inválido");
    }
  },
  getCharacterCountExcludingSpaces: (text) => {
    return text.replace(/[^\w\s]/gi, '').replace(/\s+/g, '').length;
  },
  getAverageWordLength: (text) => {
    const temp = text.trim().split(' ');
    //const temp = getWords(text);
    let suma = 0;
    temp.forEach(element => {
      suma += element.length;
    });
    return Number((suma/temp.length).toFixed(2));
  },
  getNumberCount: (text) => {
    return getNumbers(text).length;
  },
  getNumberSum: (text) => {
    const nums = getNumbers(text);
    let sum = 0;
    nums.forEach(function(item){
      sum += Number(item);
    });
    return sum;
  },
};

function getWords(text){
  const temp = text.trim().replace(/[^\w\s]/gi, '').split(' ');
  for (let i = 0; i<temp.length; i++){
    if(temp[i].length === 0){
      temp.splice(i, 1);
      i --;
    }
  }
  return temp;
}

function getNumbers(text){
  const temp = text.split(' '), numbers = [];
  for (let i = 0; i < temp.length; i++){
    if ( /^\d*\.?\d+$/.test(temp[i]) ){
      numbers.push(temp[i]);
    }
  }
  return numbers;
}

/*
let txt = 'Lorem ipsum dolor sit amet,  ! consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
txt1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
txt2 = 'Si tengo 8 manzanas y compro 2 más, ¿cúantas manzanas tengo en total?';
txt3 = 'Calcular la suma de 1.65 más 0.15 y más 1.10';
txt4 = 'Esto no es un número: 41u0003jot';
console.log(txt1);
console.log(analyzer.getWordCount(txt1));
console.log(analyzer.getCharacterCount(txt1));
console.log(analyzer.getCharacterCountExcludingSpaces(txt1));
console.log(analyzer.getAverageWordLength(txt1));
console.log(txt4);
console.log(analyzer.getNumberCount(txt4));
console.log(txt3);
console.log(analyzer.getNumberCount(txt3));
console.log(txt2);
console.log(analyzer.getNumberCount(txt2));
console.log(txt1);
console.log(analyzer.getNumberSum(txt1));
console.log(txt4);
console.log(analyzer.getNumberSum(txt4));
*/

export default analyzer;
