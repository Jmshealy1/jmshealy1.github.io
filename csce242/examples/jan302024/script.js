const doStuff = () =>{
    const messageP = document.getElementById("message");
    messageP.innerHTML = "Hello World"
    messageP.classList.toggle("special");
}
const hideStrawberry = () => {
    document.getElementById("strawberry").classList.add("hidden");
    //.src to change image
}

document.getElementById("btn-click").onclick = doStuff;
document.getElementsByTagName("strawberry").onclick = hideStrawberry;

