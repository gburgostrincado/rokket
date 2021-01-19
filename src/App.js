import { useEffect } from 'react';
import './App.css';
import { getPosts } from './actions/postsActions';
import { useDispatch, useSelector } from 'react-redux';
import Posts from './components/Posts';
import Search from './components/Search';

function App() {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts)
  const isLoading = useSelector(state => state.isLoading)
  const error = useSelector(state => state.error)

  useEffect(() => {
    dispatch(getPosts())    
  }, [dispatch])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://www.rokketlabs.com/assets/logos/horizontal-purple.svg" alt="logo" />
      </header>
      <div className="container">
        {error && <p className="text-danger">{error}</p>}
        <Search dispatch={dispatch} />
        <div className="post-container  animate__animated animate__fadeIn">
        {isLoading ? <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
        : <Posts posts={posts} dispatch={dispatch} />
        }  

        </div>
      </div>
    </div>
  );
}

export default App;
