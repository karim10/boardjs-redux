export const MOVE_CARD = 'MOVE_CARD';
export const FETCH_STATE_SUCCESS = 'FETCH_STATE_SUCCESS';
export const UPDATE_REMOTE_STATE = 'UPDATE_REMOTE_STATE';

export const moveCard = (cardId, columnId) => {
    return {
        type: MOVE_CARD,
        cardId: cardId,
        columnId: columnId
    }
}


export const updateRemoteState = (dispatch, getState) => {
    fetch("https://api.myjson.com/bins/131dke", {
      method: 'PUT',
      body: JSON.stringify(getState()),
      headers: {
        'Content-Type': 'application/json'
      }
    })
}

export const fetchState = (dispatch) => {
    fetch("https://api.myjson.com/bins/131dke")
      .then(response => response.json())
      .then(res => dispatch(applyState(res)))
}

const applyState = data => ({
    type: 'FETCH_STATE_SUCCESS',
    state: data
})