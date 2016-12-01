import {connect} from 'react-redux';
import ItemList from './ItemList';

const mapStateToProps = (state) => {
    return {};
};

const VisibleItemList = connect(mapStateToProps)(ItemList);

export default VisibleItemList;
