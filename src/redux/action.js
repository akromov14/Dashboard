import { getAlbums, getTodos } from "../api"
import { SET_ALBUMS, SET_TODOS, TOGGLE_MENU } from "./types";

export const setTodos = async (dispatch)=> {
    const data = await getTodos();

    console.log(data);

    dispatch( {type: SET_TODOS, payload:data})
}

export const setAlbums = async (dispatch)=> {
    const data = await getAlbums();

    console.log(data);

    dispatch( {type: SET_ALBUMS, payload:data})
}

export const toggleMenu = (dispatch) => {
    dispatch({ type: TOGGLE_MENU })
}