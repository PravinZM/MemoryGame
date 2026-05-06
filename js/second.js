let moves = 0;

document.addEventListener("click", function(e) {
    if (e.target.closest(".card")) {
        moves++;
        console.log("Moves:", moves);
    }
});