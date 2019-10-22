							
	
						Data Visualization with D3

1) Introduction & select(), append(), text() Add elements in DOM and add text to it
	Impotatnt elements for appending svg, rect,circle,text (different from text() function ),title,
	Important attributes 	height,width,x,y, style (for css property),fill (only for color fill),class,id,
				height,width,x,y,style and fill along with them we can pass second argument of callback

	Laptop screen coordinate system x is towards right and y towards bottom (0,0) origin being at top left corner of screen

	d3.select("body")
        .append("h1")
        .text("Learning D3");
	
	const anchor = d3.select("a");
	The above example finds the first anchor tag on the page and saves an HTML node for it in the variable anchor

2) selectAll() Change text of multiple items
	d3.selectAll("li")
  	.text("list item");

3) enter() and data()  function, this will add new elements if they don't exist and if some of them exist it will first feed the data in them 	 and the rest will be newly created.	
   
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    
    	d3.select("body").selectAll("h2")
      	.data(dataset)
      	.enter()
      	.append("h2")
      	.text("New Title")
    
4) passing function in text() function
    	const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    
    	d3.select("body").selectAll("h2")
      	.data(dataset)
      	.enter()
      	.append("h2")
      	// Add your code below this line
      
      	.text(d=> `${d} USD`); // 
	print 12 USD 
	      31 USD	 
	      22 USD
	      so on
5) style()

	d3.select("body").selectAll("h2")
	.data(dataset)
        .enter()					// Note: Enter will come first
        .append("h2")
        .text((d) => (d + " USD"))
        // Add your code below this line
        .style("color","blue");	
	
	style can also take callback as second argument.
	.style("color",d=>{
		return d >= 20 ? "green": "red"; 
        });

6) attr() to add height,width,x and y coordinate ,class, id etc attributes.
	.attr("class","bar");

7) to create bar graph using height property using style function on div element	
	d3.select("body").selectAll("div")
      	.data(dataset)
      	.enter()
      	.append("div")
      	.attr("class", "bar")
      	// Add your code below this line
      	.style("height",d=> `${d}px`);

   to scale the bar graph height
	increase the height of the bars to better show the difference in values, which is done by multiplying the value by a number to scale 		the height.    

8) attr() we can set multiple attributes together
	<style>
	  svg {
	    background-color: pink;
	  }
	</style>
	<body>
	  <script>
	    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
	    
	    const w = 500;
	    const h = 100;
	    
	    const svg = d3.select("body")
		          .append("svg")
		          .attr("height",h)
		          .attr("width",w); 
		          
	  </script>
	</body>

	SVG stands for Scalable Vector Graphics.
	Here "scalable" means that, if you zoom in or out on an object, it would not appear pixelated. It scales with the display system, 		whether it's on a small mobile screen or a large TV monitor.

	Note:
	Width and height attributes do not have units. This is the building block of scaling - the element will always have a 5:1 width to 		height ratio, no matter what the zoom level is.

9)	const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);
    	const rectInSvg=d3.select("svg")
                  .append("rect")
                  .attr("width",25)
                  .attr("height",100)
                  .attr("x",0)
                  .attr("y",0)
	There are a few differences working with rect elements instead of divs. The rects must be appended to an svg element, not directly to 		the body. Also, you need to tell D3 where to place each rect within the svg area.

10)	The attr() method in D3 accepts a callback function to dynamically set that attribute. The callback function takes two arguments, one 		for the data point itself (usually d) and one for the index of the data point in the array. The second argument for the index is 		optional. Here's the format:

	selection.attr("property", (d, i) => {
	  /* 
	  * d is the data point value
	  * i is the index of the data point in the array
	  */
	})

	.attr("x", (d, i) => {
		return 30*i;
	})
	It's important to note that you do NOT need to write a for loop or use forEach() to iterate over the items in the data set. Recall 		that the data() method parses the data set, and any method that's chained after data() is run once for each item in the data set.

11)	The height of the SVG area is 100. If you have a data point of 0 in the set, you would want the bar to start at the bottom of the SVG 		area (not the top). To do this, the y coordinate needs a value of 100. If the data point value were 1, you would start with a y 	coordinate of 100 to set the bar at the bottom. Then you need to account for the height of the bar of 1, so the final y coordinate 		would be 99.

	The y coordinate that is y = heightOfSVG - heightOfBar would place the bars right-side-up.

12) fill() attribute
	svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d)
       .attr("fill", "navy");

13)  Add labels to graphs 
	text attribute inside svg (just like rectangle) and text() function having second argument a callback 
	svg.selectAll("text")
       .data(dataset)
       .enter()
       // Add your code below this line
       .append("text")
       .attr("x",(d,i)=> 30* i)
       .attr("y",(d,i)=> h-(3*d)-3)
       .text((d,i)=> d);

14)	D3 methods can add styles to the bar labels. The fill attribute sets the color of the text for a text node. The style() method sets 		CSS rules for other styles, such as "font-family" or "font-size".
       
15)	A tooltip shows more information about an item on a page when the user hovers over that item. There are several ways to add a tooltip 		to a visualization, this challenge uses the SVG title element.
	.append("title") // append the toolkit which will appear on hover
        .text(d=>d);	 // this text functin shows text for toolkit
16) circle attribute (similar to rect)
	All three attributes can use a callback function to set their values dynamically. Remember that all methods chained after 		data(dataset) run once per item in dataset. The d parameter in the callback function refers to the current item in dataset, which is 		an array for each point. You use bracket notation, like d[0], to access the values in that array.
	
	svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       // Add your code below this line
       .attr("cx",(d,i)=> d[0])
       .attr("cy",(d,i)=> h-d[1])
       .attr("r",5)
       
	IMPORTANT: 
	Rememeber the way we adjusted the height of bar graph by subtracting the total height we have to do the same to place the y-axis 
	value as the laptop screen coordinate system x is towards right and y towards bottom (0,0) origin being at top left corner of screen.

17) how variables should be actually used
	  
    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);
    
    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d, i) => d[0])
       .attr("cy", (d, i) => h - d[1])
       .attr("r", 5);
    
    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       // NOTE:First set the attributes as only when they are in place we can know whether text is working or not
        .attr("x",(d,i)=> d[0]+5)
        .attr("y",(d,i)=> h-d[1])
        .text((d,i)=>`${d[0]}, ${d[1]}`)
18) Linear scale
	D3 has several scale types. For a linear scale (usually used with quantitative data), there is the D3 method scaleLinear():

	const scale = d3.scaleLinear()
19)	By default, scales use the identity relationship - the input value maps to the output value. But scales can be much more flexible and 		interesting.

	Say a data set has values ranging from 50 to 480. This is the input information for a scale, and is also known as the domain.

	You want to map those points along the x axis on the SVG canvas, between 10 units and 500 units. This is the output information, which 		is also known as the range.

	The domain() and range() methods set these values for the scale. Both methods take an array of at least two elements as an argument. 		Here's an example:

	// Set a domain
	// The domain covers the set of input values
	scale.domain([50, 480]);
	// Set a range
	// The range covers the set of output values
	scale.range([10, 500]);
	scale(50) // Returns 10
	scale(480) // Returns 500
	scale(325) // Returns 323.37
	scale(750) // Returns 807.67
	d3.scaleLinear()
		
	NOTE: Remember ther is array in domain and range
	Notice that the scale uses the linear relationship between the domain and range values to figure out what the output should be for a 		given number. The minimum value in the domain (50) maps to the minimum value (10) in the range.
	
20) d3.max() and d3.mind()	
	const exampleData = [34, 234, 73, 90, 6, 52];
	d3.min(exampleData) // Returns 6
	d3.max(exampleData) // Returns 234

  for nested arrays
	const positionData = [[1, 7, -4],[6, 3, 8],[2, 8, 3]]
    	// Add your code below this line
    	const output = d3.max(positionData,d=>{
      		console.log(d3.max(d));
      		return d3.max(d);
    	}); // will return 8
    
21)	linking range and domain to actual input to actual space on web page

	    const xScale = d3.scaleLinear()
                    .domain([0, d3.max(dataset, (d) => d[0])])		// domain is input or input data
                    .range([padding, w - padding]);			// range is output data
    
	    // Add your code below this line
	    
	    const yScale = d3.scaleLinear()
	    .domain([0,d3.max(dataset,d=>d[1])])
	    .range([h-padding,padding]);
		             
		             
	    // Add your code above this line
	    
	    const output = yScale(411); // Returns 30

22) add axes in charts
	    const xAxis = d3.axisBottom(xScale);
    	    svg.append("g")
            .attr("transform", "translate(0," + (h -padding) + ")")
            .call(xAxis);
    
    
    	    const yAxis = d3.axisLeft(yScale);
 	    svg.append("g")
   	    .attr("transform", "translate("+padding+",0)")
    	    .call(yAxis);
    
    // Add your code above this line
						JSON APIs and AJAX
1) onclick event and DOMContentLoaded event
 	// event listener that will be triggered when the DOM will be loaded
	document.addEventListener('DOMContentLoaded',function(){
    		// onclick event listener
   		document.getElementById('getMessage').onclick=function(){}; 
  	});
2) textContent property to change text 
	document.getElementsByClassName('message')[0].textContent="Here is the message";

3) AJAX Call (Asynchronous JavaScript and XML)
	req=new XMLHttpRequest();
	req.open("GET",'/json/cats.json',true);
	req.send();
	req.onload=function(){
	  json=JSON.parse(req.responseText);
	  document.getElementsByClassName('message')[0].innerHTML=JSON.stringify(json);
	};
4) AJAX POST request and sending data 
	req=new XMLHttpRequest();
	req.open("POST",url,true);
	req.setRequestHeader('Content-Type','text/plain');
	req.onreadystatechange=function(){
	  if(req.readyState==4 && req.status==200){
	    document.getElementsByClassName('message')[0].innerHTML=req.responseText;
	  }
	};
	req.send(userName);


					Useful tags for jsdocs 3 documentation

1) @todo,@param,@return,@type,@author,@listens,@callback,@throws,@this,@see,@requires,@public,@protected,
   @private,@property,@function (if variable will have a value after a right hand side function call),
   @mixin,@typedef,@namespace,@global,@event,@listens,@fires,@generator,@external, 
   {@link www.google.com|Google},@enum,@constant,@copyright,@constructor,@alias,@async
