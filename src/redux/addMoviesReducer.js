const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES'
const UPDATE_CURRENT_PAGE = 'UPDATE_CURRENT_PAGE'

let initialState = {
    currentPage: 1,
    totalPages: 1,
};

const addMoviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOTAL_PAGES: {
            state.currentPage = 1
            return { ...state, totalPages: Math.ceil(action.totalPages/10)};
        }
        case UPDATE_CURRENT_PAGE: {

            return { ...state, currentPage: state.currentPage + 1};
        }
        default: {
            return state;
        }

    }
}


export const setTotalPagesAC = (totalPages) => {
    return {type: SET_TOTAL_PAGES, totalPages }
}
export const updateCurrentPageAC = () => {
    return {type: UPDATE_CURRENT_PAGE}
}

export default addMoviesReducer;