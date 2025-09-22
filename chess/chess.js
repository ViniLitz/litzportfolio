const board = document.querySelector(".board");
const ctx = board.getContext("2d");

for (let index = 1; index < 64; index++) {
    if (ctx.fillStyle === "white") {
        ctx.fillStyle = "black"
    } else {
        ctx.fillStyle = "white"
    }
    switch (index) {
        case index < 8:
            ctx.fillRect(100 * index, 100 * index, 100, 100);
            break;
        case index < 16:
            ctx.fillRect(100 * index, 200 * index, 100, 100);
        case index < 24:
            ctx.fillRect(100 * index, 300 * index, 100, 100);
            break;
        case index < 32:
            ctx.fillRect(100 * index, 400 * index, 100, 100);
        case index < 40:
            ctx.fillRect(100 * index, 500 * index, 100, 100);
            break;
        case index < 48:
            ctx.fillRect(100 * index, 600 * index, 100, 100);
        case index < 56:
            ctx.fillRect(100 * index, 700 * index, 100, 100);
            break;
        case index < 64:
            ctx.fillRect(100 * index, 800 * index, 100, 100);
        default: console.log("Erro na formação do tabuleiro")
            break;
    }
    
}