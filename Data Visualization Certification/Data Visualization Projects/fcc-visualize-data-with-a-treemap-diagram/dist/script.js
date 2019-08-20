document.addEventListener("DOMContentLoaded", () => {
  let moviesRevenue = getMoviesRevenueData();
  moviesRevenue.
  then(response => {
    return response.json();
  }).
  then(data => {
    loadTreeMap(data);
  }).
  catch(err => {
    console.log(err);
  });
});

let getMoviesRevenueData = () => {
  return fetch(`https://cdn.rawgit.com/freeCodeCamp/testable-projects-fcc/a80ce8f9/src/data/tree_map/movie-data.json`);
};

let loadTreeMap = moviesRevenueData => {
  let svgHeight = getChartHeight();
  let svgWidth = getChartWidth();
  let padding = getChartPadding();
  let svg = loadSvg(svgHeight, svgWidth);
  let tooltip = loadTooltip();
  tooltip.attr("id", "tooltip").
  style("opacity", 0);

  let rootData = d3.hierarchy(moviesRevenueData).sum(d => d.value);
  d3.treemap().
  size([svgWidth, svgHeight]).
  padding(2)(rootData);

  svg.selectAll("rect").
  data(rootData.leaves()).
  enter().
  append("rect").
  attr("x", d => d.x0).
  attr("y", d => d.y0).
  attr("height", d => d.y1 - d.y0).
  attr("width", d => d.x1 - d.x0).
  attr("fill", d => {
    return categoryWiseColor(d.data.category);
  }).
  attr("stroke", d => "black").
  attr("class", "tile").
  attr("data-name", d => d.data.name).
  attr("data-value", d => d.data.value).
  attr("data-category", d => d.data.category).
  on("mouseover", d => {
    tooltip.attr("data-value", d.data.value).
    style("opacity", 1).
    style("left", `${d.x0 - 5}px`).
    style("top", `${d.y1 - 20}px`).
    html(`${d.data.name}<br>${d.data.category}<br>${d.data.value}`);
  }).
  on("mouseout", d => {
    tooltip.style("opacity", 0);
  }).
  attr("rx", 1);

  svg.selectAll('text').
  data(rootData.leaves()).
  enter().
  append('text').
  on("mouseover", d => {
    tooltip.attr("data-value", d.data.value).
    style("opacity", 1).
    style("left", `${d3.event.pageX + 20}px`).
    style("top", `${d3.event.pageY - 20}px`).
    html(`${d.data.name}<br>${d.data.category}<br>${d.data.value}`);
  }).
  on("mouseout", d => {
    tooltip.style("opacity", 0);
  }).
  selectAll('tspan').
  data(d => {
    return d.data.name.split(/(?=[A-Z][^A-Z])/g) // split the name of movie
    .map(v => {
      return {
        text: v,
        x0: d.x0, // keep x0 reference
        y0: d.y0 // keep y0 reference
      };
    });
  }).
  enter().
  append('tspan').
  attr("x", d => d.x0 + 5).
  attr("y", (d, i) => d.y0 + 15 + i * 10) // offset by index 
  .text(d => d.text).
  attr("font-size", "0.6em").
  attr("fill", "white");

  let legendSvg = loadSvg(200, 200);
  legendSvg.attr("id", "legend");
  const MOVIE_CATEGORIES = getAllMovieCategories();
  const MOVIE_CATEGORIES_COLOR = getCategoriesWiseColor();
  legendSvg.selectAll("rect").
  data(MOVIE_CATEGORIES_COLOR).
  enter().
  append("rect").
  attr("x", (d, i) => 40).
  attr("y", (d, i) => 20 * i).
  attr("height", (d, i) => 20).
  attr("width", (d, i) => 20).
  attr("fill", (d, i) => MOVIE_CATEGORIES_COLOR[i]).
  attr("class", "legend-item");

  legendSvg.selectAll("text").
  data(MOVIE_CATEGORIES).
  enter().
  append("text").
  attr("x", (d, i) => 70).
  attr("y", (d, i) => {
    return 20 * (i + 1) - 5;
  }).
  attr("height", (d, i) => 20).
  text((d, i) => MOVIE_CATEGORIES[i]).
  style("font-size", "0.8em");
};
let getChartHeight = () => 600;
let getChartWidth = () => 1200;
let getChartPadding = () => 30;
let loadSvg = (height, width) => {
  return d3.
  select("body").
  append("svg").
  attr("height", height).
  attr("width", width);
};
let categoryWiseColor = movieCategory => {
  const CATEGORY_WISE_COLOR = getCategoriesWiseColor();
  let resultColor = "black";
  switch (movieCategory) {
    case "Action":resultColor = CATEGORY_WISE_COLOR[0];break;
    case "Drama":resultColor = CATEGORY_WISE_COLOR[1];break;
    case "Adventure":resultColor = CATEGORY_WISE_COLOR[2];break;
    case "Family":resultColor = CATEGORY_WISE_COLOR[3];break;
    case "Animation":resultColor = CATEGORY_WISE_COLOR[4];break;
    case "Comedy":resultColor = CATEGORY_WISE_COLOR[5];break;
    case "Biography":resultColor = CATEGORY_WISE_COLOR[6];break;}

  return resultColor;
};

let loadTooltip = () => {
  return d3.select("body").
  append("div").
  style("opacity", 0).
  attr("id", "tooltip");
};

const getAllMovieCategories = () => {
  return ["Action", "Drama", "Adventure", "Family", "Animation", "Comedy", "Biography"];
};
const getCategoriesWiseColor = () => {
  return ["#DB8A00", "#8523dc", "#13AD37", "#e51a9b", "#1c6ee3", "#bb6744", "#4bc43b"];
};