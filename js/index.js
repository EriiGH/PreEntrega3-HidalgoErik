

function deleteItem(event) {
    event.target.parentElement.remove();
    calcularPrecioTotal();

}


function calcularPrecioTotal() {
    const precioTotalElement = this.document.querySelector("#precioTotal");
    const listDeCarrito = document.querySelectorAll(".eliminarBoton");
    let precioTotal = 0;
    if (listDeCarrito.length > 0) {
        listDeCarrito.forEach(element => {
            precioTotal += parseInt(element.dataset.precio);
        });
    }

    precioTotalElement.innerHTML = precioTotal;

}

window.addEventListener('load', function () {


    function addToList(nombre, precio) {
        const listContainer = this.document.querySelector("#listContainer");
        const child = document.createElement("li");
        child.dataset.precio = precio;
        child.classList.add("eliminarBoton");
        const contentChild = `
        <p class="textoProductos">${nombre}</p> 
        <button onclick="deleteItem(event)" class="botonEliminar" >Eliminar producto</button>
        `;
        child.innerHTML = contentChild;
        listContainer.appendChild(child);

        calcularPrecioTotal();
        
    }
    const buttonMandarina = document.querySelector('#addMandarina');
    buttonMandarina.addEventListener('click', () => addToList("Mandarina", 200));

    const buttonNaranja = document.querySelector('#addNaranja');
    buttonNaranja.addEventListener('click', () => addToList("Naranja", 350));

    const buttonLimones = document.querySelector('#addlimones');
    buttonLimones.addEventListener('click', () => addToList("Limones", 150));

    const buttonLimas = document.querySelector('#addLima');
    buttonLimas.addEventListener('click', () => addToList("Lima", 270));

    const buttonBanana = document.querySelector('#addBanana');
    buttonBanana.addEventListener('click', () => addToList("Banana", 250));



})