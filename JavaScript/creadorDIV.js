let boton=document.getElementById("boton");
boton.addEventListener("click",function(event){
    event.preventDefault();

    let nuevoid=document.createElement("div");
    nuevoid.innerHTML="Boton Creado";
    nuevoid.classList.add("borde-negro");
    let contenido=document.getElementById("resultadodiv");
    contenido.appendChild(nuevoid)

    
})