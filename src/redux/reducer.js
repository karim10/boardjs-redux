import { MOVE_CARD, FETCH_STATE_SUCCESS } from './actions';

const initialState = {users: [], columns: [], cards: []};

export const boardApp = (state = initialState, action) => {
    switch (action.type) {
        case MOVE_CARD: {
            const card = state.cards.find(c => c.id === action.cardId);
            const cardIndex = state.cards.findIndex(c => c.id === action.cardId);
            let newCards = state.cards;
            newCards.splice(cardIndex, 1, { ...card, state: action.columnId });
            return {...state, cards: newCards}
        }
        case FETCH_STATE_SUCCESS: {
            return action.state
        }
        default:
            return state;
    }
}