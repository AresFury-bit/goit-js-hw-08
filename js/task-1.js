
const items = document.querySelectorAll('.item');

const a = () => {
console.log(`Number of сategories: ${document.querySelectorAll('.item h2').length}`);
    items.forEach(item => {
        
        console.log(`Category: ${item.querySelector(`.item h2`).textContent}`);
        const li = item.querySelectorAll('li');
        console.log(`Elements: ${li.length}`)
    })
}  
        
a();




