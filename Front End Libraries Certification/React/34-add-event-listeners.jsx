class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        message: ''
      };
      this.handleEnter = this.handleEnter.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    // change code below this line
    componentDidMount() {
      document.addEventListener("keydown",this.handleKeyPress);
    }
    componentWillUnmount() {
      document.removeEventListener("keydown",this.handleKeyPress);
    }
    // change code above this line
    handleEnter() {
      this.setState({
        message: this.state.message + 'You pressed the enter key! '
      });
    }
    handleKeyPress(event) {
      if (event.keyCode === 13) {
        this.handleEnter();
      }
    }
    render() {
      return (
        <div>
          <h1>{this.state.message}</h1>
        </div>
      );
    }
  };