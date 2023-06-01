/**
 * author: Nazim Uddin
 * description: random quote generator
*/


const defaultQuote = ['a', 'b', 'c', 'd', 'e', 'c', 'e', 'f', 'f', 'g', 'i']


window.onload = () =>{
    main();
}

function main() {
    const quoteBtn  = document.getElementById('quote-btn');
    const quote = document.getElementById('para');
    
    quoteBtn.addEventListener('click', function(){
        const index = Math.floor(Math.random()*10);
        quote.innerHTML = defaultQuote[index];
    })
}