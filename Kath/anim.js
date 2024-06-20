// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
 
  { text: "Lately,", time: 12 },
  { text: "I can't help but think", time: 13 },
  { text: "That our roads might take us down different phases", time: 17 },

  { text: "Don't wanna complicate the rhythm that", time: 23 },
  { text: "we've got but I'm speechless", time: 24 },
  { text: "When everything's so pure, can it be", time: 29 },
  { text: "aimless?", time: 33 },
  { text: "Painless?", time: 37 },
  { text: "If you ever go,", time: 39 },
  { text: "all the songs that we like", time: 44 },
  { text: "Will sound like bittersweet lullabies", time: 47 },
  { text: "Lost in the blue they don't love me like you", time: 57 },
  { text: "do", time: 60 },
  { text: "Those chills that I knew", time: 62 },
  { text: "They were nothing without you", time: 66 },
  { text: "[Music]", time: 68 },
  { text: "No one loves me like you do", time: 82 },
  { text: "Since I met you", time: 91 },
  { text: "All the gloomy days just seem to shine a", time: 95 },
  { text: "little more brightly", time: 98 },
  { text: "[Music]", time: 100 },
  { text: "Consider what we've got 'cause I can", time: 102 },
  { text: "never take you for granted", time: 104 },
  { text: "Is there another us on this whole planet?", time: 109 },
  { text: "[Music]", time: 122 },
  { text: "If you ever go, all the songs that we like", time: 123 },
  { text: "Will sound like bittersweet lullabies", time: 127 },
  { text: "[Music]", time: 140 },
  { text: "No one loves me like you do", time: 161 },
  { text: "No one loves me like you do", time: 168 },
  { text: "[Music]", time: 172 },
  { text: "I don't wanna seem foolish", time: 176 },
  { text: "When I'm jumping into this", time: 184 },
  { text: "You're all that I see", time: 191 },
  { text: "Lost in the blue", time: 194 },
  { text: "They don't love me like you do", time: 208 },
  { text: "Those chills that I knew", time: 219 },
  { text: "They were nothing without you", time: 226 }
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