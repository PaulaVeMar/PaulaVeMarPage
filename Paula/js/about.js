let currentIndex = 0;
let imageList = [];

function goToDetail(clothesClass, talent, stylist, stylistAssitan, productionAssitant) {
  const folder = "portfolio-paula-vega/editorial/" + clothesClass;
  const imageModal = document.getElementById("imageModal");

  imageList = [];
  currentIndex = 0;

  const imageCount = 100;
  let cargadas = 0;

  for (let i = 1; i <= imageCount; i++) {
    const imgUrl = `${folder}/${clothesClass}${i}.jpg`;

    verificarImagen(imgUrl, (existe, ruta) => {
      if (existe) {
        const caption = [
          talent,
          stylist,
          stylistAssitan,
          productionAssitant,
        ].filter(Boolean).join('<br>');
        imageList.push({
          src: ruta,
          caption
        });
      }
      cargadas++;
      if (cargadas === imageCount && imageList.length > 0) {
        showImage(0);
        imageModal.classList.add("active");
      }
    });
  }
}

function verificarImagen(url, callback) {
  const img = new Image();
  img.onload = () => callback(true, url);
  img.onerror = () => callback(false, url);
  img.src = url;
}

function showImage(index) {
  const img = document.getElementById("carouselImage");
  const caption = document.getElementById("carouselCaption");

  img.src = imageList[index].src;
  caption.innerHTML='';
  imageList[index].caption
    .split('<br>')                             
    .filter(Boolean)                           
    .forEach(line => {
      const p = document.createElement('p');
      p.textContent = line;                    
      caption.appendChild(p);
    });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % imageList.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
  showImage(currentIndex);
}

function closeModal() {
  document.getElementById("imageModal").classList.remove("active");
}


function copiarCorreo(){
  const correo = "paulavemar@hotmail.com"
  navigator.clipboard.writeText(correo).then(()=>{
    const mensaje = document.getElementById("mensaje-copiado");
    mensaje.style.display = "block";
    setTimeout(() => {
      mensaje.style.display = "none";
    }, 2000);
  }).catch(err => {
    alert("Error al copiar el correo: " + err);
  });
}