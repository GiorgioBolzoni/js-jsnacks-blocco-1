const btn = document.querySelector('button')
const resultEl = document.querySelector('.alert')
// creo array che contiene numeri casuali da 0 a 100
const myArray = [];
console.log(myArray)

btn.addEventListener('click', function(){
    const inputEl = parseInt(document.querySelector('input').value);
    // console.log(inputEl)
    let randomNumber;
    for (let i = 0; i < inputEl; i++) {
        randomNumber = getRndInteger(1, 100);
        console.log(randomNumber);
        myArray.push(randomNumber);
        
    }

});