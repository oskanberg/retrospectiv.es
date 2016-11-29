import {connect} from 'react-redux';
import ItemList from '../components/ItemList';

const mapStateToProps = (state) => {
    const {selectedBoard, boards} = state;
    const {items} = boards[selectedBoard] || {
        items: []
    };

    return {'items': items};
};

const VisibleItemList = connect(mapStateToProps)(ItemList);

export default VisibleItemList;
