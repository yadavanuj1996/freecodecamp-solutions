							jQuery
1) To add class using jQuery
	$("button").addClass("animated");
    $(".btn").addClass("shake");
    $("#target1").addClass("btn-primary");												
2) Remove class
	$("#target2").removeClass("btn-default");
3) To add css
	 $("#target1").css("color", "red");
4) To disable an element. 
	$("#target1").prop("disabled", true);
5) To remove a element
    $("#target4").remove();
6) To append element to other div (remove and move)
    $("#target2").appendTo("#right-well");
7) To clone element and append (copy and move)
    $("#target5").clone().appendTo("#left-well");
8) To call the parent and change parent's properties.
    $("#target1").parent().css("background-color","red")
9) To get all children elements and change it's color
	$("#right-well").children().css("color", "orange");
10)To select nth element of multiple elements having same class or html element (p or button)
	 $(".target:nth-child(2)").addClass("animated bounce");
11)To get even element of a all elements containing particular class
	$(".target:even").addClass("animated shake");
12) To Select body and add class to whole html
    $("body").addClass("animated hinge");
	
	
							Sass
											
1) Sass stands for Syntactically Awesome Style Sheet and the file extension used is .scss
	NOTE: double quotes and single quotes are not used in Sass.
2) $var-name Declare a variable (using $ sign just like PHP)
	<style type='text/sass'>
		$text-color: red;
	</style>
3) Nesting is possible
	.blog-post {
		h1{
		  text-align: center;
		  color: blue;
		}
		p{
		  font-size: 20px;
		}
	}
	
	insted of traditional .blog-post h1{} and .blog-post p{} 
4) @mixin (they are like functions for Sass) write code once and execute it multiple times
	Keywords: @mixin and @include
	@mixin border-radius($radius){
		-webkit-border-radius: $radius;
		-moz-border-radius: $radius;
		-ms-border-radius: $radius;
		box-border-radius: $radius;
	}
	
	#awesome {
		width: 150px;
		height: 150px;
		background-color: green;
		@include border-radius(15px);
	}
  
5)  @if @else in Sass
	NOTE: In `@else if`  the if will not be succeded by @ and the if else in Sass does not permit 
	() bracket notation like in other Programming languages.
	
	@mixin border-stroke($val){
		@if $val==light{
		  border: 1px solid black;
		}
		@else if $val==heavy{
		  border: 6px solid black;
		}
		@else {
		  border:none;
		}
	}
	#box {
		@include border-stroke(heavy);
	}
6) @for loop
	NOTE: The for does not follow bracket notation ( or ) like js on using variable name for html elements
	or class or id  #{$i} should be used for appending text while using inside the class or id we cannot
	use the $i value for forming or appending the text .
	Two variations of @for are present
	
	@for $i from 1 to 5  		(iteration over  1,2,3,4,5) 
	@for $i from 1 through 6    (i value will be 1,2,3,4,5,6)
	
	<style type='text/sass'>
	  @for $i from 1 to 6 {
		.text-#{$i}{
		  font-size: 10px * $i;
		}
	  }
	</style>

	<p class="text-1">Hello</p>
	<p class="text-2">Hello</p>
	<p class="text-3">Hello</p>
	<p class="text-4">Hello</p>
	<p class="text-5">Hello</p>
	
7) @each used for iterating over a list or map
	TO fill background color using the @each 
	NOTE: In map solution $key,$color is used because if we will not use $key the $color will have
	values as color1,color2,color3 in each successive iteration
	
	<style type='text/sass'>
		 // list solution
		@each $color in blue,black,red{
			.#{$color}-bg{
				background-color: $color;
			}
		}
		
		$colorChoices: (color1:blue, color2: black,color3: red);
		// map solution
		@each $key,$color in $colorChoices {
			.#{$color}-bg{
				background-color: $color;
			}
		}

	  div {
		height: 200px;
		width: 200px;
	  }
	</style>

	<div class="blue-bg"></div>
	<div class="black-bg"></div>
	<div class="red-bg"></div>

8) @while loop
	<style type='text/sass'>
	  $i: 1;

	  @while $i < 5{
		.text-#{$i}{
			font-size: 5px * $i;
		}
		$i: $i+1;
	  }
	  
	</style>

	<p class="text-1">Hello</p>
	<p class="text-2">Hello</p>
	<p class="text-3">Hello</p>
	<p class="text-4">Hello</p>

9) Partials 
	NOTE: _ is not used in main scss file but the partial name should start from _ (unders)
	(ex: _variables.scss)
	
	Partials in Sass are separate files that hold segments of CSS code. These are imported and 
	used in other Sass files. This is a great way to group similar code into a module to keep
	it organized.Names for partialsstart with the underscore (_) character, which tells Sass it
	is a small segment of CSS and not to convert it into a CSS file. Also, Sass files end with
	the .scssfile extension. To bring the code in the partialinto another Sass file, use the
	@import directive.
	For example, if all your mixinsare saved in a partialnamed "_mixins.scss", and they are needed
	in the "main.scss" file, this is how to use them in the main file:

	// In the main.scss file
	@import 'mixins'
10) @extend , to extend properties of one class or id to another	
	<style type='text/sass'>
	  .info{
		width: 200px;
		border: 1px solid black;
		margin: 0 auto;
	  }
	  .info-important{
		@extend .info;
		background-color: magenta;
	  }
	  
	</style>
	<div class="info-important">
	  <p>This is an important post.</p>
	</div>

	<div class="info">
	  <p>This is a simple post.</p>
	</div>
	
	
							React
												
1) Babel is used to convert JSX to JS ,JSX is extension of JS which has both html and js code in it.
2) Declaring JSX element
	const JSX = <h1>Hello JSX!</h1>;
3) Comments in JSX
	
	const JSX = (
	  <div>
	  {/* Comment */}
		<h1>This is a block of JSX</h1>
		<p>Here's a subtitle</p>
	  </div>
	);
4) Render HTML elements in DOM ReactDOM.render(componentToRender, targetNode);
	const JSX = (
	  <div>
		<h1>Hello World</h1>
		<p>Lets render this to the DOM</p>
	  </div>
	);
	// change code below this line

	ReactDOM.render(JSX,document.getElementById("challenge-node"));
5) 	The naming convention for all HTML attributes and event references in JSX become camelCase.
	class becomes className
	For example, a click event in JSX is onClick, instead of onclick. Likewise, onchange becomes onChange
6) Define React Component
	i) Stateless function component
		const MyComponent = ()=> (<div>Beyonce Halo</div>);
	ii) ES6 Way 
	class MyComponent extends React.Component {
		constructor(props) {
		  super(props);
		}
		render() {
		  return (
			<div>
			  <h1>Hello React!</h1>
			</div>
		  );
		}
	  };
7)	Function name starts with Capital letter in React (ðŸ˜)

8) 3 Concepts are explained in this example:
	i)  Component Nesting: A component can be nested in another component and can 
		be rendered using <componentName /> 
	    syntax (self closing tag syntax).
	ii) Component Nesting Chains: A component who has a child component can itself
		be further used in other component making a chain of nesting components.
	iii) ES6 Component Nesting : A ES6 component defined using class syntax can also
		 be nested in a similar manner as to the stateless components.
	
	const GrandChildComponent = () => {
		return (
		  <div>
			<p>I am the Grand Child</p>
		  </div>
		);
	  };
	  
	const ChildComponent = () => {
		return (
		  <div>
			<GrandChildComponent />   {/* Nesting a component into another component that will*/}
			<p>I am the child</p>     {/* further be nested  in some another component. */}
		  </div>
		);
	  };
	  
	  class ParentComponent {
		constructor(props) {
		  super(props);
		}
		render() {
		  return (
			<div>
			  <h1>I am the Parent</h1>
			  <ChildComponent />		{/* Calling child component */}
			</div>
		  );
		}
	  };
	  
	  class GrandParentComponent extends React.Component {
		constructor(props) {
		  super(props);
		}
		render() {
		  return (
			<div>
			  <h1>I am the Grand Parent</h1>
			  <ParentComponent />		{/* Calling Parent component */}
			</div>
		  );
		}
	  };
	  
9)  ReactDOM.render(componentToLoad,targetNode) is executed in 2 ways:   
	i)  JSX Element (Loading)
		  const JSX=("<div><h1>JSX</h1></div>");
		  ReactDOM.render(JSX,document.getElementById("challenge-node"));  
	ii) Component(Loading)
		  ReactDOM.render(<MyComponent />,document.getElementById("challenge-node"));

10) Props (5 concepts)
	NOTE: While passing value to props from JSX return we put the value part inside {}.
	i) Passing props to stateless functional component
	
	const CurrentDate = (props) => {
	  return (
		<div>
		  {props.user}
		  <p>The current date is: {props.date}</p>
		</div>
	  );
	};

	class Calendar extends React.Component {
	  constructor(props) {
		super(props);
	  }
	  render() {
		return (
		  <div>
			<h3>What date is it?</h3>
			<CurrentDate date={Date()} />
		  </div>
		);
	  }
	};
	
	ii) Array in props 
		functional component
		return <p>{props.tasks.join(", ")}</p>
		
		React component
		<List  tasks={["read", "workout","Code"]} />
	
	iii) Default props
	
		const ShoppingCart = (props) => {
			return (
			  <div>
				<h1>Shopping Cart Component</h1>
			  </div>
			)
		};
		 // change code below this line
		 ShoppingCart.defaultProps={items: 0};
	
	iv) Override default props
		const Items = (props) => {
			return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
		}
		  
		Items.defaultProps = {
			quantity: 0
		}
		  
		class ShoppingCart extends React.Component {
			constructor(props) {
			  super(props);
			}
			render() {
			  return <Items quantity={10} />
			}
		};
	
	v) Define TYPE of prop
		const Items = (props) => {
			return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
		};
		  
		Items.defaultProps = {
			quantity: 0
		};
		  
		Items.propTypes={
			quantity: PropTypes.number.isRequired
		};
		
11) A stateless functional component is any function you write which accepts props and returns JSX.
	A stateless component, on the other hand, is a class that extends React.Component, but does not use 
	internal state (covered in the next challenge). Finally, a stateful component is any component that
	does maintain its own internal state. You may see stateful components referred to simply as components
	or React components.

12) Using props inside React ES6 (class) component
	NOTE: using `this` keyword ,the same is not needed for stateless functional component
	class ReturnTempPassword extends React.Component {
		constructor(props) {
		  super(props);
		}
		render() {
		  return (
			<p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
		  );
		}
	};

13)	Using props with stateless function
	const Camper=(props)=>(<p>{props.name}</p>);
	Camper.defaultProps={
		name:'CamperBot'
	};
	  
	Camper.propTypes={
		name: PropTypes.string.isRequired
	};
14) Creating Stateful component
	We can also use variables that can be declared in render method , we can
	define variable and functions in render method outside of return.
	class StatefulComponent extends React.Component {
		constructor(props) {
		  super(props);
		  // initialize state here
		  this.state={
			name:'Anuj'
		  }
		}
		render() {
		  return (
			<div>
			  <h1>{this.state.name}</h1> {/* Use of state */}
			</div>
		  );
		}
	  };

15) setState and bind
	The setState is used to update the state of stateful component and bind is 
	used to link `this` to class method that refrences class in this case to other
	methods of class (NOTE: class is just syntactic sugar in JS).
	
	class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'Initial State'
      };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      // change code below this line
      this.setState({name:'React Rocks!'});
      // change code above this line
    }
    render() {
      return (
        <div>
          <button onClick={this.handleClick}>Click Me</button>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
  };
  
16) User Events 
	
	i)Button onClick
	In JSX
	<button onClick={this.toggleVisibility}>Click Me</button>
	
	Class method (outside render)
	toggleVisibility(){
      if(this.state.visibility)
        this.setState({visibility:false});
      else
        this.setState({visibility:true});
    }
	
	ii) Reading input text on any change
	event.target.value will return the value of input text field at time of 
	submission.
	
	In JSX
	<input type="text" value={this.state.input} onChange={this.handleChanges} />
	<h4>Controlled Input:</h4>
      <p>{this.state.input}</p>
		  
	Class method (outside render)
	handleChanges(event){
      this.setState({input: event.target.value});
    }
	
	iii) Handling Form submission events
		In JSX (NOTE: form tag has onSubmit)
		<form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.input} onChange={this.handleChange} />
            <button type='submit' >Submit!</button>
        </form>
			  
		Class method (outside render)
		handleSubmit(event) {
		  this.setState({
			submit: this.state.input
		  });
		}
 
17) Props are used so that if only particular data of state has to be passed to a child component
	we can send as props instead of sending access to whole state. (React has unidirectional data
	flow).
	
18) React Hooks
	componentWillMount()  -Run during the only time before component loads into DOM
	
	componentDidMount()   -After first time the component is loaded into DOM

	componentWillReceiveProps()		- Instead of updating on everytime new props will come using this 
					          function will improve performace as we can check whether the new
						  input props are different or not.

	shouldComponentUpdate()			- returns true or false on the basis the DOM is reloaded or not using
						  if else decide whether we want the DOM to reload or not.

	componentWillUpdate()

	componentDidUpdate()

	componentWillUnmount()
	
19) Most web developers, at some point, need to call an API endpoint to retrieve data. If you're
	working with React, it's important to know where to perform this action.
	
	The best practice with React is to place API calls or any calls to your server in the
	lifecycle method componentDidMount().
	
	The componentDidMount()method is also the best place to attach any event listeners you 
	need to add for specific functionality
	
	Event listeners added via React
	componentDidMount() {
      document.addEventListener("keydown",this.handleKeyPress);
    }
    componentWillUnmount() {
      document.removeEventListener("keydown",this.handleKeyPress);
    }
	
20) We can pass callback as props
	handleChange(event) {
      this.setState({
        inputValue: event.target.value
      });
    }
    render() {
      return (
         <div>
          { /* change code below this line */ }
          <GetInput input={this.state.inputValue} handleChange={this.handleChange} />
          <RenderInput input={this.state.inputValue} />
          { /* change code above this line */ }
         </div>
      );
    }

	  
	  class GetInput extends React.Component {
		constructor(props) {
		  super(props);
		}
		render() {
		  return (
			<div>
			  <h3>Get Input:</h3>
			  <input
				value={this.props.input}
				onChange={this.props.handleChange}/>
			</div>
		  );
		}
	  };

21) Inline styles
	
	class Colorful extends React.Component {
		render() {
		  const textStyle={color:"yellow",fontSize:20};
		  return (
			<div style={{color:"red",fontSize: "72px"}}>Big Red</div>
			<p style={textStyle}>Text Paragraph</p>
		  );
		}
	};
	
	The camelCase convention is used instead of hyphen and js object has to be passed to style
	attribute the key-> value value's should be in quotes ('' or "") and if fontSize is in numbers
	it is default taken as px.
	
22) Conditional Opearators in render() method

	i) if else:-
	 render() {
      // change code below this line
      if(this.state.display){
        return (
         <div>
           <button onClick={this.toggleDisplay}>Toggle Display</button>
           <h1>Displayed!</h1>
         </div>
      );
      }
      else{
        return (
         <div>
           <button onClick={this.toggleDisplay}>Toggle Display</button>
         </div>
      );
      }
      
    }
	
	ii) && operator this.state.display should return true for display 
	render() {
      // change code below this line
      return (
         <div>
           <button onClick={this.toggleDisplay}>Toggle Display</button>
           {this.state.display && <h1>Displayed!</h1>}
         </div>
      );
    }
	
	iii) ? : (ternary operator)
	 render() {
      const buttonOne = <button onClick={this.submit}>Submit</button>;
      const buttonTwo = <button>You May Enter</button>;
      const buttonThree = <button>You Shall Not Pass</button>;
      return (
        <div>
          <h3>Enter Your Age to Continue</h3>
          <input
            style={inputStyle}
            type="number"
            value={this.state.input}
            onChange={this.handleChange} /><br />
          {this.state.userAge==='' && buttonOne}
          {this.state.userAge!=='' && (this.state.userAge<18?buttonThree:buttonTwo)}
        </div>
      );
    }

23) Using map to display list items (li) to dynamically render elements. 
	render() {
      const items = this.state.toDoList.map((element)=>{
        return (<li>{element}</li>);
      }); 
      return (
        <div>
          <textarea
            onChange={this.handleChange}
            value={this.state.userInput}
            style={textAreaStyles}
            placeholder="Separate Items With Commas" /><br />
          <button onClick={this.handleSubmit}>Create List</button>
          <h1>My "To Do" List:</h1>
          <ul>
            {items}
          </ul>
        </div>
      );
    }

24) Providing unique key 
	function Frameworks() {
		const renderFrameworks = frontEndFrameworks.map((element)=>{
		  return <li key={element}>{element}</li>;
		});
		return (
		  <div>
			<h1>Popular Front End JavaScript Frameworks</h1>
			<ul>
			  {renderFrameworks}
			</ul>
		  </div>
		);
  }
  
25) Rendering React on server
	React is rendered on server because as we load our normal html at load time and then
	add eventListeners and data fetching from happend during componentDidMount() lifecycle 
	hook that makes our page mostly of html during first and load and the Search engines
	cannot find much useful content to list our page so we render our react on server
	and then the server sends complete page to client (much like JSP).
	
	class App extends React.Component {
		constructor(props) {
		  super(props);
		}
		render() {
		  return <div/>
		}
	};
  
  // change code below this line
   ReactDOMServer.renderToString(<App />);
   
											
							Redux
												
1)	A reducer takes state and action as arguments, and it always returns a new state. It is
	important to see that this is the only role of the reducer. It has no side effects — it
	never calls an API endpoint and it never has any hidden surprises. The reducer is simply 
	a pure function that takes state and action, then returns new state.

2)  Another key principle in Redux is that stateis read-only. In other words, the reducer
	function must always return a new copy of stateand never modify state directly.
	
3)  If you took a snapshot of the state of a Redux app over time, you would see something
	like state 1, state 2, state 3,state 4, ...and so on where each state may be similar to the 
	last, but each is a distinct piece of data. This immutability, in fact, is what provides 
	such features as time-travel debugging that you may have heard about.

4)  



							React and Redux
											
1)  To make React access to the Redux store and the actions it needs to dispatch updates.
	React Redux provides its `react-redux` package to help accomplish these tasks.

2)  Using Provider to connect React Redux 
	
	// Redux Code:
	const ADD = 'ADD';

	const addMessage = (message) => {
	  return {
		type: ADD,
		message
	  }
	};

	const messageReducer = (state = [], action) => {
	  switch (action.type) {
		case ADD:
		  return [
			...state,
			action.message
		  ];
		default:
		  return state;
	  }
	};



	const store = Redux.createStore(messageReducer);

	// React Code:

	class DisplayMessages extends React.Component {
	  constructor(props) {
		super(props);
		this.state = {
		  input: '',
		  messages: []
		}
		this.handleChange = this.handleChange.bind(this);
		this.submitMessage = this.submitMessage.bind(this);
	  }
	  handleChange(event) {
		this.setState({
		  input: event.target.value
		});
	  }
	  submitMessage() {
		const currentMessage = this.state.input;
		this.setState({
		  input: '',
		  messages: this.state.messages.concat(currentMessage)
		});
	  }
	  render() {
		return (
		  <div>
			<h2>Type in a new Message:</h2>
			<input
			  value={this.state.input}
			  onChange={this.handleChange}/><br/>
			<button onClick={this.submitMessage}>Submit</button>
			<ul>
			  {this.state.messages.map( (message, idx) => {
				  return (
					 <li key={idx}>{message}</li>
				  )
				})
			  }
			</ul>
		  </div>
		);
	  }
	};

	const Provider = ReactRedux.Provider;

	class AppWrapper extends React.Component {
	  // render the Provider here
		constructor(props){
			super(props);
		}
		render(){
			return(
				<Provider store={store}>
					<DisplayMessages />
				</Provider>
			);
		}
	   
	  // change code above this line
	};

3)  The component you connected to Redux was named Presentational, and this
	wasn't arbitrary. This term generally refers to React components that are 
	not directly connected to Redux
