const ID1 = document.getElementById('1')
const ID2 = document.getElementById('2')
const ID3 = document.getElementById('3')
const ID4 = document.getElementById('4')
const ID5 = document.getElementById('5')
const ID6 = document.getElementById('6')

fetch("http://localhost:3000/products")
    .then(data => {
        return data.json();
    })
    .then((product) => {
      updateProducts(product)
    })

    
    
function updateProducts(products) {
    products.forEach(product => {
        console.log(product.slug);
    });
}


const shop = document.getElementById("cart");
const el = document.getElementById("car5");
const bodyel = document.getElementById("body")
const overlay = document.getElementById('overlay')
let isPlaying = false;

shop.addEventListener("click", () => {
    isPlaying = !isPlaying;
    if (isPlaying) {
        el.classList.add('visible');
        const overlay = document.getElementById('overlay')
    } else {
        el.classList.remove('visible');
        const overlay = document.getElementById('overlay')
    }
});
