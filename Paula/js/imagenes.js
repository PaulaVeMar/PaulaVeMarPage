const params = new URLSearchParams(window.location.search);
const folder = params.get('folder');
const title = params.get('title');
const nameTitle = params.get('name');

document.getElementById("title").textContent= title;
const carrusel = document.getElementById("carruselInner");
for (let i = 1; i <= 100; i++) {
  url = `${folder}/${nameTitle}${i}.jpg`;
  verificarImagen(url,(existe, ruta)=>{
    if(existe){
      const img = document.createElement("img");
      img.src = `${folder}/${nameTitle}${i}.jpg`;
      img.alt = `${folder}_${i}`;
      img.classList.add("imagen-ampliable");
      img.style.width = "450px";
      img.style.padding = "4%";
      img.addEventListener("click", () => {
        img.classList.toggle("ampliada");
      });

    carrusel.appendChild(img);
    }
  });
}

function verificarImagen(url, callback) {
  const img = new Image();
  img.onload = () => callback(true, url);
  img.onerror = () => callback(false, url);
  img.src = url;
}