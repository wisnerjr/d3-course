/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/

d3.json("data/buildings.json").then(data => {
  data.forEach(d => {
    d.height = +d.height;
    // console.log(d);
  });

  var svg = d3.select("#chart-area")
    .append("svg")
      .attr("width", 500)
      .attr("height", 500);

  var bars = svg.selectAll("rect")
    .data(data);

    bars.enter().append("rect")
    .attr("x", (d, i) => { return 70 * i; })
    .attr("y", 0)
    .attr("width", 50)
    .attr("height", (d) => { return d.height })
    .attr("fill", "grey");
  
}).catch(error => {
  console.log(error);
});