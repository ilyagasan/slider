const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const items = document.querySelector("#items");

let currentRight = 0;


rightBtn.addEventListener("click", e =>{
    e.preventDefault();//отвенили сыллку как ссылку
    
    currentRight += 100;

    items.style.right = `${currentRight}px`;
    
})