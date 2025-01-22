



function showAdditionalImages(propertyId) {
    const modal = document.getElementById("imageModal");
    const modalImages = document.getElementById("modalImages");

    // Töröljük a meglévő képeket
    modalImages.innerHTML = '';

    // Képek betöltése a propertyId alapján
    const images = [
        ['./img/ház1_1.jpg', './img/ház1_2.jpg', './img/ház1_3.jpg'],
        ['./img/ház2_1.jpg', './img/ház2_2.jpg', './img/ház2_3.jpg'],
        ['./img/ház3_1.jpg', './img/ház3_2.jpg', './img/ház3_3.jpg']
    ];

    images[propertyId - 1].forEach(imgSrc => {
        const img = document.createElement('img');
        img.src = imgSrc;
        modalImages.appendChild(img);
    });

    modal.style.display = "block";
}


  // Modális elemek
  const modal = document.getElementById("contactModal");
  const openModalButton = document.querySelector("button");
  const closeModalButton = document.querySelector(".close");

  // Modális megnyitása
  openModalButton.addEventListener("click", () => {
    modal.style.display = "block";
  });

  // Modális bezárása az "X" gombbal
  closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Modális bezárása kattintásra a háttérre
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

