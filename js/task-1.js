
const items = document.querySelectorAll('.item');

const a = () => {
console.log(`Number of сategories: ${items.length}`);
    items.forEach(item => {
        
        console.log(`Category: ${item.querySelector('h2').textContent}`);
        const li = item.querySelectorAll('li');
        console.log(`Elements: ${li.length}`)
    })
}  
        
a();