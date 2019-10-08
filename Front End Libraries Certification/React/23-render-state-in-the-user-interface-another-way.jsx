class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp'
      }
    }
    render() {
      // change code below this line
      const name=this.state.name;
      // change code above this line
      return (
        <div>
          { /* change code below this line */ }
          <h1>{name}</h1>
          { /* change code above this line */ }
        </div>
      );
    }
  };