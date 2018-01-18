export default function (state=[], action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.payload];
        case 'MOVE_ITEM':
            return state.map((item) => {
                if (action.payload.id !== item.id) {
                    return item;
                }
                else {
                    return {...item, state: action.payload.state};
                }
            });
        case 'DELETE_ITEM':
            return state.filter((item) =>
                item.id !== action.payload
            );
        case 'DELETE_ITEMS':
            return state.filter((item) =>
                item.cardId !== action.payload
            );
        default:
            return state;
    }
};