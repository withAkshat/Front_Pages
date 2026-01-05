
let view = document.querySelector(".view");
const contextMenu = document.querySelector(".context-menu");
let root = document.documentElement;

view.addEventListener("mousemove",(e)=>{
    // console.log(e.clientX);
    
})

window.oncontextmenu = function (e){

    if(e.clientY >= 475 && e.clientX >=1310){
        root.style.setProperty("--mouseX",`1311px`);
        root.style.setProperty("--mouseY",`480px`);
    }
    else if(e.clientY >= 475){
        
        root.style.setProperty("--mouseX",`${e.clientX}px`);
        root.style.setProperty("--mouseY",`480px`);

    }else if(e.clientX >1310){
        root.style.setProperty("--mouseX",`1311px`);
        root.style.setProperty("--mouseY",`${e.clientY}px`);

    }

    else{
        root.style.setProperty("--mouseX",`${e.clientX}px`);
        root.style.setProperty("--mouseY",`${e.clientY}px`);
    }

    e.preventDefault();
    contextMenu.style.display = "flex";

    console.log(e.clientX);
    
}

view.addEventListener("click", (e)=>{
    contextMenu.style.display= "none";
})


