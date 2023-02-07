const repositorios = document.querySelector(".repositorios-container")
const reposSetaR = document.querySelector(".repos-seta--right")
const reposSetaL = document.querySelector(".repos-seta--left")
const repoScrollDirection = document.querySelector(".repo-scroll--direction")
reposSetaL.style.animation = "none"
reposSetaL.style.color = "darkgray"

const projetos = document.querySelector(".projetos-container")
const projSetaR = document.querySelector(".proj-seta--right")
const projSetaL = document.querySelector(".proj-seta--left")
const projScrollDirection = document.querySelector(".proj-scroll--direction")
projSetaL.style.animation = "none"
projSetaL.style.color = "darkgray"

repositorios.onscroll = function () {
    if (this.scrollLeft === 0) {
        reposSetaR.style.animation = "moveToRight 2s ease-in-out infinite"
        reposSetaR.style.color = "#000"
        reposSetaL.style.animation = "none"
        reposSetaL.style.color = "darkgray"
        repoScrollDirection.innerHTML = "right"
    }
    if (this.scrollLeft + this.clientWidth >= this.scrollWidth) {
        reposSetaL.style.animation = "moveToLeft 2s ease-in-out infinite"
        reposSetaL.style.color = "#000"
        reposSetaR.style.animation = "none"
        reposSetaR.style.color = "darkgray"
        repoScrollDirection.innerHTML = "left"
    }
};

projetos.onscroll = function () {
    if (this.scrollLeft === 0) {
        projSetaR.style.animation = "moveToRight 2s ease-in-out infinite"
        projSetaR.style.color = "#000"
        projSetaL.style.animation = "none"
        projScrollDirection.innerHTML = "right"
        projSetaL.style.color = "darkgray"
    }
    if (this.scrollLeft + this.clientWidth >= this.scrollWidth) {
        projSetaL.style.animation = "moveToLeft 2s ease-in-out infinite"
        projSetaL.style.color = "#000"
        projScrollDirection.innerHTML = "left"
        projSetaR.style.animation = "none"
        projSetaR.style.color = "darkgray"
    }
};