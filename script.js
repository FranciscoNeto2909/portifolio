const repositorios = document.querySelector(".repositorios-container")
const reposSetaR = document.querySelector(".repos-seta--right")
const reposSetaL = document.querySelector(".repos-seta--left")
reposSetaL.style.animation = "none"
reposSetaL.style.color = "darkgray"

const projetos = document.querySelector(".projetos-container")
const projSetaR = document.querySelector(".proj-seta--right")
const projSetaL = document.querySelector(".proj-seta--left")
projSetaL.style.animation = "none"
projSetaL.style.color = "darkgray"

repositorios.onscroll = function () {
    if (this.scrollLeft === 0) {
        reposSetaR.style.animation = "moveToLeft 2s ease-in-out infinite"
        reposSetaR.style.color = "#000"
        reposSetaL.style.animation = "none"
        reposSetaL.style.color = "darkgray"
    }
    if (this.scrollLeft == 1829) {
        reposSetaL.style.animation = "moveToLeft 2s ease-in-out infinite"
        reposSetaL.style.color = "#000"
        reposSetaR.style.animation = "none"
        reposSetaR.style.color = "darkgray"
    }
};

projetos.onscroll = function () {
    if (this.scrollLeft === 0) {
        projSetaR.style.animation = "moveToLeft 2s ease-in-out infinite"
        projSetaR.style.color = "#000"
        projSetaL.style.animation = "none"
        projSetaL.style.color = "darkgray"
    }
    if (this.scrollLeft == 1829) {
        projSetaL.style.animation = "moveToLeft 2s ease-in-out infinite"
        projSetaL.style.color = "#000"
        projSetaR.style.animation = "none"
        projSetaR.style.color = "darkgray"
    }
};