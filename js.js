let zastor = document.getElementById("poklopac");
setTimeout(()=>{
    zastor.style.transform ="translateY(-3000px)"}
    ,1000)
    

let dropdown = document.getElementById("dropdown")
function dropdown_toggle(e) {
    if (e) {
        dropdown.classList.add("show")
    }
    else {
        dropdown.classList.remove("show")
    }
}


// nav skrollanje
function skrolaj(ime){
    let el = document.getElementById(ime);
    el.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

