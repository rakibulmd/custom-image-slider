let images = ["./img/1.jpg", "./img/2.jpg", "./img/3.jpg", "./img/4.jpg"];
let interval = document.getElementById("interval").value;
let imgIndex = 0;
let slider = setInterval(() => {
    const imgUrl = images[imgIndex];
    console.log(imgUrl);
    imgIndex++;
    imgIndex === images.length ? (imgIndex = 0) : "";
    let img = document.getElementById("slider-img");
    img.setAttribute("src", `${images[imgIndex]}`);
}, interval);
document.getElementById("set-interval").addEventListener("click", () => {
    let a = document.getElementById("interval").value;
    interval = parseFloat(a);
});
