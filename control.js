let etiquetaImagen=document.getElementById("fotografia");
let etiquetaTitulo=document.getElementById("titulo")
let etiquetaParrafo=document.getElementById("parrafo")
let etiquetaMenu=document.getElementById("menu")
let etiquetaFondo=document.getElementById("fondo")
let etiquetaAudio=document.getElementById("audio")
let clic=0

let etiquetaBoton=document.getElementById("boton")
etiquetaBoton.addEventListener("click",function(evento){
    clic ++
    console.log(clic)
    if (clic%2==0) {
        etiquetaImagen.src="./img/CABALLEROS-DEL-ZODIACO-HOME-1.jpg";
        etiquetaTitulo.textContent="Sinopsis"
        etiquetaTitulo.classList.remove("color_titulo")
        etiquetaParrafo.textContent="Son un grupo de jóvenes caballeros (santos) que luchan del lado de la reencarnación de la diosa Atenea (Saori Kido). Cada vez que las fuerzas del mal ponen en peligro a la humanidad, los caballeros portan armaduras inspiradas en cada una de las 88 constelaciones que dominan el firmamento. En la batalla se sirven del “cosmos”, energía que rodea y equilibra a todos los elementos del universo. Para salvar a Atenea tendrán que cruzar las 12 casas del zodíaco y descubrir la verdadera identidad del malvado patriarca."
        etiquetaParrafo.classList.remove("color_letra")
        etiquetaMenu.classList.remove("color_menu")
        etiquetaFondo.classList.remove("fondo")
        etiquetaAudio.src="./audio/intro.mp3"
    } else {
        etiquetaImagen.src="./img/img1.jpg";
        etiquetaTitulo.textContent="Capitulo 1"
        etiquetaTitulo.classList.add("color_titulo")
        etiquetaParrafo.textContent="De la mano de su creador, Masami Kurumada, nace en 1986 el primer volumen del manga shonen1 de Los Caballeros del Zodíaco (Saint Seiya), publicado en la revista Shonen Jump. Las productoras Bandai y Toei Animation, casi instantáneamente, lanzaron la adaptación animada en Japón de la famosa saga del Santuario. El éxito no tardó en propagarse en Occidente, así que durante las tres décadas siguientes el universo expandido de Los Caballeros… crece exponencialmente: secuelas, precuelas, spin-offs y numerosas películas basadas en los personajes (esta sería la sexta)."
        etiquetaParrafo.classList.add("color_letra")
        etiquetaMenu.classList.add("color_menu")
        etiquetaFondo.classList.add("fondo")
        etiquetaAudio.src="./audio/audio1.mp3"
    }
    
})