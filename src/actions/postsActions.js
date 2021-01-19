import axios from "axios"
import { GET_POSTS, SEARCH_POST } from "../types"

const config = {
    headers: {
      'app-id': '600736157643b9c3df5e1320'
    }
  }
const URL = 'https://dummyapi.io/data/api/post'

export const getPosts = () => async dispatch => {
    try {
        const {data} = await axios.get(URL, config)

        dispatch({
            type: GET_POSTS,
            payload: data.data
        })
    }catch(err) {
       console.log(err.response)
    }
}

export const searchPost = (search) => async dispatch => {
    dispatch({
        type: SEARCH_POST,
        payload: search
    })
}

export const searchText = (search) => async dispatch => {
    dispatch({
        type: 'search',
        payload: search
    })
}
