const Search = (props) => {
  return (
    <form>
      Search: <input onChange={props.handleSearch} />
    </form>
  );
};

export default Search;