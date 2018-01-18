export const addCard = (data) => {
    return {
        type: 'ADD_CARD',
        payload: data
    }
};

export const handleExpand = (exp) => {
    return {
        type: 'EXPAND',
        payload: exp
    }
};

export const deleteCard = (id) => {
    return {
        type: 'DELETE_CARD',
        payload: id
    }
};