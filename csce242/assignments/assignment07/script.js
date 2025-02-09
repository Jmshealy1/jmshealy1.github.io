const colorButton = () => {
    alert("Color button clicked");
};

const changeColor = () => {
    const pickedColor = document.getElementById("color-picker").value;
    document.getElementById("star").style.color = pickedColor;
};

const sayHello = (element) => {
    const helloDiv = element.querySelector(".hello-container");
    const helloText = document.createElement("p");
    helloText.textContent = "Hello";
    helloDiv.appendChild(helloText);
};

const changeImage = () => {
    const img = document.getElementById("changeable-image");
    img.src = img.src.includes("../../../images/fpbackground.jpg") ? "../../../images/fpbackground.jpg" : "../../../images/kitten.jpg";
};

window.onload = () => {
    document.getElementById("color-picker").onchange = changeColor;
    document.getElementById("changeable-image").onclick = changeImage;
};