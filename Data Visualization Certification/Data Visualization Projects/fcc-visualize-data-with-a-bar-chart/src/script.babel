/**
*  @fileOverview Bar Chart or Histogram implementation for comapring US gdp across several
*  years using D3.js library.
*  @author Anuj Yadav
*  @see Access Source Data {@link https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json|Datasource} 
*  @see Other Charts {@link https://github.com/yadavanuj1996/D3.js-Charts|D3.js-Charts}
*  @see Cod Pen {@link https://codepen.io/yadavanuj1996/pen/zgdZYG|Codpen}
*/
/**
*  @constant
*  @type number
*/
var svgWidth=1000;
/**
*  @constant
*  @type number
*/
var svgHeight=400;
/**
*  @constant
*  @type number
*/
var padding=30;
/** 
*  Function listens to DOM loading and will will call loadChartAfterFetchGDPData function on loading of DOM. 
*  @function
*  @name DOMContentLoadedFunction
*  @listens DOMContentLoaded
*/
document.addEventListener("DOMContentLoaded",()=>{
  loadChartAfterFetchGDPData();
});
/**
*  @external XMLHttpRequest
*  @see https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest 
*/
/**
*  This will fetch the data using jquery's AJAX request.
*  @function
*  {@link https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json|Datasource}
*/
let loadChartAfterFetchGDPData=()=>{  
  const ajaxRequest=new XMLHttpRequest();
  ajaxRequest.open("GET","https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json",true);
  ajaxRequest.send();
  ajaxRequest.onload=()=>{
    responseData=ajaxRequest.responseText;
    let responsDataJSON=JSON.parse(responseData);
    let responseDataset=responsDataJSON.data;
    loadGraph(responseDataset);
  };
};
/** 
*  This function will create and load the a bar graph that will represent 
*  the US GDP figures from 1947 to 2015, the data represents quaterly rise and fall
*  over the years and the bar graph will represent the quaterly values and can help
*  to compare and check the rise of US GDP across all these years.
*  @summary This funtion will load the bar graph after adding svg element & adding rectangles & axes in it.
*  @function
*  @param {Array<Object>} gdpDataset The dataset for construcing the chart containg US GDP data.
*/
let loadGraph=(gdpDataset)=>{    
  let svg=loadSvg(gdpDataset);
  let rectInSvg=addRectanglesInSvg(svg,gdpDataset);
  rectInSvg.attr("x",(d,i)=>padding+xScale(gdpDataset)(new Date(d[0])))
           .attr("y",(d,i)=>yScale(gdpDataset)(d[1]))
           .attr("width",svgWidth/gdpDataset.length)
           .attr("height",(d,i)=> svgHeight-padding-yScale(gdpDataset)(d[1]))
  rectInSvg=addRectanglesCustomProperties(rectInSvg); // this function call is returning new object for rectInSvg and not updating the object
  
  loadAxes(gdpDataset,svg);
};
/** Add svg element in body and return it.*/
let loadSvg=()=>{
  return d3.select("body")
           .append("svg")
           .attr("width",svgWidth)
           .attr("height",svgHeight);
};
/**
*  This function will add rectangles in svg,the number of rectangles will be equal 
*  to the number of elements in dataset.
*  @param {object} svg The svg element.
*  @param {Array<object>} dataset The doping Dataset.
*  @return {object} The svg element with number of cicles equal to number of elements in dataset. 
*/
let addRectanglesInSvg=(svg,dataset)=>{
  return svg.selectAll("rect")
             .data(dataset)
             .enter()
             .append("rect");
};
/** 
*  This will add custom properties such as color, class, data attributes and 
*  mouseover and mouseout functions and will append tooltip that will reflect 
*  the data on hover of individual bar.
*  @param {object} rectangleSvg This will contain all the rectagles inside an svg, svg.selectAll("rect") element.
*  @return {object} A object that will have all the attributes and values of input 
*  svg element and also additional custom porperties. 
*/
let addRectanglesCustomProperties=(rectangleSvg)=>{
  let tooltip=getTooltip();
  return rectangleSvg.attr("fill","#36ACFA")
           .attr("class","bar")
           .attr("data-date",(d)=>d[0])
           .attr("data-gdp",(d)=>d[1])
           .on('mouseover', (d, i)=> {
              tooltip.transition()
                     .duration(200)
                     .style('opacity', .9);
              tooltip.html(`${d[1]} Billion`)
                     .attr('data-date', d[0])
                     .style("color","red");
           })
           .on('mouseout', (d,i)=> {
              tooltip.transition()
                .duration(200)
                .style('opacity', 0);
           })
           .append("title")
           .text(d=> `$ ${d[1]} Billion \n ${d[0]}`);
           
};
/**
*  This function will load axes around the chart ,both x-axis and y-axis.
*  @function
*  @param {object} gdpDataset The dataset will be used for scaling the axes.
*  @param {object} svg The svg element inside body.
*/
let loadAxes=(gdpDataset,svg)=>{
  let xAxis = d3.axisBottom(xScale(gdpDataset)).tickFormat(d3.timeFormat("%Y"));   
  loadXAxis(svg,xAxis);
  let yAxis=d3.axisLeft(yScale(gdpDataset));
  loadYAxis(svg,yAxis);
};
/* This function will append a x-axis (g element)in svg (param).*/
let loadXAxis=(svg,xAxis)=>{
  svg.append("g")
     .attr("id","x-axis")
     .attr("transform", `translate(${padding}, ${svgHeight -padding})`)
     .call(xAxis);
};
/* This function will append a y-axis (g element)in svg (param).*/
let loadYAxis=(svg,yAxis)=>{
  svg.append("g")
     .attr("id","y-axis")
     .attr("transform", `translate(${2*padding},0)`)
     .call(yAxis);  
};
/**
 * The Curried Function that will return interpolated value on x axis and will return 
 * function on first call then x coordinate number value in second,callback is passed for 
 * creating axes.
 * @callback xScaleCallback
 * @param {Array<object>} dataset Dataset of all elements.
 * @return {number} The interpolated value on that the point will be represented on chart
 */
let xScale=(dataset)=>{
  return d3.scaleTime()
                 .domain([d3.min(dataset,d=> new Date(d[0])),d3.max(dataset,d=> new Date(d[0]))])
                 .range([padding,svgWidth-padding-10]); 
}
/**
 * The Curried Function that will return interpolated value on y axis and return 
 * function in first call then number value in second,callback is passed for 
 * creating axes.
 * @callback yScaleCallback 
 * @param {Array<object>} dataset Dataset of all elements.
 * @return {number} The interpolated value on that the point will be represented on chart
 */
let yScale=(dataset)=>{
  return d3.scaleLinear()
                 .domain([0,d3.max(dataset,d=> d[1])])
                 .range([svgHeight-padding,padding]); 
};
/** This function will select chart class and append tooltip div */    
let getTooltip=()=>{
  return d3.select(".chart")
           .append("div")
           .attr("id","tooltip");
};

