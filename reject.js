d3.select("#reject-button").on("click", function() {
    imgAssignments[imgIndex].assignment = "reject";
    d3.select("#img-button-" + imgIndex).attr("fill", colorMap["reject"]);
    imgIndex++;
    selectImg()
})