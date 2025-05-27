// 3 way to convert array to string
let boxes = document.querySelectorAll(".box");
// let i = 0;
// for(i; i<=boxes.length; i++) {
//     boxes[i].style.backgroundColor = "green";
// }

// for(let box of boxes) {
//     box.style.backgroundColor = "green";
// }

boxes.forEach(k => {
    k.style.backgroundColor = "cyan";
    let button = document.getElementById("click");
    button.addEventListener("click", () => {
        k.classList.toggle("add"); // Toggle means if on do off, if off do on
    })
})

let container = document.getElementById("item").children;

function randomColor() {
    let color1 = Math.ceil(Math.random()*255);
    let color3 = Math.ceil(Math.random()*255);
    let color2 = Math.ceil(Math.random()*255);
    return `rgb(${color1}, ${color2}, ${color3})`;
}
Array.from(container).forEach(e => {
    setInterval(() => {
        e.style.backgroundColor = randomColor();
    }, 5000);
})


// This is for green light animation
setInterval(() => {
    let spring = document.getElementById("ani");
    spring.classList.toggle("ani")
}, 2000);