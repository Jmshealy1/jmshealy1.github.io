document.getElementById("exercise1-btn").onclick = () => {
    showSection("travel");
};

document.getElementById("exercise2-btn").onclick = () => {
    showSection("heart");
};

function showSection(section) {
    document.querySelectorAll(".content").forEach(div => div.classList.remove("active"));
    document.getElementById(section).classList.add("active");
}

document.getElementById("transport").oninput = () => {
    let input = document.getElementById("transport").value.toLowerCase();
    let img = document.getElementById("transport-img");
    let images = {
        "bike": "../../../images/bike.jpg",
        "scooter": "../../../images/scooter.jpg",
        "car": "../../../images/car.png",
        "skateboard": "../../../images/skateboard.jpg"
    };
    
    if (images[input]) {
        img.src = images[input];
        img.style.display = 'block';
    } else {
        img.style.display = 'none';
    }
};

document.getElementById("red-btn").onclick = () => changeHeartColor("red");
document.getElementById("blue-btn").onclick = () => changeHeartColor("blue");
document.getElementById("green-btn").onclick = () => changeHeartColor("green");

function changeHeartColor(color) {
    document.getElementById("heart-symbol").style.color = color;
}
