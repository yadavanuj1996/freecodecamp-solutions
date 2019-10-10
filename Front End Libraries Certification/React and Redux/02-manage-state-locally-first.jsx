class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      }
  
      this.handleChange=this.handleChange.bind(this);
      this.submitMessage=this.submitMessage.bind(this);
    }
    // add handleChange() and submitMessage() methods here
    handleChange(event){
      this.setState({input:event.target.value,messages:this.state.messages});
    }
  
    submitMessage(){
      let updatedMessageList=[...(this.state.messages),this.state.input];
      this.setState({messages: updatedMessageList,input:''});
    }
  
    render() {
      const messages= this.state.messages.map((element)=>{
                        return (<li>{element}</li>);
      });
  
      return (
        <div>
          <h2>Type in a new Message:</h2>
          { /* render an input, button, and ul here */ }
          <input type="text" value={this.state.input}  onChange={this.handleChange}/>
          <button onClick={this.submitMessage}>Submit</button>
          <ul>
            {messages}
          </ul>
          { /* change code above this line */ }
        </div>
      );
    }
  };