import { useSelector } from "react-redux"
import { ERROR } from "../types"

const Posts = ({posts, dispatch}) => {
    const filterPosts = useSelector(state => state.filterPosts)

    if(filterPosts?.length === 0) {
        dispatch({type: ERROR, payload: 'the post does not exist'})
    } else {
        dispatch({type: ERROR, payload: ''})
    }

    return (
            filterPosts?.length > 0 ? filterPosts.map(post => (
                <div className="card animate__animated animate__fadeIn" key={post.id} style={{width: '18rem'}}>
                    <div className="content-image">
                        <img src={post.image} alt={post.text} style={{width: '100%'}} />
                        <div className="likes">
                            <p><span> likes {post.likes}</span></p>
                        </div>
                    </div>
                    
                    <div className="card-body">
                        <p className="card-text">{post.text}</p>
                        {/* <img src={post.owner.picture} className="avatar" alt={post.owner.firstName + post.owner.lastName} /> */}
                        <div className="tags">
                            {post.tags.map(tag => <span className="badge bg-light text-dark">{tag}</span>)}
                        </div>
                    </div>
                </div>) )
            : posts.map(post => (
                <div className="card animate__animated animate__fadeIn" key={post.id} style={{width: '18rem'}}>
                    <div className="content-image">
                        <img src={post.image} alt={post.text} style={{width: '100%'}} />
                        <div className="likes">
                            <p><span> likes {post.likes}</span></p>
                        </div>
                    </div>
                    
                    <div className="card-body">
                        <p className="card-text">{post.text}</p>
                        {/* <img src={post.owner.picture} className="avatar" alt={post.owner.firstName + post.owner.lastName} /> */}
                        <div className="tags">
                            {post.tags.map(tag => <span className="badge bg-light text-dark">{tag}</span>)}
                        </div>
                    </div>
                </div>
            ))
    )
}

export default Posts