
let canvas = document.querySelector('.canvas');
let canvas_w = 700;
let pixel_w = 16;

// initial canvas
for (let i = 0; i < pixel_w; i++) {
    let row = document.createElement('div');
    row.style.cssText = `width: ${canvas_w}px; height: ${canvas_w / pixel_w}px;
    flex: 1; display: flex; border: 0px solid red; margin: 0.px;`;
    canvas.appendChild(row);

    for (let j = 0; j < pixel_w; j++) {
        let pixel = document.createElement('div');
        pixel.style.cssText = `width: ${canvas_w / pixel_w}px; height: ${canvas_w / pixel_w}px;
        border: 0.5px solid black; flex: 1; margin: 0px;`;
        row.appendChild(pixel);
        pixel.addEventListener('click', () => pixel.style.backgroundColor="red");
    }

}

