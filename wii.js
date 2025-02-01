const clockElement = document.getElementById( "clock" );
const everything = document.getElementsByID( "everything" );
const start = document. getElementById( "start" );

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
}

setInterval(function () {
    updateClock( clockElement );
}, 1000);
