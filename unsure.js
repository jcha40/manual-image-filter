d3.select("#unsure-button").on("click", function() {
    imgAssignments[imgIndex].assignment = "unsure";
    d3.select("#img-button-" + imgIndex).attr("fill", colorMap["unsure"]);
    imgIndex++;
    selectImg()
})