// Mensaje de bienvenida por consola al cargar la página
window.addEventListener("DOMContentLoaded", () => {
    console.log("🍔 ¡Bienvenido a BurgerByte! Disfruta de los mejores combos de hamburguesas de la web.");
});
const productos = [
    {
        id: 1,
        nombre: "Hamburguesa A",
        precio: 8990,
        imagen: "img/Hamburguesa1_front.jpg"
    },
    {
        id: 2,
        nombre: "Hamburguesa B",
        precio: 7990,
        imagen: "img/Hamburguesa2_front.jpg"
    },
    {
        id: 3,
        nombre: "Hamburguesa C",
        precio: 9490,
        imagen: "img/Hamburguesa3_front.jpg"
    }
];

let carrito = [];

function renderProductos() {
    const cont = document.getElementById("productos");

    cont.innerHTML = productos.map(p => `
        <div class="col-12 col-md-6 col-lg-4 producto-card">
            <div class="card h-100">
                <div class="card-body d-flex gap-3 align-items-center">
                    <div class="imagen-producto">
                        <img src="${p.imagen}" alt="${p.nombre}">
                    </div>

                    <div class="flex-grow-1">
                        <h4>${p.nombre}</h4>

                        <p class="text-muted small">
                            Combo hamburguesa + acompañamiento + bebida.
                        </p>

                        <p>
                            <strong>$${p.precio}</strong>
                        </p>

                        <button
                            class="btn btn-primary btn-sm w-100"
                            onclick="agregarAlCarrito(${p.id})"
                        >
                            Agregar al carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join("");
}

function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);

    carrito.push(producto);
    actualizarCarrito();
}

console.log("¡Hola! Bienvenido a la página.");

function eliminarDelCarrito(index) {
    carrito = carrito.filter((_, i) => i !== index);

    actualizarCarrito();
}

function vaciarCarrito() {
    carrito = [];

    actualizarCarrito();
}

function realizarCompra() {
    if (carrito.length === 0) {
        return;
    }

    console.log("🛒 Compra realizada con éxito. ¡Gracias por elegir BurgerByte!");

    alert("¡Compra realizada con éxito! Revisa la consola de desarrollador.");

    vaciarCarrito();
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById("carrito");
    const accionesCarrito = document.getElementById("carrito-acciones");
    const contadorBadge = document.getElementById("contador-carrito");

    // Actualizar contador visual
    contadorBadge.textContent = carrito.length;

    if (carrito.length === 0) {
        listaCarrito.innerHTML = `
            <li class="text-center text-muted list-group-item border-0">
                Carrito vacío
            </li>
        `;

        accionesCarrito.classList.add("d-none");
    } else {
        listaCarrito.innerHTML = carrito.map((p, i) => `
            <li class="list-group-item d-flex justify-content-between align-items-center gap-2 py-2">
                <span class="small text-truncate" style="max-width: 180px;">
                    ${p.nombre}
                </span>

                <div class="d-flex align-items-center gap-2">
                    <span class="fw-bold small">
                        $${p.precio}
                    </span>

                    <button
                        class="btn btn-danger btn-sm px-2 py-0"
                        onclick="eliminarDelCarrito(${i})"
                    >
                        &times;
                    </button>
                </div>
            </li>
        `).join("");

        document.getElementById("total").textContent = carrito.reduce((a, p) => a + p.precio, 0);

        accionesCarrito.classList.remove("d-none");
    }
}

// Asignar eventos a los nuevos botones del carrito
document.getElementById("btn-vaciar").addEventListener("click", e => {
    e.stopPropagation();

    vaciarCarrito();
});

document.getElementById("btn-comprar").addEventListener("click", e => {
    e.stopPropagation();

    realizarCompra();
});

function sanitizarTexto(txt) {
    const div = document.createElement("div");

    div.textContent = txt;

    return div.innerHTML;
}

document.getElementById("feedbackForm").addEventListener("submit", e => {
    e.preventDefault();

    try {
        const nombre = sanitizarTexto(document.getElementById("nombre").value.trim());
        const correo = document.getElementById("correo").value.trim();
        const comentario = sanitizarTexto(document.getElementById("comentario").value.trim());
        const cal = document.getElementById("calificacion").value;

        if (nombre.length < 3) {
            throw new Error("Nombre inválido");
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
            throw new Error("Correo inválido");
        }

        if (comentario.length < 10) {
            throw new Error("Comentario muy corto");
        }

        if (!cal) {
            throw new Error("Seleccione una calificación");
        }

        document.getElementById("mensaje").innerHTML =
            '<div class="alert alert-success">Gracias por tu feedback.</div>';

        e.target.reset();
    } catch (error) {
        document.getElementById("mensaje").innerHTML =
            `<div class="alert alert-danger">${error.message}</div>`;
    }
});

document.getElementById("temaBtn").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Inicializar la tienda
renderProductos();