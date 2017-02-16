import { connect  } from 'react-redux';
import PerksBox from './perks_box';

const mapStateToProps = (state, ownProps) =>{
  return(
    {
      id: ownProps.id
    }
  );
};

const mapDispatchToProps = (dispatch, ownProps) =>{
  return(
    {
      
    }
  );
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PerksBox);
