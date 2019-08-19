/** 
*  @author Anuj Yadav <yadav.anuj.1996@gmail.com>
*/
/*
   *  This event listener will run on DOM loading and will call the getCyclistsData.
   *  @listens DOMContentLoaded
   */
document.addEventListener("DOMContentLoaded", () => {
  let usCountyDataPromise = fetch("https://raw.githubusercontent.com/no-stack-dub-sack/testable-projects-fcc/master/src/data/choropleth_map/counties.json");
  let educationDataPromise = fetch('https://raw.githubusercontent.com/no-stack-dub-sack/testable-projects-fcc/master/src/data/choropleth_map/for_user_education.json');
  Promise.all([usCountyDataPromise, educationDataPromise]).
  then(responses => Promise.all([responses[0].text(), responses[1].text()])).
  then(data => {
    loadMap(data[0], data[1]);
  });
});

let loadMap = (countyDetails, educationDetails) => {
  const countyData = JSON.parse(countyDetails);
  const educationData = JSON.parse(educationDetails);

  const svgHeight = getChartHeight();
  const svgWidth = getChartWidth();
  const padding = getChartPadding();
  let svg = loadSvg(svgHeight, svgWidth);
  let path = d3.geoPath();
  let tooltip = loadTooltip();
  svg.append("g").
  attr("class", "counties").
  selectAll("path").
  data(topojson.feature(countyData, countyData.objects.counties).features).
  enter().
  append("path").
  attr("class", "county").
  attr("data-fips", d => d.id).
  attr("data-education", d => getPercentOfDegreeHolders(d.id, educationData)).
  attr("fill", d => {
    let degreeHoldersPercent = getPercentOfDegreeHolders(d.id, educationData);
    return getCountyFillColor(degreeHoldersPercent);
  }).
  attr("d", path).
  on("mouseover", d => {
    tooltip.attr("data-education", () => getPercentOfDegreeHolders(d.id, educationData)).
    style("opacity", 1).
    style("left", `${d3.event.pageX + 10}px`).
    style("top", `${d3.event.pageY - 25}px`).
    html(getToolTipCountyEducationDetails(d.id, educationData));
  }).
  on("mouseout", d => {
    tooltip.style("opacity", 0);
  });

  let legendSvg = loadSvg(50, 200).attr("id", "legend");
  legendSvg = addLegendProperties(legendSvg);
  legendSvg.attr("transform", "translate(10px,10px)");

  let axisSvg = loadSvg(50, 200).attr("id", "axisSvg");
  var customScale = d3.scaleLinear().
  domain([0, 3, 12, 21, 30, 39, 48, 57, 66, 100]).
  range([0.7, 1.5, 20, 40, 60, 80, 100, 120, 140, 160]);

  let xAxis = d3.axisBottom().scale(customScale).
  tickValues([3, 12, 21, 30, 39, 48, 57, 66, 100]).
  tickSize(8);
  axisSvg.attr("transform", `translate(0,0)`).
  call(xAxis);

};

/** Return chart height.*/
const getChartHeight = () => 600;
/** Return chart width.*/
const getChartWidth = () => 950;
/** Return chart padding.*/
const getChartPadding = () => 100;
let loadSvg = (height, width) => {
  return d3.select("body").
  append("svg").
  attr("height", height).
  attr("width", width);
};
let loadTooltip = () => {
  return d3.select("body").
  append("div").
  style("opacity", 0).
  attr("id", "tooltip");
};
let getPercentOfDegreeHolders = (elementToSearch, ArraryForSearch) => {
  let countyEducationDetails = getCountyEducationDetails(elementToSearch, ArraryForSearch);
  return countyEducationDetails.bachelorsOrHigher;
};
let getCountyEducationDetails = (elementToSearch, ArraryForSearch) => {
  let countyEducationData = ArraryForSearch.filter(element => {
    if (element.fips == elementToSearch)
    return element;
  });
  return countyEducationData[0];
};
let getToolTipCountyEducationDetails = (elementToSearch, ArraryForSearch) => {
  let countyEducationDetails = getCountyEducationDetails(elementToSearch, ArraryForSearch);
  let resultHTML = `${countyEducationDetails.area_name}, ${countyEducationDetails.state} : ${countyEducationDetails.bachelorsOrHigher}%`;
  return resultHTML;
};
let getCountyFillColor = percentOfDegreeHolders => {
  let resultColor = "black";
  if (percentOfDegreeHolders < 12)
  resultColor = "#f99ba9";else
  if (percentOfDegreeHolders < 21)
  resultColor = "#f5536b";else
  if (percentOfDegreeHolders < 30)
  resultColor = "#f32c4a";else
  if (percentOfDegreeHolders < 39)
  resultColor = "#dc0d2c";else
  if (percentOfDegreeHolders < 48)
  resultColor = "#a00920";else
  if (percentOfDegreeHolders < 57)
  resultColor = "#6d0616";else
  if (percentOfDegreeHolders < 66)
  resultColor = "#37030b";else
  if (percentOfDegreeHolders >= 66)
  resultColor = "#1c0206";

  return resultColor;
};
let addLegendProperties = legendSvg => {
  let legendColorRange = ["<12", "<21", "<30", "<39", "<48", "<57", "<66", ">=66"];
  let colorData = ["#f99ba9", "#f5536b", "#f32c4a", "#dc0d2c", "#a00920", "#6d0616", "#37030b", "#1c0206"];
  return legendSvg.selectAll("rect").
  data(colorData).
  enter().
  append("rect").
  attr("x", (d, i) => 20 * i).
  attr("y", (d, i) => 30).
  attr("height", (d, i) => "20px").
  attr("width", (d, i) => "20px").
  attr("fill", (d, i) => d).
  append("title").
  text((d, i) => legendColorRange[i]);
};