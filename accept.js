d3.select("#accept-button").on("click", function() {
    imgAssignments[imgIndex].assignment = "accept";
    d3.select("#img-button-" + imgIndex).attr("fill", colorMap["accept"]);
    imgIndex++;
    selectImg()
})