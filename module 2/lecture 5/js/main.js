/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.5 - Activity: Adding SVGs to the screen
*/

var svg = d3.select("#chart-area")
    .append("svg")
      .attr("width", 500)
      .attr("height", 400);

var rect = svg.append("rect")
    .attr("x", 50)
    .attr("y", 50)
    .attr("width", 50)
    .attr("height", 50)
    .attr("fill", "blue");

var line = svg.append("line")
    .attr("x1", 150)
    .attr("y1", 50)
    .attr("x2", 200)
    .attr("y2", 110)
    .style("stroke", "red");

var ellipse = svg.append('ellipse')
  .attr('cx', 220)
  .attr('cy', 220)
  .attr('rx', 15)
  .attr('ry', 45)
  .attr("fill", "green");