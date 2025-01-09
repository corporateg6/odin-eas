const div = document.querySelector("#container");

const canvasSize = 512;
const defaultResolution = 16;

function randomRGB() {
    return Math.floor(Math.random()*256);
}

function generateCanvas(resolution) {
    const padSize = canvasSize / (resolution * 2);
    const pad = padSize + "px";
    for (let i=0; i<resolution; i++) {
        const div2 = document.createElement("div");
        const id = String.fromCharCode(i+97);
        div2.setAttribute("id", id);
        for (let j=0; j<resolution; j++) {
            const div2child = document.createElement("div");
            div2child.setAttribute("id", j);
            div2child.style.padding = pad;
            div2child.style.opacity = 0;
            div2child.addEventListener("mouseenter", (e) => {
                e.target.style.backgroundColor = "rgb(" + randomRGB() + ", " + randomRGB() + ", " + randomRGB() + ")";
                const o = Number(e.target.style.opacity);
                if (o < 1) e.target.style.opacity = o + 0.1;
            });
            div2.appendChild(div2child);
        }
        div.appendChild(div2);
    }
}


function removeCanvas() {
    container = document.querySelector("#container");
    container.textContent = '';
}

generateCanvas(defaultResolution);

btn = document.querySelector("#reset");
btn.addEventListener("click", () => {
    let newRes;
    while (!newRes || newRes < 16 || newRes > 100) {
        newRes = Number(prompt('Enter a new canvas resolution, from 16 to 100'));
    }
    removeCanvas();
    generateCanvas(Number(newRes));
});
