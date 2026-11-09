const litres = document.querySelector('.litres');
const litresMessage = document.querySelector('.litres-message');

console.log(litres);
console.log(litresMessage);
console.log(document);

function checkLitres() {
    let amount = Number(litres.value);

    if(litres.value === '') {
        litresMessage.textContent = '';
        litres.classList.remove('invalid');
    }
}