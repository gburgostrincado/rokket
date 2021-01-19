import { GET_POSTS, SEARCH_POST, ERROR } from "../types"

const initialState = {
    isLoading: true,
    posts: [],
    filterPosts: [],
    search: ''
}

const posts = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                isLoading: false
            }
        case SEARCH_POST:
            if(action.payload) {
                const filterPosts = state.posts.filter(post => post.tags.map(tag => tag.toLowerCase()).includes(action.payload.toLowerCase()))
                return {
                    ...state,
                    filterPosts: filterPosts
                }
            } else {
                return {
                    ...state,
                    filterPosts: []
                }
            }
        case 'search': 
            return {
                ...state,
                search: action.payload
            }
        case ERROR: 
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}


export default posts