class Dialog extends React.Component {
    constructor(props) {
      super(props);
    }
    componentWillUpdate() {
      console.log('Component is about to update...');
    }
    // change code below this line
    componentWillReceiveProps(nextProps){
      console.log(`${JSON.stringify(this.props)} ${JSON.stringify(nextProps)}`);
    }
    componentDidUpdate(){
      console.log("component has updated");
    }
    // change code above this line
    render() {
      return <h1>{this.props.message}</h1>
    }
  };
  
  class Controller extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        message: 'First Message'
      };
      this.changeMessage = this.changeMessage.bind(this);
    }
    changeMessage() {
      this.setState({
        message: 'Second Message'
      });
    }
    render() {
      return (
        <div>
          <button onClick={this.changeMessage}>Update</button>
          <Dialog message={this.state.message}/>
        </div>
      );
    }
  };