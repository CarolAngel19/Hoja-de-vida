/*
document.getElementById('addSkill').addEventListener('click', function() {
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
});


document.getElementById('contactButton').addEventListener('click', function() {
    let userEmail = prompt("Por favor, introduce tu correo electrónico:");
    if (userEmail) {
        alert("Gracias " + userEmail + ", me pondré en contacto contigo pronto!");
    }
});

//Añadiendo Dinamismo con Ciclos

const certificaciones = ["Curso A", "Curso B", "Taller C", "Seminario D"];

function mostrarCertificaciones() {
    let ul = document.getElementById('listaCertificaciones');

    for (let i = 0; i < certificaciones.length; i++) {
        let li = document.createElement('li');
        li.textContent = certificaciones[i];
        ul.appendChild(li);
    }
}

window.onload = mostrarCertificaciones;

// Agrega el evento al botón "Ver Proyectos Anteriores"
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

// Función para mostrar la cantidad de proyectos solicitados
function showProjects(numProjects) {
    let projectsList = document.querySelectorAll('.projects li');

    for (let i = 0; i < numProjects && i < projectsList.length; i++) {
        alert("Proyecto " + (i + 1) + ": " + projectsList[i].textContent);
    }
}
*/