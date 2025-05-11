const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;

let ImageHexColors = [];
let ElementOfImageHexColors = 0;

// Escala de exibição apenas usada para imagens
let imageScale = 1;

function handleEnter(event) {
    if (event.key === "Enter") {
        const form = document.getElementById('form');
        const index = [...form].indexOf(event.target);
        form.elements[index + 1]?.focus();
    }
}
document.getElementById('upload').addEventListener('change', function (event) {
    document.getElementById("loadingIndicator").style.display = "block";
    const file = event.target.files[0];
    if (!file) return;

    const img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = function () {
        const imgWidth = img.width;
        const imgHeight = img.height;

        document.getElementById("WidthInput").value = imgHeight;
        document.getElementById("HeightInput").value = imgWidth;

        // ESCALA VISUAL APENAS PARA IMAGEM
        if (document.getElementById("CanvasWidthInput").value === "") {
            document.getElementById("CanvasWidthInput").value = 70
        }
        
        const maxCanvasWidth = window.innerWidth * (document.getElementById("CanvasWidthInput").value / 100);
        imageScale = maxCanvasWidth / imgWidth;

        canvas.style.width = `${maxCanvasWidth}px`;
        canvas.style.height = `${imgHeight * imageScale}px`;
        canvas.width = imgWidth;
        canvas.height = imgHeight * 3;

        // Captura os dados de imagem no canvas temporário
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, imgWidth, imgHeight).data;

        ImageHexColors = [];
        ElementOfImageHexColors = 0;

        for (let i = 0; i < imageData.length; i += 4) {
            const r = imageData[i];
            const g = imageData[i + 1];
            const b = imageData[i + 2];
            ImageHexColors.push(
                r.toString(16).padStart(2, '0'),
                g.toString(16).padStart(2, '0'),
                b.toString(16).padStart(2, '0')
            );
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        startDraw("ImageColors");
        document.getElementById("loadingIndicator").style.display = "none";
    };
});

function getRandomColorComponent() {
    const chars = "0123456789ABCDEF";
    return chars[Math.floor(Math.random() * 16)] + chars[Math.floor(Math.random() * 16)];
}

function ShadesOfOrange() {
    const combos = [
        ["FF", "A5", "00"], ["FF", "AC", "1C"], ["F2", "8C", "28"],
        ["FF", "5F", "1F"], ["FF", "5F", "15"]
    ];
    return combos[Math.floor(Math.random() * combos.length)];
}

function startDraw(mode) {
    const rows = parseInt(document.getElementById("WidthInput").value);   // número de linhas
    const cols = parseInt(document.getElementById("HeightInput").value);  // número de colunas

    // CONFIGURAÇÃO DE TAMANHO (diferente se for imagem)
    if (mode !== "ImageColors") {
        canvas.width = 1000;
        canvas.height = 500;
        canvas.style.width = 1000
        canvas.style.height = 500
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const rectWidth = canvas.width / cols;
    const rectHeight = canvas.height / (rows * 3); // 3 cores por linha

    ElementOfImageHexColors = 0;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const x = col * rectWidth;
            const yBase = row * 3 * rectHeight;

            let r = "00", g = "00", b = "00";

            switch (mode) {
                case "RandomColors":
                    r = getRandomColorComponent();
                    g = getRandomColorComponent();
                    b = getRandomColorComponent();
                    break;
                case "GreenColors":
                    r = "00";
                    g = getRandomColorComponent();
                    b = "00";
                    break;
                case "OrangeColors":
                    [r, g, b] = ShadesOfOrange();
                    break;
                case "ImageColors":
                    r = ImageHexColors[ElementOfImageHexColors++] ?? "00";
                    g = ImageHexColors[ElementOfImageHexColors++] ?? "00";
                    b = ImageHexColors[ElementOfImageHexColors++] ?? "00";
                    break;
            }

            ctx.fillStyle = `#${r}0000`;
            ctx.fillRect(x, yBase, rectWidth, rectHeight);

            ctx.fillStyle = `#00${g}00`;
            ctx.fillRect(x, yBase + rectHeight, rectWidth, rectHeight);

            ctx.fillStyle = `#0000${b}`;
            ctx.fillRect(x, yBase + 2 * rectHeight, rectWidth, rectHeight);
        }
    }
}