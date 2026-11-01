let img1= document.getElementById("world-of-warcraft");
let img2= document.getElementById("league");
let img3= document.getElementById("fortnite");
let img4= document.getElementById("minecraft");
let img5= document.getElementById("counter-strike");
let img6= document.getElementById("gta");
let img7= document.getElementById("final-fantasy");
let img8= document.getElementById("roblox");


/*----Ajout du trailer-----*/
function Trailing(img, videoSrc) {
    img.addEventListener("mouseover", function() {
        let video = document.createElement("video");   
        video.src = videoSrc;
        video.autoplay = true;
        video.loop = true;
        video.muted = true; 
        video.controls = true;
        video.classList.add("video-carte");
        img.parentNode.replaceChild(video, img);

        video.addEventListener("mouseout", function() {
            video.parentNode.replaceChild(img, video);
        });
    })
}

Trailing(img1, "Media/VideoAct/world.mp4");
Trailing(img2, "Media/VideoAct/league.mp4");
Trailing(img3, "Media/VideoAct/fortnite.mp4");
Trailing(img4, "Media/VideoAct/minecraft.mp4");
Trailing(img5, "Media/VideoAct/counter-strike.mp4");
Trailing(img6, "Media/VideoAct/gta.mp4");
Trailing(img7, "Media/VideoAct/final-fantasy.mp4");
Trailing(img8, "Media/VideoAct/roblox.mp4");

/*-----Recherche par nom-----*/
const recherche = document.getElementById("rech");

recherche.addEventListener("input", function () {
        const RechercheTerm = recherche.value.toLowerCase();
        const cards = document.getElementsByClassName("carte");

        for (let i = 0; i < cards.length; i++) {
            const card = cards[i];
            const cardTitle = card.getElementsByClassName("titre")[0].textContent.toLowerCase();

            if (cardTitle.includes(RechercheTerm)) {
                card.style.display = "";
            } 
            else {
                card.style.display = "none";
            }
        }
    });


/*----Filtrage par genre-----*/
const selectGenre = document.getElementById("genre");

function filterByGenre(genre) {
    const cards = document.getElementsByClassName("carte");

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const cardGenre = card.getElementsByClassName("genre")[0].textContent;

        if (genre == "Tous les genres" || cardGenre.includes(genre)) {
            card.style.display = "";        
        } else {
            card.style.display = "none";
        }
    }
}


selectGenre.addEventListener("change", function () {
    filterByGenre(selectGenre.value);
});


/*----Filtrage par plateforme-----*/
const selectPlatform = document.getElementById("platform"); 








