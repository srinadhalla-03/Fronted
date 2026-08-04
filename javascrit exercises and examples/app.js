let container = document.getElementById('product-list');
function display(){
    container.innerHTML = '';
    products.forEach(element=>{
        container.innerHTML += `
        <div class="card">
            <img src="${element.image}" alt="${element.name}">
            <h2>${element.name}</h2>
            <p>${element.description}</p>
            <p>Price: $${element.price}</p>
            <p>Stock: ${element.stock}</p>
        </div>
        `;
    });
}
display();