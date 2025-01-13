const parseImgList = function(data) {
    const lines = data.trim().split("\n");

    return lines.map(function(line, i) {
        const fields = line.split("\t");
        return {
            idx: parseInt(i),
            img: fields[0],
            assignment: fields[1] || "unsure"
        }
    })
};

d3.select("#upload-button").on("click", function() {
    d3.select("#upload-file").node().click()
});

d3.select("#upload-file").on("change", async function() {
    await new Promise(function(resolve, reject) {
        const file = d3.select("#upload-file").node().files[0],
            reader = new FileReader();
        
        reader.onload = function() {
            imgAssignments = parseImgList(reader.result);

            const buttonRow = d3.select("#button-row"),
                svgs = buttonRow.selectAll("div").data(imgAssignments).join("div")
                    .style("display", "inline-block")
                    .style("padding-right", "5px")
                    .selectAll("svg").data(d => [d]).join("svg")
                        .attr("baseProfile", "full")
                        .attr("version", "1.1")
                        .attr("xmlns", "http://www.w3.org/2000/svg")
                        .attr("viewBox", "0 0 40 18")
                        .attr("width", "40px")
                        .attr("height", "18px")
                        .attr("cursor", "pointer")
                        .on("click", function(ev, d) {
                            imgIndex = d.idx;
                            d3.select("#img").attr("src", d.img);
                            selectImg()
                        });
            svgs.selectAll("rect").data(d => [d]).join("rect")
                .attr("id", d => "img-button-" + d.idx)
                .attr("x", 0)
                .attr("y", 0)
                .attr("width", 40)
                .attr("height", 18)
                .attr("rx", 3)
                .attr("stroke", "none")
                .attr("stroke-width", 3)
                .attr("fill", d => colorMap[d.assignment]);
            svgs.selectAll("text").data(d => [d]).join("text")
                .attr("x", 20)
                .attr("y", 12)
                .attr("text-anchor", "middle")
                .attr("font-size", "10px")
                .attr("fill", "black")
                .text(d => d.idx + 1);
            resolve()
        };

        reader.onerror = function() {
            alert("Unable to read " + file.fileName);
            reject()
        };

        reader.readAsText(file)
    });
    
    imgIndex = 0;
    selectImg()
});

