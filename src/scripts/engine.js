
//select class piano keys
const pianoKeys = document.querySelectorAll(".piano-keys .key");

//const Volume Control
const volumeSlider = document.querySelector(".volume-slider input")

//const hide keys
const keysCheck = document.querySelector(".keys-check input");

//Tone folder
let audio = new Audio("/src/tunes/a.wav");

//saves the keys that exist on the piano
let mapedKeys = [];

//play tunne 
const playTune = (key) =>{
    audio.src = `/src/tunes/${key}.wav`
    audio.play();
    //select letters from the keyboard and add style keys
    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    //add class active
    clickedKey.classList.add("active");
    //remove class active after 1500ms
    setTimeout(()=> {
        clickedKey.classList.remove("active");
    },1500)
}

// Select keys values 
pianoKeys.forEach((key) => {
    console.log(key.dataset.key)
    key.addEventListener("click",()=> playTune(key.dataset.key) )
    mapedKeys.push(key.dataset.key);
});
//select letters from the keyboard
document.addEventListener("keydown",(e) =>{
    if(mapedKeys.includes(e.key)){
        playTune(e.key);
    }
    
});
//Volume Control
const handleVolume = (e) => {
    audio.volume = e.target.value;
}
volumeSlider.addEventListener("input",handleVolume);
// Hide keys keyboard
const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

keysCheck.addEventListener("click" , showHideKeys);
