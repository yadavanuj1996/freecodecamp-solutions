class ControlledInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };
      // change code below this line
      this.handleChanges=this.handleChanges.bind(this);
      // change code above this line
    }
    // change code below this line
    handleChanges(event){
      this.setState({input: event.target.value});
    }
    // change code above this line
    render() {
      return (
        <div>
          { /* change code below this line */}
          <input type="text" value={this.state.input} onChange={this.handleChanges} />
          { /* change code above this line */}
          <h4>Controlled Input:</h4>
          <p>{this.state.input}</p>
        </div>
      );
    }
  };