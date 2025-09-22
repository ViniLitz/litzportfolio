const board = document.querySelector(".board");
const ctx = board.getContext("2d");

for (let index = 1; index < 16; index++) {
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
        default:
            break;
    }
    
}