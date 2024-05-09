const preguntas = [
    {
        pregunta: "Mencione la estructura que se encuentra señalada:",
        imagen: "Imagenes/Musculo Palmar Mayor.png",
        respuestaCorrecta: "Musculo Palmar Mayor",
        respuestaAlternativa: "Musculo Flexor Radial del Carpo"
    },
    {
        pregunta: "Mencione la estructura que se encuentra señalada:",
        imagen: "Imagenes/Nervio Radial.png",
        respuestaCorrecta: "Nervio Radial",
        respuestaAlternativa: "Nervio Radial"
    },
    {
        pregunta: "Mencione la estructura que se encuentra señalada:",
        imagen: "Imagenes/Arteria Radial.png",
        respuestaCorrecta: "Arteria Radial",
        respuestaAlternativa: "Arteria Radial"
    },
    {
        pregunta: "Mencione la estructura que se encuentra señalada:",
        imagen: "Imagenes/Arteria Cubital.png",
        respuestaCorrecta: "Arteria CUbital",
        respuestaAlternativa: "Arteria Ulnar"
    },
    {
        pregunta: "Mencione la estructura que se encuentra señalada:",
        imagen: "Imagenes/Musculo Infraespinoso.png",
        respuestaCorrecta: "Musculo Infraespinoso",
        respuestaAlternativa: "Musculo Infraespinoso"
    },
    {
        pregunta: "Mencione la estructura que se encuentra señalada:",
        imagen: "Imagenes/Musculo Cubital Posterior.png",
        respuestaCorrecta: "Musculo Cubital Posterior",
        respuestaAlternativa: "Musculo Extensor Ulnar del Carpo"
    },
    {
        pregunta: "Mencione la estructura que se encuentra señalada:",
        imagen: "Imagenes/Arteria Humeral.png",
        respuestaCorrecta: "Arteria Humeral",
        respuestaAlternativa: "Arteria Braquial"
    },
    {
        pregunta: "Mencione la estructura que se encuentra señalada:",
        imagen: "Imagenes/Nervio Axilar.png",
        respuestaCorrecta: "Nervio Axilar",
        respuestaAlternativa: "Nervio Circunflejo"
    },
    {
        pregunta: "Mencione la estructura que se encuentra señalada:",
        imagen: "Imagenes/Vena Cefalica.png",
        respuestaCorrecta: "Vena Cefalica",
        respuestaAlternativa: "Vena Cefalica"
    },
    {
        pregunta: "Mencione la estructura que se encuentra señalada:",
        imagen: "Imagenes/Apofisis Estiloides de Radio.png",
        respuestaCorrecta: "Apofisis Estiloides del Radio",
        respuestaAlternativa: "Proceso Estiloides del Radio"
    },
    {
        pregunta: "Mencione la estructura que se encuentra señalada:",
        imagen: "Imagenes/Musculo Abductor Largo del Pulgar.png",
        respuestaCorrecta: "Musculo Abductor Largo del Pulgar",
        respuestaAlternativa: "Abductor Largo del Pulgar"
    },
    

    // Agrega más preguntas aquí
];

let indicePreguntaActual = 0;
let puntaje = 0;

function quitarTildes(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function mostrarPregunta() {
    const currentQuestion = preguntas[indicePreguntaActual];
    document.getElementById('question-text').innerText = currentQuestion.pregunta;
    document.getElementById('question-image').src = currentQuestion.imagen;
}

function verificarRespuesta() {
    const respuestaUsuario = quitarTildes(document.getElementById('user-answer').value.trim().toLowerCase());
    const preguntaActual = preguntas[indicePreguntaActual];
    const respuestaCorrecta = quitarTildes(preguntaActual.respuestaCorrecta.toLowerCase());
    const respuestaAlternativa = quitarTildes(preguntaActual.respuestaAlternativa.toLowerCase());
    
    if (respuestaUsuario === respuestaCorrecta || respuestaUsuario === respuestaAlternativa) {
        puntaje++;
    }
    indicePreguntaActual++;
    if (indicePreguntaActual < preguntas.length) {
        mostrarPregunta();
    } else {
        mostrarResultados();
    }
    
    // Mantener el cursor en el campo de texto y decorar
    const campoTexto = document.getElementById('user-answer');
    campoTexto.focus();
    campoTexto.style.backgroundColor = '#e1e1e1'; // Cambiar el color de fondo temporalmente
    setTimeout(() => {
        campoTexto.style.backgroundColor = ''; // Restaurar el color de fondo original
    }, 200);
}

function mostrarResultados() {
    const resultsContainer = document.getElementById('results');
    const scorePercentage = (puntaje / preguntas.length) * 100;
    resultsContainer.innerHTML = `<h2>Resultados del Quiz</h2>
                                   <p>Tu Puntaje: ${puntaje} de ${preguntas.length}</p>
                                   <p>Puntuación: ${scorePercentage.toFixed(2)}%</p>`;
}

// Mostrar la primera pregunta al cargar la página
mostrarPregunta();

// Establecer un temporizador para cada pregunta
const questionTimeout = setTimeout(() => {
    indicePreguntaActual++;
    mostrarPregunta();
}, 60000);