const mobHeader = document.querySelector(".header-mobile")
const previousTouch = { y: 0, x: 0 }

const handleTouchMove = (event) => {
    const touch = event.touches[0]
    const deltaY = touch.clientY - previousTouch.y
    if (deltaY < -50) {
        mobHeader.classList.add("hide-header-mobile")
        mobHeader.classList.remove("show-header-mobile")

    }
    if (deltaY > 0) {
        mobHeader.classList.add("show-header-mobile")
        mobHeader.classList.remove("hide-header-mobile")
    }
}

const handleTouchStart = (event) => {
    const touch = event.touches[0]
    previousTouch.x = touch.clientX
    previousTouch.y = touch.clientY
}

document.addEventListener("touchstart", e => handleTouchStart(e))
document.addEventListener("touchmove", e => handleTouchMove(e))
