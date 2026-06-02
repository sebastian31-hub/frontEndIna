======================================================================
🍔 BurgerByte - Documentación de Funcionamiento y Código
======================================================================

Este proyecto es una aplicación interactiva que simula el flujo de una tienda de hamburguesas en línea. A continuación se explica detalladamente qué hace el programa en la pantalla y mediante qué funciones exactas de código se logran esos resultados.

1. Mensaje de Bienvenida Automático
----------------------------------------------------------------------
* ¿Qué hace en la página?: Apenas entras al sitio web, la tienda te saluda de manera automática en la sección oculta para desarrolladores.
* ¿Cómo se logra en el código?: Se utiliza la función `window.addEventListener("DOMContentLoaded", ...)` al inicio del archivo 'main.js'. Esta función detecta el momento exacto en que la página termina de cargar su estructura y ejecuta inmediatamente un `console.log()` con el texto de bienvenida.

2. Muestra Dinámica del Menú (Combos)
----------------------------------------------------------------------
* ¿Qué hace en la página?: En lugar de escribir cada hamburguesa a mano en el HTML, la lista de combos se genera sola con sus imágenes, nombres y precios correspondientes.
* ¿Cómo se logra en el código?: Los datos están guardados en una lista llamada `productos`. La función `renderProductos()` toma esa lista, recorre cada combo y genera el código visual de forma automática usando `.map()`, inyectándolo directamente en la pantalla.

3. Gestión del Carrito de Compras
----------------------------------------------------------------------
El carrito es el núcleo interactivo del sitio y funciona gracias a un conjunto de acciones coordinadas:

* Agregar Productos: Al hacer clic en el botón de cualquier hamburguesa, se activa la función `agregarAlCarrito(id)`. Esta busca cuál combo elegiste y lo guarda en una lista interna llamada `carrito`.
* Quitar Productos: Si agregaste algo por error, cada elemento dentro del carrito tiene una "X". Al presionarla, se ejecuta `eliminarDelCarrito(index)`, que saca ese producto específico de la lista.
* Vaciar Carrito Completo: Se implementó un botón especial para limpiar todo de un solo golpe. Este botón activa la función `vaciarCarrito()`, la cual borra por completo la lista interna.
* Actualización en Tiempo Real: Cada vez que agregas, quitas o vacías el carrito, se llama automáticamente a la función `actualizarCarrito()`. Ella se encarga de rediseñar lo que ves en pantalla, sumar los precios para mostrar el "Total" correcto y ocultar o mostrar los botones de compra según si hay elementos o no.

4. Simulación de Finalización de Compra
----------------------------------------------------------------------
* ¿Qué hace en la página?: Permite al usuario "comprar" lo que guardó. Al confirmar, la pantalla se limpia y se avisa que el proceso fue exitoso.
* ¿Cómo se logra en el código?: Se ejecuta mediante la función `realizarCompra()`. Esta función primero verifica que el carrito no esté vacío; si tiene productos, lanza un mensaje de éxito mediante `console.log()` y una alerta visual (`alert()`), para finalmente invocar a `vaciarCarrito()` y dejar la tienda lista para un nuevo pedido.

5. Sistema de Feedback y Calificaciones
----------------------------------------------------------------------
* ¿Qué hace en la página?: Un formulario al final de la web permite al cliente evaluar su experiencia. Si escribe algo mal o deja campos vacíos, la página le avisa el error en rojo; si todo está correcto, le agradece en verde.
* ¿Cómo se logra en el código?: Se maneja con un detector de eventos en el formulario (`addEventListener("submit", ...)`). Dentro, utiliza una función de seguridad llamada `sanitizarTexto()` para evitar que usuarios maliciosos inyecten código dañino. Luego, mediante reglas de validación (`try/catch`), el programa revisa los textos antes de mostrar el mensaje final en la pantalla.

6. Interruptor de Apariencia (Modo Oscuro)
----------------------------------------------------------------------
* ¿Qué hace en la página?: Un botón en el pie de página permite cambiar el fondo a negro y las letras a blanco para descansar la vista.
* ¿Cómo se logra en el código?: Al hacer clic en el botón, el código ejecuta `document.body.classList.toggle("dark")`. Esta función actúa como un interruptor que pone o quita la etiqueta de estilo oscuro en toda la página de manera instantánea.
