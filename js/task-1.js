
const items = document.querySelectorAll('.item');

const a = () => {
console.log(`Number of categories: ${document.querySelectorAll('h2').length}`);
    items.forEach(item => {
        
        console.log(`Categories: ${item.querySelector(`h2`).textContent}`);
        const li = item.querySelectorAll('li');
        console.log(`Elements: ${li.length}`)
    })
}  
        
a();




