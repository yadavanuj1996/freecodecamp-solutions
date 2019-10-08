class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activeUsers: 0
      };
    }
    componentDidMount() {
      setTimeout( () => {
        this.setState({
          activeUsers: 1273
        });
      }, 2500);
    }
    render() {
      return (
        <div>
          <h1>Active Users: {this.state.activeUsers}</h1>
        </div>
      );
    }
  };