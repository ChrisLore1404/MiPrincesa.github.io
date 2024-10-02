// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Todos tenemos un destino; tú eres el mío", time: 15 },
  { text: "Sé que no soy lo suficientemente bueno para ti", time: 18 },
  { text: "pero pasaré el resto de mi vida probando que sí lo soy", time: 27 },
  { text: "Quiero vivir todo el tiempo contigo", time: 32 },
  { text: "Dare todo por verte muy feliz", time: 33 },
  { text: "Me encanta mucho tu hermosa sonrisa que tienes", time: 41 },
  { text: "Quiero cuidarte mucho para verte muy bien", time: 47 },
  { text: "Me enamore completamente de ti ", time: 54 },
  { text: "Toma mi mano y escribamos la mas hermosa historia juntos", time: 59 },
  { text: "Dare todo por ti mi amor", time: 67 },
  { text: "Quiero ver como cumples tus metas", time: 72 },
  { text: "Apoyarte en todo", time: 78 },
  { text: "Vivir contigo por siempre amor", time: 83 },
  { text: "Siempre te voy a buscar", time: 91 },
  { text: "Escribimos nuestra historia juntos?", time: 97 },
  { text: "Que sea la historia mas hermosa de amor", time: 104 },
  { text: "Que todos nos tengan envidia", time: 108 },
  { text: "Seamos los mas felices del mundo entero", time: 144 },
  { text: "¿Te casarías conmigo", time: 148 },
  { text: "y harías que nuestra aventura", time: 153 },
  { text: "dure para siempre?", time: 158 },
 
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);