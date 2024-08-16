// Select the grid container
const gridContainer = document.getElementById('grid');

// Function to create a 16x16 grid
function createGrid(size) {
  for (let i = 0; i < size * size; i++) {
    // Create a new div element
    const gridItem = document.createElement('div');
    // Add a class to the div for styling
    gridItem.classList.add('grid-item');
    // Adjust style dynamically (matters when changing the size)
    const itemSize = gridContainer.clientWidth / size;
    gridItem.style.width = `${itemSize}px`;
    gridItem.style.height = `${itemSize}px`;
    // Event listener
    gridItem.addEventListener('mouseover', function() {
        gridItem.style.backgroundColor = 'black';
      });
    // Append the div to the grid container
    gridContainer.appendChild(gridItem);
  }
}

// Create a 16x16 grid
createGrid(16);

const button = document.querySelector("#gridReset");
button.addEventListener("click", () => {
    // Receive new size
    var inp = prompt("Choose the size of the new grid! (max 100)");
    var inp = parseInt(inp);
    while (inp < 0 || inp > 100) {
        var inp = prompt("Choose the size of the new grid! (max 100)");
        var inp = parseInt(inp);
    }   
    
    // Empty the grid
    document.getElementById("grid").innerHTML = "";

    //Create a new grid
    createGrid(inp);
})
