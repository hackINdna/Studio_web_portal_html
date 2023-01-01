let threeDot = document.getElementById("three-dot");

threeDot.addEventListener('click', ()=>{
    let shortlistOption = document.getElementById("shortlist-option");
    if(shortlistOption.style.display == "none"){
        shortlistOption.style.display = "flex";
    }
    else {
        shortlistOption.style.display = "none";
    }
});