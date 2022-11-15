const Search = (props) => {
  return (
    <form>
      Find Countries: <input onChange={props.handleSearch} />
    </form>
  );
};

export default Search;