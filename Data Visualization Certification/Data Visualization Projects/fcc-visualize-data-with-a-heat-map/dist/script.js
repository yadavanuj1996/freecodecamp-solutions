/** 
*  @author Anuj Yadav <yadav.anuj.1996@gmail.com>
*/
/** 
   *  This event listener will run on DOM loading and will call the getTemperatureData function.
   *  @listens DOMContentLoaded
   */
document.addEventListener("DOMContentLoaded", () => {
  getTemperatureData();
});
/** 
    *  The function will send ajax request to get temperature dataset for temperature data source click 
    *  {@link https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json|Datasource}
    *  @external XMLHttpRequest
    *  @see https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest 
    */
let getTemperatureData = () => {
  let ajaxRequest = new XMLHttpRequest();
  ajaxRequest.open("GET", "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json", "true");
  ajaxRequest.send();
  ajaxRequest.onload = () => {
    const responseData = ajaxRequest.responseText;
    const responseDatasetInJSON = JSON.parse(responseData);
    loadTemperatureChart(responseDatasetInJSON);
  };
};
/** 
   *  This function will load the chart,create svg, add rectangles and display them on screen.
   *  @param {Array<Object>} tempDataset The dataset for construcing the chart
   */
let loadTemperatureChart = tempDataset => {
  // alert(JSON.stringify(tempDataset));
  const svgHeight = getChartHeight();
  const svgWidth = getChartWidth();
  const padding = getChartPadding();
  const baseTemperature = tempDataset.baseTemperature;
  let svg = loadSvg(svgHeight, svgWidth);



  let xAxis = d3.axisBottom(xScale(tempDataset, svgWidth, padding)).tickFormat(d3.format("d"));
  loadXAxis(svg, xAxis, svgHeight, padding);

  let yAxis = d3.axisLeft(yScale(tempDataset, svgHeight, padding)).tickFormat(d => {
    return convertMonthDigitToName(d);
  });

  loadYAxis(svg, yAxis, padding);

  let tooltip = d3.select("body").
  append("div").
  attr("id", "tooltip").
  style("opacity", 0);

  let rectanglesInSvg = addRectanglesInSvg(svg, tempDataset);
  rectanglesInSvg.attr("x", (d, i) => xScale(tempDataset, svgWidth, padding)(d.year)).
  attr("y", (d, i) => yScale(tempDataset, svgHeight, padding)(d.month - 1)).
  attr("height", `${(svgHeight - 2 * padding) / 12}px`).
  attr("width", "7px").
  attr("data-month", (d, i) => d.month - 1).
  attr("data-year", (d, i) => d.year).
  attr("data-temp", (d, i) => d.variance).
  attr("fill", (d, i) => {
    let temperature = getTemperatureFromVariance(baseTemperature, d.variance);
    return getTemperatureColor(temperature);
  }).
  on("mouseover", (d, i) => {//alert(JSON.stringify(d.year));
    tooltip.style("opacity", 0.8).
    attr("data-year", d.year).
    html(`${d.year}-${convertMonthDigitToName(d.month)}<br>${Math.floor(baseTemperature + d.variance * 100) / 100}<br>${d.variance}`).
    style("left", `${15 + xScale(tempDataset, svgWidth, padding)(d.year)}px`).
    style("top", `${60 + yScale(tempDataset, svgHeight, padding)(d.month - 1)}px`).
    style("text-align", "center");
  }).
  on("mouseout", (d, i) => {
    tooltip.style("opacity", 0);
  });

  let svg2 = loadSvg(100, 300);
  let legend = svg2.
  attr("id", "legend").
  style("float", "right");
  let legendTempRange = ["<2.8", "<3.9", "<5.0", "<6.1", "<7.2", "<8.3", "<9.5", "<10.6", "<11.7", "<12.8", ">12.8"];
  let colorData = ["#344595", "#4575B4", "#74ADD1", "#ABD9E9", "#E0F3F8", "#FDF4BF", "#FEE090", "#FDAE61", "#F46D43", "#D73836", "#A52A27"];
  svg2.selectAll("rect").
  data(colorData).
  enter().
  append("rect").
  attr("x", (d, i) => 20 * i).
  attr("y", (d, i) => 20).
  attr("height", (d, i) => "20px").
  attr("width", (d, i) => "20px").
  attr("fill", (d, i) => d).
  append("title").
  text((d, i) => legendTempRange[i]);
};

/** Return chart height.*/
const getChartHeight = () => 600;
/** Return chart width.*/
const getChartWidth = () => 1200;
/** Return chart padding.*/
const getChartPadding = () => 100;
/** Load X axis for chart.*/
const loadXAxis = (svg, xAxis, height, padding) => {
  svg.append("g").
  attr("transform", `translate(0,${height - padding})`).
  attr("id", "x-axis").
  call(xAxis);
};
/** Load Y axis for chart.*/
const loadYAxis = (svg, yAxis, padding) => {
  svg.append("g").
  attr("transform", `translate(${padding},0)`).
  attr("id", "y-axis").
  call(yAxis);
};
/**
   *  This function will add circles equal to number of elements in dataset inside svg.
   *  @param {object} svg The svg element.
   *  @param {Array<object>} dataset The doping Dataset.
   *  @return {object} The svg element with number of cicles equal to number of elements in dataset. 
   */
/** Add svg in body and return it.*/
const loadSvg = (height, width) => {
  return d3.select("body").
  append("svg").
  attr("height", height).
  attr("width", width);
};

const addRectanglesInSvg = (svg, dataset) => {
  return svg.selectAll("rect").
  data(dataset.monthlyVariance).
  enter().
  append("rect").
  attr("class", "cell");
};
const getTemperatureColor = temperatureVariance => {
  if (temperatureVariance < 2.8)
  return "#344595";else
  if (temperatureVariance < 3.9)
  return "#4575B4";else
  if (temperatureVariance < 5.0)
  return "#74ADD1";else
  if (temperatureVariance < 6.1)
  return "#ABD9E9";else
  if (temperatureVariance < 7.2)
  return "#E0F3F8";else
  if (temperatureVariance < 8.3)
  return "#FDF4BF";else
  if (temperatureVariance < 9.5)
  return "#FEE090";else
  if (temperatureVariance < 10.6)
  return "#FDAE61";else
  if (temperatureVariance < 11.7)
  return "#F46D43";else
  if (temperatureVariance < 12.8)
  return "#D73836";else

  return "#A52A27";
};
let getTemperatureFromVariance = (baseTemperature, variance) => baseTemperature + variance;
let convertMonthDigitToName = monthNumber => {
  return d3.timeFormat("%B")(new Date(0).setUTCMonth(monthNumber));
};
let getLegendHTML = () => {
  return `<div style="display:flex;justify-content:center;align-items:center;font-size:13px;">
              <div style="background-color:#344595;width:20px;height:20px;">
              </div>
              <div style="padding-left:10px;padding-right:10px;"> <2.8 </div>
              <div style="background-color:#4575B4;width:20px;height:20px;">
              </div>
              <div style="padding-left:10px;padding-right:10px;"> <3.9 </div>
              <div style="background-color:#74ADD1;width:20px;height:20px;">
              </div>
              <div style="padding-left:10px;padding-right:10px;"><5.0</div>
              <div style="background-color:#ABD9E9;width:20px;height:20px;">
              </div>
              <div style="padding-left:10px;padding-right:10px;"><6.1</div>
              <div style="background-color:#E0F3F8;width:20px;height:20px;">
              </div>
              <div style="padding-left:10px;padding-right:10px;"><7.2</div>
              <div style="background-color:#FDF4BF;width:20px;height:20px;">
              </div>
              <div style="padding-left:10px;padding-right:10px;"><8.3</div>
              <div style="background-color:#FEE090;width:20px;height:20px;">
              </div>
              <div style="padding-left:10px;padding-right:10px;"><9.5</div>
              <div style="background-color:#FDAE61;width:20px;height:20px;">
              </div>
              <div style="padding-left:10px;padding-right:10px;"><10.6</div>
              <div style="background-color:#F46D43;width:20px;height:20px;">
              </div>
              <div style="padding-left:10px;padding-right:10px;"><11.7</div>
              <div style="background-color:#D73836;width:20px;height:20px;">
              </div>
              <div style="padding-left:10px;padding-right:10px;"> < 12.8</div>
              <div style="background-color:#A52A27;width:20px;height:20px;">
              </div>
              <div style="padding-left:10px;"> >12.8</div>
             </div>`;
};
/**
    * The Curried Function that will return interpolated value on x axis and will return 
    * function on first call then number value in second
    * @callback xScaleCallback 
    * @param {Array<object>} dataset Dataset of all elements.
    * @param {number} padding Padding for chart inside svg.
    * @param {number} height Height for chart area.
    * @param {number} width Width for chart area.
    * @return {number} The interpolated value on that the point will be represented on chart
    */
let xScale = (dataset, width, padding) => {
  // alert(JSON.stringify(d3.min(dataset.monthlyVariance,(d,i)=>d.year)));
  return d3.scaleLinear().
  domain([d3.min(dataset.monthlyVariance, (d, i) => d.year), d3.max(dataset.monthlyVariance, (d, i) => d.year)]).
  range([padding, width - padding]);
};
/**
    * The Curried Function that will return interpolated value on y axis and return 
    * function in first call then number value in second
    * @callback yScaleCallback 
    * @param {Array<object>} dataset Dataset of all elements.
    * @param {number} height Height for chart area.
    * @param {number} padding Padding for chart inside svg.
    * @return {number} The interpolated value on that the point will be represented on chart
    */
let yScale = (dataset, height, padding) => {
  return d3.scaleBand().
  domain([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]).
  range([padding, height - padding]);
};