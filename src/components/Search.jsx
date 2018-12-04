var Search = ({handleSubmit}) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" placeholder="Search" />
    <button className="btn hidden-sm-down" onClick={handleSubmit()}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
