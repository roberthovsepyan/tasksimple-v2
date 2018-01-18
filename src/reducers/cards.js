export default function (state={expanded: false, cards: []}, action) {
    switch (action.type) {
        case 'ADD_CARD':
            return {...state, cards: [...state.cards, action.payload]};
        case 'DELETE_CARD':
            return {...state, cards: state.cards.filter((card) =>
                card.id !== action.payload
            )};
        case 'EXPAND':
            return {...state, expanded: action.payload};
        default:
            return state;
    }
};