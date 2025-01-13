d3.select("#save-button").on("click", function() {
    const text = imgAssignments.map(d => d.img + "\t" + d.assignment).join("\n"),
        a = document.createElement("a"),
        e = new MouseEvent("click");
    a.download = "img_table.tsv";
    a.href = "data:text/plain;charset=utf-8," + encodeURIComponent(text);
    a.dispatchEvent(e)
})