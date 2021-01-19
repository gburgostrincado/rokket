import { useSelector } from "react-redux";
import { searchPost, searchText } from "../actions/postsActions";

const Search = ({dispatch}) => {
    const search = useSelector(state => state.search)

    const onSearch = (e) => {
        e.preventDefault();
        dispatch(searchPost(search))
      }
    return (
        <form className="search-container" onSubmit={onSearch}>
            <input type="text" className="form-control" placeholder="Buscar por tags..." name="search" onChange={(e) => dispatch(searchText(e.target.value)) } value={search} />
            <button className="btn btn-primary" >Buscar</button>
        </form>
    )
}

export default Search