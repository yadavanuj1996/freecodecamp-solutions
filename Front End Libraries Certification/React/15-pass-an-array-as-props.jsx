const List= (props) => {
    { /* change code below this line */ }
    return <p>{props.tasks.join(", ")}</p>
    
  };
  
  class ToDo extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>To Do Lists</h1>
          <h2>Today</h2>
          { /* change code below this line */ }
          <List tasks={["walk dog", "workout"]} />
          <h2>Tomorrow</h2>
          <List  tasks={["read", "workout","Code"]} />
          { /* change code above this line */ }
        </div>
      );
    }
  };