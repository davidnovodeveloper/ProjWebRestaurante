export function loadPage(_h1, _p, _img) {
    const content = document.querySelector("div");

    content.innerHTML = "";
    
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const img = document.createElement("img");

    h1.textContent = _h1;
    p.textContent = _p;
    img.src = _img;

    content.append(h1, p, img);
}