const addTarefa = document.querySelector("#addTarefa");
const btn = document.querySelector("#btn");
const lista = document.querySelector("#lista");

btn.addEventListener("click", function(){

    if (addTarefa.value == ""){
        alert("Coloque uma tarefa válida")
    } else {
        lista.innerHTML += `<li><i class="fa-solid fa-square-check check"></i><span>${addTarefa.value}</span><i class="fa-solid fa-trash close"></i></li>`
    }
    addTarefa.value = "";

    const close = document.querySelectorAll(".close");
    for (let i = 0; i < close.length; i++) {
        close[i].addEventListener("click", function () {
            close[i].parentElement.remove();
        });
        
    }

    lista.addEventListener("click", function (e) {
        e.target.parentElement.querySelector(".check").style.color = "#a6bbe0";
        e.target.parentElement.querySelector("span").style.textDecoration = "line-through";
    })

})
