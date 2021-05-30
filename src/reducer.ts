import { Action, combineReducers } from 'redux'

interface toggleAction extends Action {
    type: string;
    payload?: Number;
}

const toggleDropdown = { open: false }
const initialCompany = { name: 'Viljatootja AS', active: 0 }

function toggle(state = toggleDropdown, action: Action) {
    if (action.type === 'dropdown/toggle') {
        return {
            ...state,
            open: !state.open
        }
    }

    if (action.type === 'dropdown/close') {
        return {
            ...state,
            open: false
        }
    }

    if (action.type === 'dropdown/company') {
        return {
            ...state,
            open: false
        }
    }
    return state
}

function company(state = initialCompany, action: toggleAction) {
    if (action.type === 'dropdown/company') {
        if (action.payload === 0) {
            return {
                ...state,
                name: 'Viljatootja AS',
                active: 0
            }
        } else if (action.payload === 1) {
            return {
                ...state,
                name: 'Tartu Agro OÜ',
                active: 1
            }
        }
    }
    return state
}

export default combineReducers({ toggle, company })
