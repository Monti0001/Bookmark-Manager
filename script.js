// Function to log clicks on links
function logClick(site) {
    console.log(`You clicked on: ${site}`);
}

// Function to change the background color of the page
function changeBackground() {
    const colors = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = randomColor;
    console.log(`Background changed to: ${randomColor}`);
}
