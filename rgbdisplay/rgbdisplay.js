const WidthInput = document.getElementById("WidthInput").value;
const HeightInput = document.getElementById("HeightInput").value;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function randomHexDigit() {
const chars = "0123456789ABCDEF";
return chars[Math.floor(Math.random() * 16)];
}

function getRandomColorComponent() {
return randomHexDigit() + randomHexDigit();
}

function startDraw(greenOnly) {
ctx.clearRect(0, 0, canvas.width, canvas.height);

const cols = HeightInput;
const rows = WidthInput;
const rectWidth = canvas.width / cols;
const rectHeight = canvas.height / (rows * 3); // 3 cores por linha

for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
    const x = col * rectWidth;
    const yBase = row * 3 * rectHeight;

    // Cores RGB
    let red, green, blue;

    if (greenOnly) {
        red = "00";
        green = getRandomColorComponent();
        blue = "00";
    } else {
        console.log(WidthInput, HeightInput)
        red = getRandomColorComponent();
        green = getRandomColorComponent();
        blue = getRandomColorComponent();
    }

    // Retângulo vermelho
    ctx.fillStyle = `#${red}0000`;
    ctx.fillRect(x, yBase, rectWidth, rectHeight);

    // Retângulo verde
    ctx.fillStyle = `#00${green}00`;
    ctx.fillRect(x, yBase + rectHeight, rectWidth, rectHeight);

    // Retângulo azul
    ctx.fillStyle = `#0000${blue}`;
    ctx.fillRect(x, yBase + 2 * rectHeight, rectWidth, rectHeight);
    }
}
}