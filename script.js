const titleContainer = document.querySelector(".title-container")

function blinkBorder() {
    setInterval(() => {
        titleContainer.style.borderRight = "none"
    }, 500);
    setInterval(() => {
        titleContainer.style.borderRight = "1px solid #000"
    }, 1000);
}
blinkBorder()
