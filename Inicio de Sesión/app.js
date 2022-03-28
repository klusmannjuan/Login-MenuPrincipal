
const inicio_btn = document.querySelector("#inicio-btn");
const registro_btn = document.querySelector("#registro-btn");
const container = document.querySelector(".container");

registro_btn.addEventListener('click', () => {
    container.classList.add("registro-mode");
});

inicio_btn.addEventListener('click', () => {
    container.classList.remove("registro-mode");
});


