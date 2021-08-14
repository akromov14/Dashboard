import initialState from "./initealState";
import { SET_ALBUMS, SET_TODOS, TOGGLE_MENU } from "./types";

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SET_TODOS: return {...state, todos: action.payload}

        case SET_ALBUMS: return {...state, albums: action.payload}

        case TOGGLE_MENU: return { ...state, isSidebarShow: !state.isSidebarShow }

        default: return state;
    }
}

export default reducer;