import { connect  } from 'react-redux';
import Search from './search';
import {sendSearch} from '../actions/search_actions';

const mapStateToProps = (state, ownProps) =>{
  return(
    {
      search: state.search
    }
  );
};

const mapDispatchToProps = (dispatch, ownProps) =>{
  return(
    {
      sendSearch: (query,offset) => dispatch(sendSearch(query,offset))
    }
  );
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
