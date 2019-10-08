class Results extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <h1>
        {
          this.props.fiftyFifty==0?"You lose!":"You win!"
        }
        </h1>
      )
    };
  };
  
  class GameOfChance extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 1
      }
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState({
        counter: this.state.counter+1 // change code here
      });
    }
    render() {
      let expression = Math.round(Math.random()); // change code here
      return (
        <div>
          <button onClick={this.handleClick}>Play Again</button>
          { /* change code below this line */ }
          <Results fiftyFifty={expression} />
          { /* change code above this line */ }
          <p>{'Turn: ' + this.state.counter}</p>
        </div>
      );
    }
  };