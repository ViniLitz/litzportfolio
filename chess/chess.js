const board = document.querySelector(".board");
const ctx = board.getContext("2d");

let BoardIndex = 1

for (BoardIndex = 1;BoardIndex  < 64; BoardIndex++) {
    if (ctx.fillStyle === "white") {
        ctx.fillStyle = "black"
    } else {
        ctx.fillStyle = "white"
    }
    switch (BoardIndex) {
        case BoardIndex < 8:
            ctx.fillRect(100 * BoardIndex, 100 * BoardIndex, 100, 100);
            break;
        case BoardIndex < 16:
            if (ctx.fillStyle === "white") {
                ctx.fillStyle = "black"
            } else {
                ctx.fillStyle = "white"
            }       
            ctx.fillRect(100 * BoardIndex, 200 * BoardIndex, 100, 100);
            if (ctx.fillStyle === "white") {
                ctx.fillStyle = "black"
            } else {
                ctx.fillStyle = "white"
            }       
        case BoardIndex < 24:
            ctx.fillRect(100 * BoardIndex, 300 * BoardIndex, 100, 100);
            break;
        case BoardIndex < 32:
            if (ctx.fillStyle === "white") {
                ctx.fillStyle = "black"
            } else {
                ctx.fillStyle = "white"
            }       
            ctx.fillRect(100 * BoardIndex, 400 * BoardIndex, 100, 100);
            if (ctx.fillStyle === "white") {
                ctx.fillStyle = "black"
            } else {
                ctx.fillStyle = "white"
            }       
        case BoardIndex < 40:
            ctx.fillRect(100 * BoardIndex, 500 * BoardIndex, 100, 100);
            break;
        case BoardIndex < 48:
            if (ctx.fillStyle === "white") {
                ctx.fillStyle = "black"
            } else {
                ctx.fillStyle = "white"
            }       
            ctx.fillRect(100 * BoardIndex, 600 * BoardIndex, 100, 100);
            if (ctx.fillStyle === "white") {
                ctx.fillStyle = "black"
            } else {
                ctx.fillStyle = "white"
            }       
        case BoardIndex < 56:
            ctx.fillRect(100 * BoardIndex, 700 * BoardIndex, 100, 100);
            break;
        case BoardIndex < 64:
            if (ctx.fillStyle === "white") {
                ctx.fillStyle = "black"
            } else {
                ctx.fillStyle = "white"
            }       
            ctx.fillRect(100 * BoardIndex, 800 * BoardIndex, 100, 100);
            if (ctx.fillStyle === "white") {
                ctx.fillStyle = "black"
            } else {
                ctx.fillStyle = "white"
            }       
        default: console.log("Erro na formação do tabuleiro")
            break;
    }
    
}