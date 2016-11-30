import {connect} from 'react-redux';
import Categories from './Categories';

const mapStateToProps = (state) => {
    const {selectedBoard, boards} = state;
    const board = boards[selectedBoard] || [];
    const boardItems = board.items || [];

    // get the unique categories
    // const uniqueCategories = new Set(board.items.map(item => item.category));
    let itemsByCategory = {};
    for (let item of boardItems) {
        itemsByCategory[item.category] = itemsByCategory[item.category] || [];
        itemsByCategory[item.category].push(item);
    }

    // /console.log(itemsByCategory);

    return {'itemsByCategory': itemsByCategory};
};

const VisibleItemList = connect(mapStateToProps)(Categories);

export default VisibleItemList;
