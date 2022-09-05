const UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT';
const CLEAR_SEARCH_TEXT = 'CLEAR_SEARCH_TEXT'

let initialState = {
    searchText: '',
    previousName: 'batman',
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SEARCH_TEXT: {
            return { ...state, searchText: action.text};
        }
        case CLEAR_SEARCH_TEXT: {
            return { ...state, previousName: state.searchText, searchText: ''};
        }
        default: {
            return state;
        }

    }
}


export const updateSearchTextAC = (text) => {
    return {type: UPDATE_SEARCH_TEXT, text }
}
export const clearSearchTextAC = () => {
    return {type: CLEAR_SEARCH_TEXT}
}

export default searchReducer;