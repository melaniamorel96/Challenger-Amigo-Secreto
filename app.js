// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() { //Funcion para agregar amigo secreto
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    const mensajeError = document.getElementById('mensajeError');

    //Comprobacion de datos
    if (nombre === "") {// Validación de entrada: el campo no puede estar vacío
        alert("Por favor, ingresa un nombre válido.");//Aparece una alerta en el navegador
        return;
    }
  
    if (!isNaN(nombre)) {// Validación de entrada: el nombre no puede contener solo números
        alert("El nombre no puede ser un número.");//Aparece una alerta en el navegador
        return;
    }
    
    if (amigos.includes(nombre)) {// Validación de entrada: el nombre no puede estar repetido
        alert("Este nombre ya está en la lista.");//Aparece una alerta en el navegador
        return;
    }

    
    amigos.push(nombre);// Agregar el nombre ingresado al array de amigos secretos
    input.value = ""; // Despeja el campo de entrada luego de agregar el nombre al array

    
    actualizarListaAmigos(); // Se encarga de actualizar la lista de amigos en la interfaz que ve el usuario
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Vacia la lista antes de actualizar

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    const mensajeError = document.getElementById('mensajeError');
    
    if (amigos.length < 2) {// Realiza una validación, debe haber al menos 2 nombres de amigos para poder realizar el sorteo
        alert("Necesitas al menos 2 amigos para realizar el sorteo.");//Aparece una alerta en el navegador
        return;
    }

    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);// Seleccionar un índice aleatorio del array de amigos
    const amigoSecreto = amigos[indiceAleatorio];

    
    const resultado = document.getElementById('resultado');// Muestra el resultado en la interfaz del usuario
    resultado.innerHTML = `<li>Tu amigo secreto es: ${amigoSecreto}</li>`;
}
