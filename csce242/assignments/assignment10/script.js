window.addEventListener("load", function() {
    const items = [
      { title: "Happy birthday", image: "../../../images/birthday.jpg" },
      { title: "Crazy clown", image: "../../../images/clown.jpg" },
      { title: "its raining", image: "../../../images/rain.jpg" },
      { title: "the quiet time", image: "../../../images/read.jpg" },
      { title: "working hard", image: "../../../images/shovel.jpg" },
      { title: "work from home", image: "../../../images/work.jpg" }
    ];
  
    const optionsList = document.getElementById("optionsList");
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("overlay");
    const popupTitle = document.getElementById("popup-title");
    const popupImage = document.getElementById("popup-image");
    const closeBtn = document.getElementById("close");
  
    items.forEach(item => {
      let li = document.createElement("li");
      li.textContent = item.title;
      li.setAttribute("data-image", item.image);
  
      li.addEventListener("click", function() {
        popupTitle.textContent = item.title;
        popupImage.src = item.image;
        popup.classList.remove("hidden");
        overlay.classList.remove("hidden");
      });
  
      optionsList.appendChild(li);
    });
  
    function closePopup() {
      popup.classList.add("hidden");
      overlay.classList.add("hidden");
    }
  
    closeBtn.addEventListener("click", closePopup);
    overlay.addEventListener("click", closePopup);
  });
  