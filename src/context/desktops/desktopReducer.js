import {ADD_DESKTOP, ADD_NUMBER, CHANGE_DESKTOP, CHANGE_NAME} from "../types";

const handlers = {
    [ADD_NUMBER]: (state, action) => ({...state, widgetState: action.widgetState}),
    [CHANGE_NAME]: (state, action) => ({...state, desktopState: action.desktopState}),
    [ADD_DESKTOP]: (state, action) => ({...state, desktopState: action.desktopState}),
    [CHANGE_DESKTOP]: (state, action) => ({...state, currentDesktop: action.id}),
    DEFAULT: state => state
}

export const desktopReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}