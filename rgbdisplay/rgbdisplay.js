const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

document.getElementById('upload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (!file) return;
    const img = new Image();
    img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;

        // Desenha a imagem no canvas
        ctx.drawImage(img, 0, 0);
    }
});

function randomHexDigit() {
    const chars = "0123456789ABCDEF";
    return chars[Math.floor(Math.random() * 16)];
}

function getRandomColorComponent() {
    return randomHexDigit() + randomHexDigit();
}

function handleEnter(event) {
   if (event.key==="Enter") {
      const form = document.getElementById('form')
      const index = [...form].indexOf(event.target);
      form.elements[index + 1].focus();
      //event.preventDefault();
    }
}

var RedOrange
var GreenOrange
var BlueOrange

function ShadesOfOrange() {
    let PossibleColors = [0, 3, 6, 9, 12]
    const ShadesOfOrange = ["FF", "A5", "00", "FF", "AC", "1C", "F2", "8C", "28", "FF", "5F", "1F", "FF", "5F", "15"]
    let RandomOrangeComponent = PossibleColors[(Math.floor(Math.random() * 5))]
    RedOrange = String(ShadesOfOrange[RandomOrangeComponent]);
    GreenOrange = String(ShadesOfOrange[RandomOrangeComponent + 1]);
    BlueOrange = String(ShadesOfOrange[RandomOrangeComponent + 2]);
}

function startDraw(DrawingColors) {

    let Colors = String(DrawingColors)

    const WidthInput = document.getElementById("WidthInput").value;
    const HeightInput = document.getElementById("HeightInput").value;

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

        switch (Colors) {
            case "RandomColors":
                red = getRandomColorComponent();
                green = getRandomColorComponent();
                blue = getRandomColorComponent();
                break;
            case "GreenColors":
                red = "00";
                green = getRandomColorComponent();
                blue = "00";
                break;
            case "OrangeColors":
                ShadesOfOrange();
                red = RedOrange;
                green = GreenOrange;
                blue = BlueOrange;
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