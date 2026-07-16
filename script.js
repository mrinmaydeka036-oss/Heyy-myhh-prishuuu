const home = document.getElementById("home");
const letterPage = document.getElementById("letterPage");
const questionPage = document.getElementById("questionPage");
const videoPage = document.getElementById("videoPage");
const finalPage = document.getElementById("finalPage");

const envelope = document.getElementById("envelope");
const flap = document.querySelector(".flap");
const letter = document.querySelector(".letter");

const music = document.getElementById("music");
const typing = document.getElementById("typing");
const next = document.getElementById("next");
const yes = document.getElementById("yes");
const video = document.getElementById("video");

 const message =` My Love ❤️

If you're reading this...

Then destiny finally brought us together.

Every heartbeat...

Every prayer...

Every dream...

was slowly leading me to you.

You are my happiness.

You are my peace.

You are my forever.

I promise to love you,
protect you,
care for you,
and never leave your hand.

❤️ Forever Yours ❤️ ` ;

let index = 0;

envelope.addEventListener("click", () => {

    flap.style.transform = "rotateX(180deg)";
    letter.style.transform = "translate(-50%,-135%)";

    music.currentTime = 0;
    music.play().catch(()=>{});

    setTimeout(() => {

        home.classList.remove("active");
        letterPage.classList.add("active");

        typing.innerHTML = "";
        index = 0 ;

        typeLetter();

    },1800);

});

function typeLetter(){

    if(index < message.length){

        typing.innerHTML += message.charAt(index);
        typing.scrollTop = typing.scrollHeight;

        index++;

        setTimeout(typeLetter,40);

    }else{

        music.pause();
        music.currentTime = 0;

        next.style.display = "block";

    }

}
next.addEventListener("click", () => {

    letterPage.classList.remove("active");

    questionPage.classList.add("active");

});

yes.addEventListener("click", () => {

    questionPage.classList.remove("active");

    videoPage.classList.add("active");

    video.currentTime = 0;

    video.muted = false;

    const playPromise = video.play();

    if(playPromise !== undefined){

        playPromise.catch(() => {

            video.muted = true;

            video.play();

        });

    }

});

video.addEventListener("ended", () => {

    videoPage.classList.remove("active");

    finalPage.classList.add("active");

});
