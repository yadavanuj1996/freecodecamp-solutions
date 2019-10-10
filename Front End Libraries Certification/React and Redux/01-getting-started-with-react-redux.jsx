class DisplayMessages extends React.Component{
    constructor(props){
      super(props);
      this.state=this.sendDefaultState();
    }
    sendDefaultState(){
       let defaultState={
        input:'',
        messages:[]
      };
      return defaultState;
    }
   
    render(){
      return(
        <div />
      );
    }
  }