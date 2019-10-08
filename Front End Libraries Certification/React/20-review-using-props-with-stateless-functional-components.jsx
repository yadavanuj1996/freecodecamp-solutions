class CampSite extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <Camper/>
        </div>
      );
    }
  };
  
  const Camper=(props)=>(<p>{props.name}</p>);
  
  
  Camper.defaultProps={
    name:'CamperBot'
  };
  
  Camper.propTypes={
    name: PropTypes.string.isRequired
  };
  