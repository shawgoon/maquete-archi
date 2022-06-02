const map = document.getElementById("map");
let defil;
window.addEventListener(
    "scroll",
    function(){
        
        defil = document.scrollTop | document.scrollingElement.scrollTop | window.scrollY
        
        // comment détecter le "bas de page" avec l'event scroll
        if(defil+document.documentElement.clientHeight >= document.body.offsetHeight - 50){
                console.log("tu es en bas de page");
                // alert("vous êtes en bas de page");
                map.style.opacity = 1;
                map.style.left = 0;
            }
    }
);


