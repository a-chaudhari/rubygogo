import { connect  } from 'react-redux';
import Category from './category';
import { fetchCategory, fetchCategories} from '../../actions/category_actions';

const mapStateToProps = (state, ownProps) =>{
  return(
    {
      category: state.category
    }
  );
};

const mapDispatchToProps = (dispatch, ownProps) =>{
  return(
    {
      fetchCategory: (data)=>dispatch(fetchCategory(data)),
      fetchCategories: ()=>dispatch(fetchCategories())
    }
  );
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category);
