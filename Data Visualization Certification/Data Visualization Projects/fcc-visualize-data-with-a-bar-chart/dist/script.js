var svgWidth = 1000;
var svgHeight = 400;
var padding = 30;


//currying the function
let xScale = dataset => {
  return d3.scaleTime().
  domain([d3.min(dataset, d => new Date(d[0])), d3.max(dataset, d => new Date(d[0]))]).
  range([padding, svgWidth - padding - 10]);
};
//currying the function
let yScale = dataset => {
  return d3.scaleLinear().
  domain([0, d3.max(dataset, d => d[1])]).
  range([svgHeight - padding, padding]);
};
let tooltip = d3.select(".chart").
append("div").
attr("id", "tooltip");

document.addEventListener("DOMContentLoaded", () => {
  getGDPData();
});
let getGDPData = () => {
  const ajaxRequest = new XMLHttpRequest();
  ajaxRequest.open("GET", "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json", true);
  ajaxRequest.send();
  ajaxRequest.onload = () => {
    responseData = ajaxRequest.responseText;
    let responsDataJSON = JSON.parse(responseData);
    let responseDataset = responsDataJSON.data;

    loadGraph(responseDataset);
  };
};
let loadGraph = gdpDataset => {
  let svg = d3.select("body").
  append("svg").
  attr("width", svgWidth).
  attr("height", svgHeight);

  let rectInSvg = svg.selectAll("rect").
  data(gdpDataset).
  enter().
  append("rect").
  attr("x", (d, i) => padding + xScale(gdpDataset)(new Date(d[0]))).
  attr("y", (d, i) => yScale(gdpDataset)(d[1])).
  attr("width", svgWidth / gdpDataset.length).
  attr("height", (d, i) => svgHeight - padding - yScale(gdpDataset)(d[1])).
  attr("fill", "#36ACFA").
  attr("class", "bar").
  attr("data-date", d => d[0]).
  attr("data-gdp", d => d[1]).
  on('mouseover', (d, i) => {
    tooltip.transition().
    duration(200).
    style('opacity', .9);
    tooltip.html(`${d[1]} Billion`).
    attr('data-date', d[0]).
    style("color", "red");
  }).
  on('mouseout', (d, i) => {
    tooltip.transition().
    duration(200).
    style('opacity', 0);
  }).
  append("title").
  text(d => `$ ${d[1]} Billion \n ${d[0]}`);

  const xAxis = d3.axisBottom(xScale(gdpDataset)).tickFormat(d3.timeFormat("%Y"));;
  svg.append("g").
  attr("id", "x-axis").
  attr("transform", `translate(${padding}, ${svgHeight - padding})`).
  call(xAxis);

  const yAxis = d3.axisLeft(yScale(gdpDataset));
  svg.append("g").
  attr("id", "y-axis").
  attr("transform", `translate(${2 * padding},0)`).
  call(yAxis);
};