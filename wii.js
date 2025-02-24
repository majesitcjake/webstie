const clockElement = document.getElementById( "clock" );
const everything = document.getElementByID( "everything" );
const start = document.getElementById( "start" );
const song1 = document.getElementById( "song1" );
const radiobutton = document.getElementById( "radiobutton" )

radiobutton.addEventListener("click" , event => {
    song1.audio.play
});


start.addEventListener("click" , event => {
    
    if(everything.style.opacity === "none"){
        everything.style.display = "flex"
    }
    else{
        everything.style.display = "flex";
        start.style.display = "none";
    }

});

function updateClock ( clock ) {
    clock.innerHTML = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
};

setInterval(function () {
    updateClock( clockElement );
}, 1000);





