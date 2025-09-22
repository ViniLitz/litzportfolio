const board = document.getElementById("board");
const ctx = board.getContext("2d");

for (let index = 0; index < 8; index++) {
    ctx.fillStyle = "white";
    ctx.fillRect(100 * index, 100 * index, 100, 100);
}