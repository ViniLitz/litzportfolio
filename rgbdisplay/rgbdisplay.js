const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function randomHexDigit() {
    const chars = "0123456789ABCDEF";
    return chars[Math.floor(Math.random() * 16)];
}

function getRandomColorComponent() {
    return randomHexDigit() + randomHexDigit();
}

function ShadesOfOrange(RGB) {
    let RGBColors = String(RGB)
    let PossibleColors = [0, 3, 6, 9, 12]
    const ShadesOfOrange = ["#FF", "A5", "00", "FF", "8C", "00", "FF", "7F", "50", "FF", "45", "00", "EC", "58", "00"]
    let RandomOrangeComponent = PossibleColors[Math.floor(Math.random() * 5)]
    switch (RGBColors) {
        case 'Red':
            const RedOrange = ShadesOfOrange[RandomOrangeComponent];
            console.log(RedOrange);
            break;
        case 'Green':
            const GreenOrange = ShadesOfOrange[RandomOrangeComponent += 1];
            break;
        case 'Blue':
            const BlueOrange = ShadesOfOrange[RandomOrangeComponent += 2];
            break;
    }
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
                ShadesOfOrange('Red');
                red = RedOrange;
                ShadesOfOrange('Green');
                green = GreenOrange;
                ShadesOfOrange('Blue');
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