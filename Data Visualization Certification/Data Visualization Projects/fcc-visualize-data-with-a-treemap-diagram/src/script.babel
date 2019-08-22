/** 
*  @fileOverview Treemap implementation for comparing total revenue of movies
*  grouped together by genres like action,drama,comedy etc and the size of 
*  each movie rectangle will be propotional to the revenue it generated.
*  The data is grouped genre wise and the sizes are represented revenue wise using D3.js library.
*  @author Anuj Yadav
*  @see Access Source Data {@link https://cdn.rawgit.com/freeCodeCamp/testable-projects-fcc/a80ce8f9/src/data/tree_map/movie-data.json|Datasource} 
*  @see Other Charts {@link https://github.com/yadavanuj1996/D3.js-Charts|D3.js-Charts}
*  @see Cod Pen {@link https://codepen.io/yadavanuj1996/pen/wvwzmJq|Codpen}
*/
/** 
*  This function calls getMoviesRevenueData function and stores the returned  
*  fetch promise and on successful resolving of the promise, loadTreeMap 
*  will be called.
*  @function
*  @name DOMContentLoadedFunction
*  @listens DOMContentLoaded
*/
document.addEventListener("DOMContentLoaded", () => {
  let moviesRevenue = getMoviesRevenueData();
  moviesRevenue
    .then(response => {
      return response.json();
    })
    .then(data => {
      loadTreeMap(data);
    })
    .catch(err => {
      console.log(err);
    });
});
/** 
*  @description The Fetch API provides an interface for fetching resources 
*  (including across the network). It will seem familiar to anyone who has used XMLHttpRequest, 
*  but the new API provides a more powerful and flexible feature set.
*  @external fetch
*  @see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
*/
/**
*  The function will return a promise that is fetching data from this data source: 
*  {@link https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json|Datasource}  
*/
let getMoviesRevenueData = () => {
  return fetch(`https://cdn.rawgit.com/freeCodeCamp/testable-projects-fcc/a80ce8f9/src/data/tree_map/movie-data.json`);
};
/** 
*  This function will load the chart after creating svg, adding rectangles and
*  display them on screen.
*  @param {Array<object>} moviesRevenueData The dataset for construcing the chart.
*/
let loadTreeMap = (moviesRevenueData)=> {
  let svgHeight = getChartHeight();
  let svgWidth = getChartWidth();
  let padding = getChartPadding();
  let svg = loadSvg(svgHeight, svgWidth);
  
  let tooltip=loadTooltip();
  tooltip.attr("id","tooltip")
         .style("opacity",0);
  
  let rootData = d3.hierarchy(moviesRevenueData).sum(d => d.value);
  d3.treemap()
    .size([svgWidth, svgHeight])
    .padding(2)(rootData);

  let rectanglesInSvg=addRectanglesInSvg(svg,rootData.leaves());
  rectanglesInSvg.attr("x", d => d.x0)
                 .attr("y", d => d.y0)
                 .attr("height", d => d.y1 - d.y0)
                 .attr("width", d => d.x1 - d.x0);
  addCustomPropertiesInSvgRectangles(rectanglesInSvg);
  addMouseEventsInSvgRectangles(rectanglesInSvg,tooltip);
  
  let textsInSvg=addTextsInSvg(svg,rootData.leaves());
  addMouseEventsInSvgTexts(textsInSvg,tooltip);    
  addCustomPropertiesInSvgTexts(textsInSvg);
      
  let legendSvg=loadSvg(200,200);
  legendSvg.attr("id","legend");
  const MOVIE_CATEGORIES=getAllMovieCategories();
  const MOVIE_CATEGORIES_COLOR=getCategoriesWiseColor();
  let rectanglesInLegendSvg=addRectanglesInSvg(legendSvg,MOVIE_CATEGORIES_COLOR);
  rectanglesInLegendSvg.attr("x",(d,i)=> 40)
                       .attr("y",(d,i)=> 20*i)
                       .attr("height",(d,i)=> 20)
                       .attr("width",(d,i)=> 20)
                       .attr("fill",(d,i)=>MOVIE_CATEGORIES_COLOR[i])
                       .attr("class","legend-item");

  let textInLegenSvg=addTextsInSvg(legendSvg,MOVIE_CATEGORIES);
  textInLegenSvg.attr("x",(d,i)=> 70)
                .attr("y",(d,i)=>(20*(i+1))-5)
                .attr("height",(d,i)=> 20)
                .text((d,i)=>MOVIE_CATEGORIES[i])
                .style("font-size","0.8em");
};
/** Return chart height.*/
let getChartHeight = () => 600;
/** Return chart width.*/
let getChartWidth = () => 1200;
/** Return chart padding.*/
let getChartPadding = () => 30;
/** Add svg in body and return it.*/
let loadSvg = (height, width) => {
  return d3
    .select("body")
    .append("svg")
    .attr("height", height)
    .attr("width", width);
};
/** 
*  This will add custom properties such as fill color,stroke, rx
*  and data attributes to the input rect elements in svg  and add
*  the custom attributes.
*  @function
*  @param {object} rectanglesInSvg This will contain all the rectagles
*  inside an svg, svg.selectAll("rect") element.
*/
let addCustomPropertiesInSvgRectangles=(rectanglesInSvg)=>{
  rectanglesInSvg.attr("fill", d => categoryWiseColor(d.data.category))
                 .attr("stroke", d => "black")
                 .attr("class","tile")
                 .attr("data-name",(d)=>d.data.name)
                 .attr("data-value",(d)=>d.data.value)
                 .attr("data-category",(d)=>d.data.category)
                 .attr("rx",1); // for border radius of the svg rect element
     
};
/**
*  This function will add rectangles in svg equaling the number of elements in dataset.
*  @param {object} svg The svg element.
*  @param {Array<object>} dataset The movie revenue dataset.
*  @return {object} The svg.selectAll("rect") element or all the rectangles inside svg element. 
*/
let addRectanglesInSvg=(svg,dataset)=>{
  return svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect");
};
/**
*  This function will add mouse events like mouseover and mouseout to input recanglesInSvg 
*  param (all rect elements in svg) and will show tooltip on mouseover and hide tooltip on 
*  mouseout, the tooltip will reflect the data on hover of individual rectangle. 
*  @function
*  @param {object} rectanglesInSvg All the selected rect elements (rect is a svg element).
*  @param {object} tooltip The tooltip is a object that is a div appended in body element.
*/
let addMouseEventsInSvgRectangles=(rectanglesInSvg,tooltip)=>{
  rectanglesInSvg.on("mouseover",(d)=>{
                     tooltip.attr("data-value", d.data.value)
                            .style("opacity",1)
                            .style("left",`${d.x0-5}px`) 
                            .style("top", `${d.y1-20}px`)
                            .html(`${d.data.name}<br>${d.data.category}<br>${d.data.value}`);
                 })
                 .on("mouseout",(d)=>{
                   tooltip.style("opacity",0);
                 });
};
/**
*  This function will add texts in svg equaling the number of elements in dataset.
*  @param {object} svg The svg element.
*  @param {Array<object>} dataset The movie revenue dataset.
*  @return {object} The svg.selectAll("text") element after appending them in svg. 
*/
let addTextsInSvg=(svg,dataset)=>{
  return svg.selectAll("text")
            .data(dataset)
            .enter()
            .append("text");
};
/**
*  This function will add mouse events like mouseover and mouseout to input text 
*  elements param (all text elements in svg) and will show tooltip at different place
*  as compare to the tooltip getting loaded on rectangle hover in case of  mouseover 
*  and hide tooltip on  mouseout, the tooltip will reflect the data on hover of individual 
*  text, the tooltip data is same as tooltip generated on hovering rectangle movie sections. 
*  @function
*  @param {object} textsInSvg All the selected text elements (text is a svg element).
*  @param {object} tooltip The tooltip is a object that is a div appended in body element.
*/
let addMouseEventsInSvgTexts=(textsInSvg,tooltip)=>{
  textsInSvg.on("mouseover",(d)=>{
              tooltip.attr("data-value", d.data.value)
                     .style("opacity",1)
                     .style("left",`${d3.event.pageX+20}px`) 
                     .style("top", `${d3.event.pageY-20}px`)
                     .html(`${d.data.name}<br>${d.data.category}<br>${d.data.value}`);
            })
            .on("mouseout",(d)=>{
             tooltip.style("opacity",0);
            });
};
/** 
*  This will add custom properties such as fill color,font size
*  and text data and also set the x and y coordinate  to the input text elements
*  in svg  and add the custom attributes.
*  @function
*  @param {object} textsInSvg This will contain all the text elements
*  (svg.selectAll("text")) in svg element.
*/
let addCustomPropertiesInSvgTexts=(textsInSvg)=>{
  textsInSvg.selectAll('tspan')
            .data(d => {
                return d.data.name.split(/(?=[A-Z][^A-Z])/g) // split the name of movie
                    .map(v => {
                        return {
                            text: v,
                            x0: d.x0,                        // keep x0 reference
                            y0: d.y0                         // keep y0 reference
                        }
                    });
})
            .enter()
            .append('tspan')
            .attr("x", (d) => d.x0 + 5)
            .attr("y", (d, i) => d.y0 + 15 + (i * 10))       // offset by index 
            .text((d) => d.text)
            .attr("font-size", "0.6em")
            .attr("fill", "white");
};
/**
*  This function will get the movie category values as input parameter
*  and return the color corresponding to the  movie genre.
*  @function
*  @param {string} movieCategory Movie Category.
*/
let categoryWiseColor=(movieCategory)=>{
  const CATEGORY_WISE_COLOR=getCategoriesWiseColor();
  let resultColor="black";
  switch(movieCategory){
    case "Action": resultColor=CATEGORY_WISE_COLOR[0];break;
    case "Drama": resultColor=CATEGORY_WISE_COLOR[1];break;
    case "Adventure": resultColor=CATEGORY_WISE_COLOR[2];break;
    case "Family": resultColor=CATEGORY_WISE_COLOR[3];break;
    case "Animation": resultColor=CATEGORY_WISE_COLOR[4];break;
    case "Comedy": resultColor=CATEGORY_WISE_COLOR[5];break;
    case "Biography": resultColor=CATEGORY_WISE_COLOR[6];break;
  }
  return resultColor;
};
/** Return tooltip that will show inforamtion about a rectangle when it is hovered.*/
let loadTooltip=()=>{
  return d3.select("body")
           .append("div")
           .style("opacity",0)
           .attr("id","tooltip"); 
};
/** Return all the movie categories.*/
let getAllMovieCategories=()=>{
  return ["Action","Drama","Adventure","Family","Animation","Comedy","Biography"];
};
/** Return all the genre wise color hash codes.*/
let getCategoriesWiseColor=()=>{
  return ["#DB8A00","#8523dc","#13AD37","#e51a9b","#1c6ee3","#bb6744","#4bc43b"];
};
