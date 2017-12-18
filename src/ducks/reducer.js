const initialState = {
    changeTest: 'This was a triumph'
}

const CHANGE_TEXT = 'CHANGE_TEXT';

export function changeIsGood(){
    return {
        type: CHANGE_TEXT,
        payload: "I'm making a note here, huge success."
    }
}

export default (state = initialState, action) => {
    switch (action.type){
        case CHANGE_TEXT:
            return Object.assign({}, state, {changeTest: action.payload});
    default:
        return state;
    }
}