function agregarHabilidad() {
    let newSkill = prompt("Introduce una nueva habilidad:");
    let newLevel = prompt("Introduce el nivel de la habilidad (Básico, Intermedio, Avanzado):");

    if (newSkill && newLevel) {
        let table = document.getElementById('skillsTable');
        let newRow = table.insertRow(table.rows.length);

        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);

        cell1.textContent = newSkill;
        cell2.textContent = newLevel;
    }
}

// Función para mostrar certificaciones
function mostrarCertificaciones() {
    const certificaciones = ["Bachiller", "Tecnico", "Tecnologo", "Bootcamp"];
    let ul = document.getElementById('listaCertificaciones');

    for (let i = 0; i < certificaciones.length; i++) {
        let li = document.createElement('li');
        li.textContent = certificaciones[i];
        ul.appendChild(li);
    }
}

// Función para mostrar la cantidad de proyectos solicitados
function showProjects(numProjects) {
    let projectsList = document.querySelectorAll('.projects li');

    for (let i = 0; i < numProjects && i < projectsList.length; i++) {
        alert("Proyecto " + (i + 1) + ": " + projectsList[i].textContent);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('addSkill').addEventListener('click', agregarHabilidad);
    
    document.getElementById('viewProjectsButton').addEventListener('click', function() {
        let numProjects = prompt("¿Cuántos proyectos deseas ver?");
        
        if (numProjects) {
            numProjects = parseInt(numProjects);
            if (!isNaN(numProjects)) {
                showProjects(numProjects);
            } else {
                alert("Por favor, ingresa un número válido.");
            }
        }
    });
    
    // Mostrar certificaciones
    mostrarCertificaciones();

    // Manejar el envío del formulario de contacto
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe

        // Obtener los valores del formulario
        let userName = document.getElementById('nombre').value;
        let userEmail = document.getElementById('email').value;

        // Mostrar la pantalla emergente de agradecimiento
        alert("Gracias " + userName + ", me pondré en contacto contigo pronto!");
    });

    // Manejar el clic en el botón de contacto
    document.getElementById('contactButton').addEventListener('click', function() {
        // Pedir nombre y correo electrónico
        let userName = prompt("Por favor, introduce tu nombre:");
        let userEmail = prompt("Por favor, introduce tu correo electrónico:");

        // Mostrar la pantalla emergente de agradecimiento
        alert("Gracias " + userName + ", me pondré en contacto contigo pronto!");
    });
});

const calificarHojaDeVida = () => {
    let calificacion = prompt("Del 1 al 10, ¿cómo calificarías mi hoja de vida?");
    alert(`¡Gracias por calificar con un ${calificacion}!`);
}