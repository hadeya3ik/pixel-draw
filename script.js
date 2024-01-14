// init
const canvas = document.querySelector('.canvas');
const size_input = document.querySelector('input[type="number"]');
const colorPicker = document.querySelector('#colorPicker');
let pixel_w = size_input.value;
let canvas_w = 500;
let curr_col = colorPicker.value;



// changing size
const size_button = document.querySelector('.size');
size_button.addEventListener('click', () => {
    pixel_w = size_input.value;
    render_canvas();
    console.log("Size changed to: " + size_input.value);
})

// reset button
const reset_button = document.querySelector('.restart');
reset_button.addEventListener('click', () => render_canvas())

// color picker event listener
colorPicker.addEventListener('input', () => {
    curr_col = colorPicker.value;
});

// initial canvas
render_canvas();

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

// date & time 

function formatDate(date) {
    const options = { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return date.toLocaleDateString('en-US', options);
}

function updateDateTime() {
    const now = new Date();
    const dateTimeStr = formatDate(now);
    document.getElementById('date-time').textContent = dateTimeStr;
}

updateDateTime();
setInterval(updateDateTime, 60000);