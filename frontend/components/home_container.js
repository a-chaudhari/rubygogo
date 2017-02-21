import { connect  } from 'react-redux';
import Home from './home';
import {fetchCategories} from '../actions/category_actions';

const mapStateToProps = (state, ownProps) =>{
  return(
    {
      categories: state.category.categories
    }
  );
};

const mapDispatchToProps = (dispatch, ownProps) =>{
  return(
    {
      fetchCategories: ()=>dispatch(fetchCategories())
    }
  );
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
