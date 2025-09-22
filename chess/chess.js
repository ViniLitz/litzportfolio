const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;

for (let index = 0; index < 8; index++) {
    ctx.fillStyle = "white";
    ctx.fillRect(100 * index, 100 * index, 100, 100);
}