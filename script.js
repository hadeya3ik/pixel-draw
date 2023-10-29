
const canvas = document.querySelector('.canvas');
let canvas_w = 700;

const size_input = document.querySelector('input');
let pixel_w = size_input.value;

// changing size
const size_button = document.querySelector('.size');
size_button.addEventListener('click', () => { pixel_w = size_input.value; create_canvas(); console.log("size changed to: " +  size_input.value)})

// reset button
const reset_button = document.querySelector('.restart');
reset_button.addEventListener('click', () => create_canvas())

// initial canvas
create_canvas();

// color 
let curr_col = "gray";

function create_canvas() {
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
        }
    }
}


let col_a = document.querySelector('.a');
col_a.style.backgroundColor="lightblue";
col_a.addEventListener('click', () => {curr_col="lightblue"; update_color_bar()});

let col_b = document.querySelector('.b');
col_b.style.backgroundColor="lavender";
col_b.addEventListener('click', () => {curr_col="lavender"; update_color_bar()});


let col_c = document.querySelector('.c');
col_c.style.backgroundColor="lightgoldenrodyellow";
col_c.addEventListener('click', () => {curr_col="lightgoldenrodyellow"; update_color_bar()});

let col_d = document.querySelector('.d');
col_d.style.backgroundColor="pink";
col_d.addEventListener('click', () => {curr_col="pink"; update_color_bar()});


let col_e = document.querySelector('.e');
col_e.style.backgroundColor="peachpuff";
col_e.addEventListener('click', () => {curr_col="peachpuff"; update_color_bar()});

let col_f = document.querySelector('.f');
col_f.style.backgroundColor="darkseagreen";
col_f.addEventListener('click', () => {curr_col="darkseagreen"; update_color_bar()});

let col_g = document.querySelector('.g');
col_g.style.backgroundColor="gray";
col_g.addEventListener('click', () => {curr_col="gray"; update_color_bar()});


let col_h = document.querySelector('.h');
col_h.style.backgroundColor="white";
col_h.addEventListener('click', () => {curr_col="white"; update_color_bar()});


function update_color_bar() {
    console.log(curr_col);
    col_a.style.border = "1px solid black";
    col_b.style.border = "1px solid black";
    col_c.style.border = "1px solid black";
    col_d.style.border = "1px solid black";
    col_e.style.border = "1px solid black";
    col_f.style.border = "1px solid black";
    col_g.style.border = "1px solid black";
    col_h.style.border = "1px solid black";
    switch (curr_col) { 
        case ("lightblue") : col_a.style.border= ("3px solid black"); return; 
        case ("lavender") : col_b.style.border=("3px solid black"); return; 
        case ("lightgoldenrodyellow") : col_c.style.border = ("3px solid black"); return; 
        case ("pink") : col_d.style.border = ("3px solid black"); return; 
        case ("peachpuff") : col_e.style.border = ("3px solid black"); return; 
        case ("darkseagreen") : col_f.style.border = ("3px solid black"); return; 
        case ("gray") : col_g.style.border = ("3px solid black"); return; 
        case ("white") : col_h.style.border = ("3px solid black"); return; 
    }
}