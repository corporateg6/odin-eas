const div = document.querySelector("#container");

for (let i=0; i<16; i++) {
    const div2 = document.createElement("div");
    const id = String.fromCharCode(i+97);
    div2.setAttribute("id", id);
    for (let j=0; j<16; j++) {
        const div2child = document.createElement("div");
        div2child.setAttribute("id", j);
        div2child.addEventListener("mouseenter", (e) => e.target.classList.add("activate"));
        div2.appendChild(div2child);
    }
    div.appendChild(div2);
}