// init
const canvas = document.querySelector('.canvas');
const size_input = document.querySelector('input');
let pixel_w = size_input.value;
let canvas_w = 700;

// changing size
const size_button = document.querySelector('.size');
size_button.addEventListener('click', () => { pixel_w = size_input.value; render_canvas(); console.log("size changed to: " +  size_input.value)})

// reset button
const reset_button = document.querySelector('.restart');
reset_button.addEventListener('click', () => render_canvas())

// initial canvas
render_canvas();

// color 
let curr_col = "gray";

// map
const colorPairs = [
    { class: 'a', color: 'lightblue' },
    { class: 'b', color: 'lavender' },
    { class: 'c', color: 'lightgoldenrodyellow' },
    { class: 'd', color: 'pink' },
    { class: 'e', color: 'peachpuff' },
    { class: 'f', color: 'darkseagreen' },
    { class: 'g', color: 'gray' },
    { class: 'h', color: 'white' },
];

// adding event listeners
colorPairs.forEach(pair => {
    const col = document.querySelector(`.${pair.class}`);
    col.style.backgroundColor = pair.color;
    col.addEventListener('click', () => {
        curr_col = pair.color;
        update_color_bar();
    });
});

// update canvas
function render_canvas() {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
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
            pixel.addEventListener('click', () => pixel.style.backgroundColor=curr_col);

            pixel.addEventListener('mousedown', () => {
                if (event.buttons === 1) {
                  pixel.style.backgroundColor = curr_col;
                }
              });
        
              pixel.addEventListener('mouseenter', () => {
                if (event.buttons === 1) {
                  pixel.style.backgroundColor = curr_col;
                }
              });
        }
    }
}
  
function update_color_bar() {
    console.log(curr_col);
    colorPairs.forEach(pair => {
        const col = document.querySelector(`.${pair.class}`);
        col.style.border = "1px solid black";
        if (curr_col === pair.color) {
            col.style.border = "3px solid black";
        }
    });
}
