// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

var gridWidth = 1, gridHeight = 1; // 1x1 grid to start out with. Don't want undefined.

function makeGrid() {
  // Your code goes here
   var pixelCanvas = $("#pixelCanvas"); // Get pixel canvas
   var cellID;
    console.log(`grid width: ${gridWidth}`);
    console.log(`grid height: ${gridHeight}`);

    for (var row = 0; row < gridHeight; row++) {
        pixelCanvas.append("<tr>");

        for (var column = 0; column < gridWidth; column++) {
          cellID = "cell" + row + column; // Set up cell ID for each cell
            pixelCanvas.append(`<td width='20px' cellspacing='0' id='${cellID}' height='20px'></td>`);
            pixelCanvas.append('<script>' + '$(\"#' + cellID + '\").click(function(e) {' +
              '$(this).css(\"background\", $(\"#colorPicker\").val());' +
            '});</script>');
        }

        pixelCanvas.append("</tr>");
    }
}

$("#inputWeight").keyup(function () {
  gridWidth = $(this).val();
});

$("#inputHeight").keyup(function () {
  gridHeight = $(this).val();
});

$("#sizePicker").submit(function(e) {
    makeGrid();
    e.preventDefault(); // Don't let the form refresh
});
