let playBtn = document.getElementById("playbtn");

playBtn.addEventListener('click', ()=>{
    if(playBtn.classList[2] == "fa-circle-play"){
        playBtn.classList.remove("fa-circle-play");
        playBtn.classList.add("fa-circle-pause");
    }

    else{
        playBtn.classList.remove("fa-circle-pause");
        playBtn.classList.add("fa-circle-play");
    }
});