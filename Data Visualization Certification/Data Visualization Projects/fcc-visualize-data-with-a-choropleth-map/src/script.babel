/** 
*  @fileOverview Choropleth Map implementation for comparing United States Educational 
*  Attainment, reflecting the peoples educational attainment classifying them in 
*  two categories on basis of having a bachelor or masters degree or not.
*  The data is represented county wise across the United States using D3.js library.
*  @author Anuj Yadav
*  @see Access Education Data {@link https://raw.githubusercontent.com/no-stack-dub-sack/testable-projects-fcc/master/src/data/choropleth_map/for_user_education.json|Education Datasource} 
*  @see Access County Data {@link https://raw.githubusercontent.com/no-stack-dub-sack/testable-projects-fcc/master/src/data/choropleth_map/counties.json|County Datasource} 
*  @see Other Charts {@link https://github.com/yadavanuj1996/D3.js-Charts|D3.js-Charts}
*  @see Cod Pen {@link https://codepen.io/yadavanuj1996/pen/WNewBWM|Codpen}
*/
/** 
*  @external fetch
*  @see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
*  @description The Fetch API provides an interface for fetching resources 
*  (including across the network). It will seem familiar to anyone who has used
*  XMLHttpRequest, but the new API provides a more powerful and flexible feature set.
*/
/** 
*  Function listens to DOM loading then listen for the two data sources using promises
*  once both promises gets resolved then call the function loadMap. Promise.All is used
*  it gets resolved only when both of the Promises are resolved and resolves only after
*  the last resolvling promise will is resolved.Access the data set at 
*  {@link https://raw.githubusercontent.com/no-stack-dub-sack/testable-projects-fcc/master/src/data/choropleth_map/for_user_education.json|Education Datasource}
*{@link https://raw.githubusercontent.com/no-stack-dub-sack/testable-projects-fcc/master/src/data/choropleth_map/counties.json|County Datasource}
*  @function
*  @name DOMContentLoadedFunction
*  @listens DOMContentLoaded
*/
document.addEventListener("DOMContentLoaded",() => {
  let usCountyDataPromise=fetch("https://raw.githubusercontent.com/no-stack-dub-sack/testable-projects-fcc/master/src/data/choropleth_map/counties.json");
  let educationDataPromise=fetch('https://raw.githubusercontent.com/no-stack-dub-sack/testable-projects-fcc/master/src/data/choropleth_map/for_user_education.json');
  Promise.all([usCountyDataPromise,educationDataPromise])
    .then(responses=>Promise.all([responses[0].text(),responses[1].text()]))
    .then(data=>{
      loadMap(data[0],data[1]);
	  })	
  });
/** 
*  This function will load the choropleth map.
*  @param {Array<Object>} tempDataset The county dataset that represents all 
*  the counties of US used for construcing the chart.
*  @param {Array<Object>} educationDetails The education dataset that represents 
*  all eductaion attainment percent of all the counties corresponding with county id.
*/
let loadMap=(countyDetails,educationDetails)=>{
  const countyData=JSON.parse(countyDetails);
  const educationData=JSON.parse(educationDetails);
  
  const svgHeight=getChartHeight();
  const svgWidth=getChartWidth();
  const padding=getChartPadding();
  let svg=loadSvg(svgHeight,svgWidth);
  let path = d3.geoPath();
  let tooltip=loadTooltip();
  svg.append("g")
    .attr("class", "counties")
    .selectAll("path")
    .data(topojson.feature(countyData, countyData.objects.counties).features)
    .enter()
    .append("path")
    .attr("class","county")
    .attr("data-fips",(d)=>d.id)
    .attr("data-education",(d)=>getPercentOfDegreeHolders(d.id,educationData))
    .attr("fill", (d)=> { 
        let degreeHoldersPercent=getPercentOfDegreeHolders(d.id,educationData);
        return getCountyFillColor(degreeHoldersPercent); 
      })
    .attr("d", path) 
    .on("mouseover",(d)=>{
        tooltip.attr("data-education", ()=> getPercentOfDegreeHolders(d.id,educationData))
               .style("opacity",1)
               .style("left", `${(d3.event.pageX+10)}px`) 
               .style("top", `${(d3.event.pageY-25)}px`)
               .html(getToolTipCountyEducationDetails(d.id,educationData)); 
      })
    .on("mouseout",(d)=>{
        tooltip.style("opacity",0);
      });
      
  let legendSvg=loadSvg(50,200).attr("id","legend");
  legendSvg=addLegendProperties(legendSvg);
  legendSvg.attr("transform","translate(10px,10px)");
  
  let axisSvg=loadSvg(50,200).attr("id","axisSvg");
  var customScale = d3.scaleLinear()
        .domain([0,3,12,21,30,39,48,57,66,100])
        .range([0.7,1.5,20,40,60,80,100,120,140,160]);

  let xAxis = d3.axisBottom().scale(customScale)
     .tickValues([3,12,21,30,39,48,57,66,100])
     .tickSize(8);    
  axisSvg.attr("transform",`translate(0,0)`)
         .call(xAxis);
    
}   

/** Return chart height.*/
const getChartHeight=()=>600;
/** Return chart width.*/
const getChartWidth=()=>950;
/** Return chart padding.*/
const getChartPadding=()=>100;
/** Add svg in body and return it.*/
let loadSvg=(height,width)=>{
  return d3.select("body")
    .append("svg")
    .attr("height",height)
    .attr("width",width);
};
/** Return tooltip that will show inforamtion about a rectangle when it is hovered.*/
let loadTooltip=()=>{
  return d3.select("body")
           .append("div")
           .style("opacity",0)
           .attr("id","tooltip"); 
};
/** Fetch county educational details and then return percent of degree holders.*/
let getPercentOfDegreeHolders=(elementToSearch,ArraryForSearch)=>{
  let countyEducationDetails= getCountyEducationDetails(elementToSearch,ArraryForSearch);
  return countyEducationDetails.bachelorsOrHigher;
};
/** 
*  This will search for the education data in education dataset using filter
*  method and the test condition for filter is to match the county id which
*  are saved as fips in educational dataset and as id in county dataset. 
*  @param {number} elementToSearch the particular county id or number to check the 
*  corresponding value of education in education dataset.
*  @param {Array<object>} arrayForSearch The array that contains all the education data.
*/
let getCountyEducationDetails=(elementToSearch,arrayForSearch)=>{
   let countyEducationData=arrayForSearch.filter((element)=>{
    if(element.fips==elementToSearch)
      return element;
  });
  return countyEducationData[0];
};
/** Return tooltip that will show inforamtion about a rectangle when it is hovered.*/
let getToolTipCountyEducationDetails=(elementToSearch,ArraryForSearch)=>{
  let countyEducationDetails= getCountyEducationDetails(elementToSearch,ArraryForSearch);
  let resultHTML=`${countyEducationDetails.area_name}, ${countyEducationDetails.state} : ${countyEducationDetails.bachelorsOrHigher}%`;
  return resultHTML;
};
/**
*  This function will get the degree holders percent value as input parameter and return the color 
*  corresponding to the education attainment percent.
*  @function
*  @param {number} percentOfDegreeHolders Value of degree holders in county.
*/
let getCountyFillColor=(percentOfDegreeHolders)=>{
  let resultColor="black";
  if(percentOfDegreeHolders < 12)
    resultColor="#f99ba9";
  else if(percentOfDegreeHolders < 21)
    resultColor="#f5536b";
  else if(percentOfDegreeHolders < 30)
    resultColor="#f32c4a";
  else if(percentOfDegreeHolders < 39)
    resultColor="#dc0d2c";
  else if(percentOfDegreeHolders < 48)
    resultColor="#a00920";
  else if(percentOfDegreeHolders < 57)
    resultColor="#6d0616";
  else if(percentOfDegreeHolders < 66)
    resultColor="#37030b";
  else if(percentOfDegreeHolders >= 66)
    resultColor="#1c0206";
  
  return resultColor;
};
/** Add custom properties to all the elements of legend svg element. */
let addLegendProperties=(legendSvg)=>{
  let legendColorRange=["<12","<21","<30","<39","<48","<57","<66",">=66"];
  let colorData=["#f99ba9","#f5536b","#f32c4a","#dc0d2c","#a00920","#6d0616","#37030b","#1c0206"];
  return legendSvg.selectAll("rect")
                  .data(colorData)
                  .enter()
                  .append("rect")
                  .attr("x",(d,i)=>20*i)
                  .attr("y",(d,i)=>30)
                  .attr("height",(d,i)=>"20px")
                  .attr("width",(d,i)=>"20px")
                  .attr("fill",(d,i)=> d)
                  .append("title")
                  .text((d,i)=>legendColorRange[i]);
};