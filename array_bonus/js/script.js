const btn = document.getElementById('btn')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const resultEl = document.querySelector('.alert')
const resultEl2 = document.querySelector('.alert2')
const resultEl3 = document.querySelector('.alert3')
// creo array 
const array1 = [];
const array2 = [];

btn.addEventListener('click', function(){
    const inputEl = parseInt(document.getElementById('data').value);
    // console.log(inputEl)
    let randomNumber;
    for (let i = 0; i < inputEl; i++) {
        randomNumber = getRndInteger(1, 100);
        console.log(randomNumber);
        array1.push(randomNumber);
        
    }
     resultEl.classList.remove('d-none')
     resultEl.innerText = array1
     console.log(array1.length);
});
btn2.addEventListener('click', function(){
    const inputEl2 = parseInt(document.getElementById('data2').value);
    // console.log(inputEl)
    let randomNumber;
    for (let i = 0; i < inputEl2; i++) {
        randomNumber2 = getRndInteger(1, 100);
        console.log(randomNumber2);
        array2.push(randomNumber2);
        
    }
    resultEl2.classList.remove('d-none')
    resultEl2.innerText = array2
    console.log(array2.length);
});


