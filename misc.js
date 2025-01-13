let imgAssignments = [],
    imgIndex = 0;
const colorMap = {
    unsure: "#D3D3D3",
    accept: "#228B22",
    reject: "#EE4B2B"
};

const selectImg = function() {
    d3.select("#img").attr("src", imgAssignments[imgIndex].img);
    d3.select("#button-row").selectAll("rect").data(imgAssignments).join("rect")
        .attr("stroke", d => d.idx === imgIndex ? "black" : "none");
    document.getElementById("img-button-" + imgIndex).scrollIntoView();
}