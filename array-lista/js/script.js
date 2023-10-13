const btn = document.querySelector('button')
const inputEl = document.querySelector('data')
const resultEl = document.querySelector('.alert')
// creo l'array con la frutta del frigorifero
const frutta = [
    'banana',
    'mela',
    'pera',
    'ciliegia',
    'arancia',
    'mandarino',
    'cocomero',
    'limone',
    'fragola',
];
// console.log(frutta);
frutta.push('pesca');
// console.log(frutta);
// booleana
let trovato = false;

btn.addEventListener('click', function(){
    for(let i=0; i<frutta.length; i++){
        if(frutta[i] === 'cocomero'){
            trovato = true;
        }
    }
    let text;
    if(trovato){
        text = 'Trovato! Devo solo preparare il cocktail.';
    } else {
        text = 'Oh no, devo uscire a comprare il cocomero!';
    }
    console.log(text);
});