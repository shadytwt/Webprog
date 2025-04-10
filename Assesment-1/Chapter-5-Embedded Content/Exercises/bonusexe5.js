const clips = [
    "ah-ha", "back-of-the-net", "bangoutoforder", "dan",
    "emailoftheevening", "hellopartridge", "iateascotchegg", "imconfused",
    "jurassicpark", "funnystory", "handfull", "goal",
];

let page = 1;
const perPage = 9;

function playSound(name) {
    new Audio(`Audio/${name}.mp3`).play();
}

function showClips() {
    const samples = document.getElementById("samples");
    samples.innerHTML = "";

    const currentClips = clips.slice((page - 1) * perPage, page * perPage);

    const grid = document.createElement("div");
    grid.className = "grid";
    
    currentClips.forEach(name => {
        const btn = document.createElement("button");
        btn.textContent = name;
        btn.onclick = () => playSound(name);

        const audio = new Audio(`Audio/${name}.mp3`);
        audio.onloadedmetadata = () => {
            const length = document.createElement("p");
            length.textContent = `Length: ${audio.duration.toFixed(2)} sec`;
            btn.appendChild(length);
        };

        grid.appendChild(btn);
    });

    samples.appendChild(grid);

    document.getElementById("prev").style.display = page === 1 ? "none" : "inline-block";
    document.getElementById("next").style.display = page * perPage >= clips.length ? "none" : "inline-block";
}

function changePage(offset) {
    page += offset;
    showClips();
}

function textToSpeech() {
    speechSynthesis.speak(new SpeechSynthesisUtterance(document.getElementById("ttsInput").value));
}

document.getElementById("prev").onclick = () => changePage(-1);
document.getElementById("next").onclick = () => changePage(1);

showClips();
